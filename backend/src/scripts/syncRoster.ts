import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Club, Member } from "../model";
import { storedMedia } from "../media";
import { clubMediaKeys, clubRosters, staff, staffMediaKey } from "../content/roster";

dotenv.config();

const UPLOADS_DIR = path.join(__dirname, "..", "..", "uploads");

const exactName = (name: string) =>
  new RegExp(`^${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "i");

const plannedClubs = clubRosters.map((club) => {
  const keys = clubMediaKeys(club);
  return {
    name: club.name,
    logo: keys.logo,
    banner: keys.banner,
    executives: keys.executives.map(({ name, post, image }) => ({
      full_name: name,
      post: post ?? "",
      image,
    })),
  };
});

const plannedStaff = staff.map((person) => ({
  name: person.name,
  post: person.post ?? "",
  image: staffMediaKey(person),
}));

const missingFiles = [
  ...plannedClubs.flatMap((club) => [club.logo, club.banner, ...club.executives.map((e) => e.image)]),
  ...plannedStaff.map((person) => person.image),
].filter((key) => !fs.existsSync(path.join(UPLOADS_DIR, key)));

const syncClubs = () =>
  Promise.all(
    plannedClubs.map(async (club) => {
      const before = await Club.findOneAndUpdate(
        { name: exactName(club.name) },
        {
          $set: {
            logo: storedMedia(club.logo),
            banner: storedMedia(club.banner),
            executives: club.executives.map((e) => ({ ...e, image: storedMedia(e.image) })),
          },
          $setOnInsert: { name: club.name },
        },
        { upsert: true },
      );
      return `${before ? "updated" : "created"} club ${club.name} (${club.executives.length} executives)`;
    }),
  );

const syncStaff = () =>
  Promise.all(
    plannedStaff.map(async (person) => {
      const before = await Member.findOneAndUpdate(
        { name: exactName(person.name) },
        { $set: { post: person.post, image: storedMedia(person.image) }, $setOnInsert: { name: person.name } },
        { upsert: true },
      );
      return `${before ? "updated" : "created"} member ${person.name} (${person.post})`;
    }),
  );

const main = async () => {
  if (missingFiles.length) {
    throw new Error(`Media files missing from uploads/:\n${missingFiles.join("\n")}`);
  }
  if (!process.env.MONGO_URI) throw new Error("MONGO_URI is not set");

  await mongoose.connect(process.env.MONGO_URI);
  const results = [...(await syncClubs()), ...(await syncStaff())];
  results.forEach((line) => console.log(line));
};

main()
  .catch((error: Error) => {
    console.error(error.message);
    process.exitCode = 1;
  })
  .finally(() => mongoose.disconnect());
