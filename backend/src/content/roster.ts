export interface Person {
  name: string;
  post?: string;
}

export interface ClubRoster {
  name: string;
  slug: string;
  executives: Person[];
}

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[().,']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const people = (...names: string[]): Person[] => names.map((name) => ({ name }));

export const clubRosters: ClubRoster[] = [
  {
    name: "Art Club",
    slug: "art-club",
    executives: people(
      "Esosa Airhienbuwa",
      "Ipinuoluwa Salvation Yusuf",
      "Mmerechi D. Chidi-Ukwu",
      "Momoreoluwa Fatuna",
      "Olawuyi Megan",
      "Olayinka Gbolahan",
      "Oluwafolawemi Jaseem Adeyemi",
      "Omokanyinsola Olatunji (Olumuyiwa)",
      "Pascal Opara",
      "Somotochukwu Mary Morah",
      "Tolulope Oyekola",
      "Toluwalase Abiri",
      "Umoh Daniel Ibukun-Oluwa",
      "Uwadinachi Amarachukwu",
    ),
  },
  {
    name: "Community Service Project (CSP)",
    slug: "community-service-project",
    executives: people(
      "Ayomide Adebowale",
      "Benita Ajagunna",
      "Chineze Nwosisi",
      "Jada Mafuru",
      "Joshua Adeyemi",
      "Joy Samuel",
      "Mariam Olawuyi",
      "Mubarak Lawal",
      "Oluwademilade Oguntade",
      "Racheal Bakare",
      "Taiwo Olamide",
    ),
  },
  {
    name: "Drama Club",
    slug: "drama-club",
    executives: people(
      "Abrianna Adedipe",
      "Benedict Adekola",
      "David Edwards",
      "Jodie Ajibola",
      "Olaye Omayuku",
      "Oluwakanyinsola Ogunade",
      "Oluwatomiwa Olatunji",
      "Rajab Umar",
      "Toluwalase Abiri",
    ),
  },
  {
    name: "Entrepreneurship Club",
    slug: "entrepreneurship-club",
    executives: people("Chukwuazolem Onaro", "Onyinyechukwu Angelica Anakua"),
  },
  {
    name: "Film Club",
    slug: "film-club",
    executives: people("Emmanuella Abah (Ell)", "Ferdinand Abad", "Molayo Abiola"),
  },
  {
    name: "Mind Matters Alliance",
    slug: "mind-matters-alliance",
    executives: people("Kuku Eriife", "Nnabundo Micheal Izuchukwu", "Odurinde Darasimi Leah"),
  },
  {
    name: "Public Speaking Club",
    slug: "public-speaking-club",
    executives: people(
      "Beulah Ejiofor",
      "Christine Keke",
      "Emmanuel Mensah",
      "Enomfon Okon",
      "Joanita Ojiemeke",
    ),
  },
  {
    name: "The Book Club",
    slug: "the-book-club",
    executives: people("Feranoluwa Okubanjo", "Mojisola Kuti", "Oluwanifemi Olawole"),
  },
  {
    name: "The Finance Society",
    slug: "the-finance-society",
    executives: people(
      "Adenike Adewole",
      "Aleshinloye Mistura",
      "Alvin Byron",
      "Ayanfeoluwa Opral Ogbonna",
      "Daniel Emmanuel",
      "Fareedah Lamidi",
      "Moferanoluwa Okubanjo",
      "Olumide Orojimi",
      "Oluwabukunmi Bada",
      "Oluwapelumi Adesipe",
      "Paul Majiyebo Esuga",
      "Peter David Nwaoru",
      "Shalom Oghenetega Ayigbe",
      "Tamunodiepriye Harrison",
      "Uchechi Anya",
    ),
  },
  {
    name: "The Living Green Club",
    slug: "the-living-green-club",
    executives: people(
      "Abdullahi Oropo",
      "Adeyemo Ayomikun",
      "Angel Okoye",
      "Assumpta Ezeh",
      "Chizitelu Ochiagha",
      "Christabel Nnabueze",
      "Christine Keke",
      "Denzel Atseyinku",
      "Ethan Ogun",
      "Fidelis Igboekwu",
      "Kelvin Adongo",
      "Mary Fagbohun",
      "Milcah Taingson",
      "Mubarak Lawal",
      "Ogochukwu Ezeoma",
      "Oluwatobiloba Bankole-Ladipo",
      "Vanessa Isiuwe",
    ),
  },
];

export const staff: Person[] = [
  { name: "Ms. Ayotunde Tokurah", post: "Guidance Counsellor" },
  { name: "Cynthia Egbuleze", post: "Safeguarding Officer" },
  { name: "James Ortema", post: "Activities Officer" },
  { name: "Josephine Rolland", post: "Services Officer" },
  { name: "Oluwadamilola Pearce", post: "Sports Director" },
];

export const clubMediaKeys = (club: ClubRoster) => ({
  logo: `clubs/${club.slug}/logo.webp`,
  banner: `clubs/${club.slug}/banner.webp`,
  executives: club.executives.map((person) => ({
    ...person,
    image: `clubs/${club.slug}/executives/${slugify(person.name)}.webp`,
  })),
});

export const staffMediaKey = (person: Person) =>
  `members/${slugify(person.name.replace(/^(Mr|Mrs|Ms|Dr)\.\s+/, ""))}.webp`;
