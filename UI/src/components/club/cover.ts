import type { ClubItem } from ".";

type CoverFit = "cover" | "contain";

const COVER_FIT_CLUBS = ["Community Service Project (CSP)", "Art Club"];

export const clubCover = (club: ClubItem): { src?: string; fit: CoverFit; background?: string } =>
  club.banner
    ? { src: club.banner, fit: "cover" }
    : {
      src: club.image?.value,
      fit: COVER_FIT_CLUBS.includes(club.name) ? "cover" : "contain",
      background: club.image?.background,
    };
