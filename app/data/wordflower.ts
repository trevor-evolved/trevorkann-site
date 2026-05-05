export type FlowerPuzzle = {
  id: string;
  slug: string;
  title: string;
  date: string;
  center: string;
  outer: string[]; // clockwise from top
  answers: string[];
  powerWord: string;
};

export const FLOWER_PUZZLES: FlowerPuzzle[] = [
  {
    id: "36b320f6",
    slug: "flower-power",
    title: "Flower Power",
    date: "Jan 2025",
    center: "I",
    outer: ["T", "U", "R", "B", "N", "E"],
    powerWord: "turbine",
    answers: [
      "beerier", "bier", "bite", "biter", "bitten", "bitter", "bitterer", "bittier",
      "bribe", "briber", "brie", "brier", "brinier", "bruin", "bruit", "butterier",
      "eerier", "eerie", "ennui", "entire", "intern", "inert", "inner", "inter",
      "internet", "internee", "intuit", "inure", "nine", "nineteen", "niter",
      "nubbier", "nubbin", "nutrient", "rein", "rennin", "retire", "retiree",
      "retie", "retinue", "reunite", "ribber", "rite", "rubier", "ruin",
      "runnier", "runtier", "ruttier", "teenier", "terrier", "terrine", "tier",
      "tinier", "tine", "tint", "tire", "titter", "trier", "trite", "triter",
      "tribe", "tribune", "tribute", "tubbier", "turbine", "tutti", "tinnier",
      "unit", "unite", "untie", "urine", "uteri", "uterine",
    ],
  },
  {
    id: "ae9d167f",
    slug: "flower-2",
    title: "Flower 2",
    date: "Mar 2025",
    center: "W",
    outer: ["E", "R", "N", "A", "B", "L"],
    powerWord: "renewable",
    answers: [
      "anew", "aware", "bawl", "beware", "blew", "brawn", "brawl", "brawler",
      "brew", "brewer", "ewer", "lawn", "newel", "newer", "rawer", "renew",
      "renewal", "renewable", "wall", "wale", "wane", "wanna", "wannabe",
      "wanner", "ware", "warn", "warren", "wean", "wear", "wearable", "wearer",
      "weal", "well", "were", "warble", "warbler", "wren",
    ],
  },
  {
    id: "8a7e5de9",
    slug: "flower-3",
    title: "Flower 3",
    date: "Apr 2025",
    center: "F",
    outer: ["B", "I", "O", "U", "E", "L"],
    powerWord: "biofuel",
    answers: [
      "beef", "befell", "befoul", "belief", "biff", "biofuel", "boffo",
      "bluff", "buff", "feeble", "feel", "fell", "fife", "fief", "file",
      "fill", "filo", "flee", "floe", "flub", "flue", "fluff", "foil",
      "folio", "fool", "foul", "foible", "fuel", "full", "fulfill",
      "luff", "life", "bluff",
    ],
  },
  {
    id: "0fecdaa4",
    slug: "flower-4",
    title: "Flower 4",
    date: "Apr 2025",
    center: "Y",
    outer: ["D", "E", "H", "R", "A", "T"],
    powerWord: "dehydrated",
    answers: [
      "array", "arrayed", "artery", "arty", "ayah", "daddy", "deary",
      "dehydrate", "dehydrated", "dreary", "dray", "dryad", "dryer", "dyad",
      "dyed", "dyer", "earthy", "eatery", "eddy", "eyeteeth", "hardy",
      "harry", "hayed", "heady", "hearty", "heyday", "hydra", "hydrate",
      "hydrated", "ratty", "ready", "reedy", "retry", "tatty", "tardy",
      "tarry", "teary", "teddy", "terry", "they", "tray", "treaty", "trey",
      "yard", "year", "yeah",
    ],
  },
  {
    id: "10435ddc",
    slug: "flower-5",
    title: "Flower 5",
    date: "May 2025",
    center: "G",
    outer: ["E", "N", "R", "A", "T", "O"],
    powerWord: "generator",
    answers: [
      "agar", "agate", "aggro", "aggregate", "aggregator", "agog", "agent",
      "anger", "agree", "argent", "argon", "argot", "arrange", "arranger",
      "arrogate", "eager", "eagerer", "egret", "eggnog", "engage", "engorge",
      "enrage", "ergo", "ergot", "gage", "gaga", "gang", "gangrene", "gannet",
      "garage", "garner", "garnet", "garret", "garter", "garrote", "garroter",
      "gate", "gator", "gear", "gene", "genera", "generate", "generator",
      "gent", "genre", "gone", "goner", "gong", "goon", "gore", "gorge",
      "gorgon", "gotta", "gotten", "gonna", "gran", "gran", "grange", "grant",
      "granter", "grantee", "grate", "grater", "great", "greater", "green",
      "greener", "greet", "greeter", "groan", "groat", "grotto", "nagger",
      "negate", "ogle", "ogre", "orange", "organ", "oregano", "rage", "rang",
      "range", "ranger", "reagent", "rearrange", "reengage", "regent", "regatta",
      "reggae", "regenerate", "renege", "reneger", "regret", "regnant", "roger",
      "tagger", "tang", "tango", "tangent", "target", "teenage", "teenager",
      "toga", "tong", "tonnage",
    ],
  },
];
