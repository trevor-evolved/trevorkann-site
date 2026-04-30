import { PuzzleData } from "../components/Puzzles";

interface PuzzleEntry extends PuzzleData {
  slug: string;
  date: string;
}

export const PUZZLES: PuzzleEntry[] = [
  // puzzle-13 — Oct 30, 2025
  {
    slug: "puzzle-13",
    date: "Oct 30, 2025",
    title: "Puzzle 13: Staying Current",
    rows: 5,
    cols: 5,
    solution: [
      ["O", "B", "B", "B", "A"],
      [null, "E", "E", "L", "S"],
      ["I", "S", "L", "E", "S"],
      ["R", "O", "T", "A", null],
      ["A", "S", "S", "T", null],
    ],
    nums: [
      [1,    2, 3, 4, 5],
      [null, 6, 0, 0, 0],
      [7,    0, 0, 0, 0],
      [8,    0, 0, 0, null],
      [9,    0, 0, 0, null],
    ],
    across: [
      { n: 1, row: 0, clue: "Current law that overturned 7-Down, abbr." },
      { n: 6, row: 1, clue: "Congers" },
      { n: 7, row: 2, clue: "Archipelago components" },
      { n: 8, row: 3, clue: "Personnel list" },
      { n: 9, row: 4, clue: "Mgr.'s helper" },
    ],
    down: [
      { n: 2, col: 1, clue: "Xs en España" },
      { n: 3, col: 2, clue: "Karate acquisitions" },
      { n: 4, col: 3, clue: "Sheep's cry" },
      { n: 5, col: 4, clue: "Nincompoop" },
      { n: 7, col: 0, clue: "Biden-era law, abbr." },
    ],
  },

  // puzzle-12 — Oct 23, 2025
  {
    slug: "puzzle-12",
    date: "Oct 23, 2025",
    title: "Puzzle 12: Staying Current",
    rows: 5,
    cols: 5,
    solution: [
      ["T", "E", "N", "S", "E"],
      [null, "M", "O", "O", "D"],
      ["A", "M", "B", "L", "E"],
      ["N", "Y", "L", "O", "N"],
      ["Y", null, "E", "S", "S"],
    ],
    nums: [
      [1,    2, 3, 4, 5],
      [null, 6, 0, 0, 0],
      [7,    0, 0, 0, 0],
      [8,    0, 0, 0, 0],
      [0,    null, 9, 0, 0],
    ],
    across: [
      { n: 1, row: 0, clue: "On edge, or when combined with the colorful letters in 7-Across, Evolved's new Modeling to Generate Alternatives platform." },
      { n: 6, row: 1, clue: "Disposition" },
      { n: 7, row: 2, clue: "Mosey" },
      { n: 8, row: 3, clue: "Hose material" },
      { n: 9, row: 4, clue: "Road curve" },
    ],
    down: [
      { n: 2, col: 1, clue: "Oscar's cousin" },
      { n: 3, col: 2, clue: "Aristocratic gas" },
      { n: 4, col: 3, clue: "Karaoke songs, usually" },
      { n: 5, col: 4, clue: "Paradises" },
      { n: 7, col: 0, clue: "Whichever" },
    ],
  },

  // puzzle-11 — Sep 29, 2025
  {
    slug: "puzzle-11",
    date: "Sep 29, 2025",
    title: "Puzzle 11: Staying Current",
    rows: 5,
    cols: 5,
    solution: [
      [null, "H", "E", "A", "T"],
      ["P",  "E", "N", "C", "E"],
      ["U",  "L", "T", "R", "A"],
      ["M",  "A", "R", "I", "S"],
      ["P",  "S", "Y", "D", null],
    ],
    nums: [
      [null, 1, 2, 3, 4],
      [5,    0, 0, 0, 0],
      [6,    0, 0, 0, 0],
      [7,    0, 0, 0, 0],
      [8,    0, 0, 0, null],
    ],
    across: [
      { n: 1, row: 0, clue: "The ____ is on; or, with 5 Down, in-home electric warming and cooling unit." },
      { n: 5, row: 1, clue: "British penny" },
      { n: 6, row: 2, clue: "Prefix for sound or marathon" },
      { n: 7, row: 3, clue: "Roger with 61" },
      { n: 8, row: 4, clue: "Adv deg for a shrink" },
    ],
    down: [
      { n: 1, col: 1, clue: "Alas, in France" },
      { n: 2, col: 2, clue: "Way in" },
      { n: 3, col: 3, clue: "Bitter" },
      { n: 4, col: 4, clue: "Darjeeling and oolong" },
      { n: 5, col: 0, clue: "____ up the jam" },
    ],
  },

  // puzzle-10 — Aug 14, 2025
  {
    slug: "puzzle-10",
    date: "Aug 14, 2025",
    title: "Puzzle 10: Staying Current",
    rows: 5,
    cols: 5,
    solution: [
      [null, null, "P", null, null],
      [null, "B",  "L", "M",  null],
      ["G",  "R",  "A", "I",  "L"],
      ["P",  "I",  "N", "C",  "H"],
      ["A",  "S",  "K", "E",  "R"],
    ],
    nums: [
      [null, null, 1,    null, null],
      [null, 2,    0,    3,    null],
      [4,    0,    0,    0,    5],
      [6,    0,    0,    0,    0],
      [7,    0,    0,    0,    0],
    ],
    across: [
      { n: 2, row: 1, clue: "Racial equity inits, or public lands abbr." },
      { n: 4, row: 2, clue: "Chalice" },
      { n: 6, row: 3, clue: "Test that reveals if one is dreaming" },
      { n: 7, row: 4, clue: "Interrogator" },
    ],
    down: [
      { n: 1, col: 2, clue: "Pirate ship feature" },
      { n: 2, col: 1, clue: "Jewish ritual" },
      { n: 3, col: 3, clue: "\"Of ___ and Men\"" },
      { n: 4, col: 0, clue: "Student stat" },
      { n: 5, col: 4, clue: "Heathrow code" },
    ],
  },

  // puzzle-9 — Aug 12, 2025
  {
    slug: "puzzle-9",
    date: "Aug 12, 2025",
    title: "Puzzle 9: Staying Current",
    rows: 5,
    cols: 5,
    solution: [
      ["N", "E", "W", null, "S"],
      ["A", "B", "A", "C",  "K"],
      ["N", "O", "T", "R",  "Y"],
      ["C", "L", "E", "A",  "R"],
      ["Y", "A", "R", "N",  "S"],
    ],
    nums: [
      [1,    2, 3, null, 4],
      [5,    0, 0, 6,    0],
      [7,    0, 0, 0,    0],
      [8,    0, 0, 0,    0],
      [9,    0, 0, 0,    0],
    ],
    across: [
      { n: 1, row: 0, clue: "Brand spankin' ___, or with 8 Across, a homophone for the energy from splitting atoms." },
      { n: 5, row: 1, clue: "Taken ___" },
      { n: 7, row: 2, clue: "\"There is __ ___, only do.\" -Yoda" },
      { n: 8, row: 3, clue: "Cloudless" },
      { n: 9, row: 4, clue: "Exaggerated stories" },
    ],
    down: [
      { n: 1, col: 0, clue: "Drew on a case" },
      { n: 2, col: 1, clue: "Deadly virus" },
      { n: 3, col: 2, clue: "No-cal drink" },
      { n: 4, col: 4, clue: "Icelandic yogurts" },
      { n: 6, col: 3, clue: "Meaningless prefix with \"berry\"" },
    ],
  },

  // puzzle-8 — Jul 31, 2025
  {
    slug: "puzzle-8",
    date: "Jul 31, 2025",
    title: "Puzzle 8: Staying Current",
    rows: 6,
    cols: 5,
    solution: [
      ["C", "L", "E", "A", "N"],
      ["R", "I", "N", "S", "E"],
      ["U", "S", "E", "R", "S"],
      ["S", "T", "R", "U", "T"],
      ["E", "A", "G", "L", "E"],
      ["S", "T", "Y", "E", "D"],
    ],
    nums: [
      [1,  2, 3, 4, 5],
      [6,  0, 0, 0, 0],
      [7,  0, 0, 0, 0],
      [8,  0, 0, 0, 0],
      [9,  0, 0, 0, 0],
      [10, 0, 0, 0, 0],
    ],
    across: [
      { n: 1,  row: 0, clue: "Spotless, or with 3-down, the source of little or no emissions." },
      { n: 6,  row: 1, clue: "Lather, _____, repeat." },
      { n: 7,  row: 2, clue: "Exploiters" },
      { n: 8,  row: 3, clue: "Walk with a swagger" },
      { n: 9,  row: 4, clue: "Bald bird" },
      { n: 10, row: 5, clue: "Penned up, like pigs" },
    ],
    down: [
      { n: 1, col: 0, clue: "Old, earthen pots for liquids, or a misspelling of a sea voyage." },
      { n: 2, col: 1, clue: "Have a suggested price of" },
      { n: 3, col: 2, clue: "Vigor" },
      { n: 4, col: 3, clue: '"__ a ____..." (ordinarily, generally)' },
      { n: 5, col: 4, clue: "Like Russian dolls" },
    ],
  },

  // puzzle-7 — Jul 18, 2025
  {
    slug: "puzzle-7",
    date: "Jul 18, 2025",
    title: "Puzzle 7: Staying Current",
    rows: 5,
    cols: 5,
    solution: [
      ["C", "E", "R", "T", "A"],
      ["A", "B", "O", "R", "T"],
      ["M", "O", "D", "E", "L"],
      ["P", "L", "A", "N", "A"],
      ["S", "A", "N", "D", "S"],
    ],
    nums: [
      [1, 2, 3, 4, 5],
      [6, 0, 0, 0, 0],
      [7, 0, 0, 0, 0],
      [8, 0, 0, 0, 0],
      [9, 0, 0, 0, 0],
    ],
    across: [
      { n: 1, row: 0, clue: "The start of certainty?" },
      { n: 6, row: 1, clue: "Call off" },
      { n: 7, row: 2, clue: "From runways in Paris to PATHWAYS in RIO" },
      { n: 8, row: 3, clue: "First option" },
      { n: 9, row: 4, clue: "Smooths, as wood" },
    ],
    down: [
      { n: 1, col: 0, clue: "David and Pendleton" },
      { n: 2, col: 1, clue: "Virus named for an African river" },
      { n: 3, col: 2, clue: "Mothra's nemesis" },
      { n: 4, col: 3, clue: "Current fashion" },
      { n: 5, col: 4, clue: "Over the shoulder boulder holder" },
    ],
  },

  // puzzle-6 — Jun 23, 2025
  {
    slug: "puzzle-6",
    date: "Jun 23, 2025",
    title: "Puzzle 6: Staying Current",
    rows: 5,
    cols: 5,
    solution: [
      ["P", "A", "T", "H", null],
      [null, "W", "A", "Y", "S"],
      ["T",  "A", "R", "D", "E"],
      ["S",  "K", "O", "R", "T"],
      ["P",  "E", "S", "O", "S"],
    ],
    nums: [
      [1,    2, 3, 4,    null],
      [null, 5, 0, 0,    6],
      [7,    0, 0, 0,    0],
      [8,    0, 0, 0,    0],
      [9,    0, 0, 0,    0],
    ],
    across: [
      { n: 1, row: 0, clue: "Hiking trail, or with 5-Across, Scenarios for analyzing decarbonization goals." },
      { n: 5, row: 1, clue: "___ and Means Committee" },
      { n: 7, row: 2, clue: "Siesta time" },
      { n: 8, row: 3, clue: "Hybrid tennis garment" },
      { n: 9, row: 4, clue: "Mexican money" },
    ],
    down: [
      { n: 2, col: 1, clue: "Not sleeping" },
      { n: 3, col: 2, clue: "Edible tubers" },
      { n: 4, col: 3, clue: "Water power, for short" },
      { n: 6, col: 4, clue: "Tennis units" },
      { n: 7, col: 0, clue: "Small recipe meas." },
    ],
  },

  // puzzle-5 — Jun 12, 2025
  {
    slug: "puzzle-5",
    date: "Jun 12, 2025",
    title: "Puzzle 5: Staying Current",
    rows: 5,
    cols: 5,
    solution: [
      ["A", "N", "E", "T", "A"],
      ["M", "I", "X", "E", "R"],
      ["A", "C", "E", "N", "T"],
      ["Z", "E", "R", "O", "S"],
      ["E", "N", "T", "R", "Y"],
    ],
    nums: [
      [1, 2, 3, 4, 5],
      [6, 0, 0, 0, 0],
      [7, 0, 0, 0, 0],
      [8, 0, 0, 0, 0],
      [9, 0, 0, 0, 0],
    ],
    across: [
      { n: 1, row: 0, clue: "When getting picked up from LAX or JFK, you should provide __ ___ (or, the circled clues here + in 8-across, the complete negation of emissions)." },
      { n: 6, row: 1, clue: "Social event or kitchen appliance" },
      { n: 7, row: 2, clue: "Not worth ___ (broke)" },
      { n: 8, row: 3, clue: "Goose eggs" },
      { n: 9, row: 4, clue: "Contest submission" },
    ],
    down: [
      { n: 1, col: 0, clue: "Flabbergast" },
      { n: 2, col: 1, clue: "Spiff (up), in dialect" },
      { n: 3, col: 2, clue: "Apply with effort" },
      { n: 4, col: 3, clue: "Pavarotti was one of three" },
      { n: 5, col: 4, clue: "Bohemian" },
    ],
  },

  // puzzle-4 — May 15, 2025
  {
    slug: "puzzle-4",
    date: "May 15, 2025",
    title: "Puzzle 4: Staying Current",
    rows: 5,
    cols: 5,
    solution: [
      ["W", "O", "O", "E",  "D"],
      ["H", "Y", "D", "R",  "O"],
      ["A", "V", "E", "R",  "T"],
      ["T", "E", "T", "E",  null],
      [null, "Y", "O", "D", "A"],
    ],
    nums: [
      [1,    2, 3, 4, 5],
      [6,    0, 0, 0, 0],
      [7,    0, 0, 0, 0],
      [8,    0, 0, 0, null],
      [null, 9, 0, 0, 0],
    ],
    across: [
      { n: 1, row: 0, clue: "Romanced" },
      { n: 6, row: 1, clue: "Where to get your Dam Power, informally" },
      { n: 7, row: 2, clue: "Prevent" },
      { n: 8, row: 3, clue: "Place for a beret" },
      { n: 9, row: 4, clue: "Jedi he is" },
    ],
    down: [
      { n: 1, col: 0, clue: "Huh?" },
      { n: 2, col: 1, clue: "Yiddish \"Yikes!\"" },
      { n: 3, col: 2, clue: "\"__ _ Joy\"" },
      { n: 4, col: 3, clue: "Slipped up" },
      { n: 5, col: 4, clue: "Com preceder" },
    ],
  },

  // puzzle-3 — Jun 2, 2025
  {
    slug: "puzzle-3",
    date: "Jun 2, 2025",
    title: "Puzzle 3: Staying Current",
    rows: 5,
    cols: 5,
    solution: [
      ["A", "P", "P", "L", "E"],
      ["C", "O", "L", "A", null],
      ["I", "W", "A", "N", "T"],
      ["N", "E", "C", "C", "O"],
      ["G", "R", "E", "E", "N"],
    ],
    nums: [
      [1,    2, 3, 4, 0],
      [5,    0, 0, 0, null],
      [6,    0, 0, 0, 7],
      [8,    0, 0, 0, 0],
      [9,    0, 0, 0, 0],
    ],
    across: [
      { n: 1, row: 0, clue: "Fuji or gala" },
      { n: 5, row: 1, clue: "Pepsi but not Sprite" },
      { n: 6, row: 2, clue: "\"_____ it that way\"" },
      { n: 8, row: 3, clue: "Classic wafer" },
      { n: 9, row: 4, clue: "Inexperienced, or with 2-Down, electricity from renewables" },
    ],
    down: [
      { n: 1, col: 0, clue: "Serving perfectly" },
      { n: 2, col: 1, clue: "Megalomaniac's desire, or see 9-Across" },
      { n: 3, col: 2, clue: "\"There's no ___ like home\"" },
      { n: 4, col: 3, clue: "Knight stick" },
      { n: 7, col: 4, clue: "2,000 pounds" },
    ],
  },

  // puzzle-2 — Jun 3, 2025
  {
    slug: "puzzle-2",
    date: "Jun 3, 2025",
    title: "Puzzle 2: Staying Current",
    rows: 5,
    cols: 5,
    solution: [
      ["H", "A", "S",  null, "U"],
      ["E", "L", "E",  "C",  "T"],
      ["A", "T", "R",  "I",  "A"],
      ["P", "E", "R",  "T",  "H"],
      [null, "R", "A", "Y",  null],
    ],
    nums: [
      [1,    2, 3,    null, 4],
      [5,    0, 0,    6,    0],
      [7,    0, 0,    0,    0],
      [8,    0, 0,    0,    0],
      [null, 9, 0,    0,    null],
    ],
    across: [
      { n: 1, row: 0, clue: "Contains" },
      { n: 5, row: 1, clue: "Vote into office, or, with the circled portions of 7-Across and 6-down, what flows through the grid" },
      { n: 7, row: 2, clue: "Heart chambers" },
      { n: 8, row: 3, clue: "City in Western Australia" },
      { n: 9, row: 4, clue: "Beam of light" },
    ],
    down: [
      { n: 1, col: 0, clue: "An oodle (of)" },
      { n: 2, col: 1, clue: "___ ego" },
      { n: 3, col: 2, clue: "Spanish Missionary Junipero ___" },
      { n: 4, col: 4, clue: "Six-sided state" },
      { n: 6, col: 3, clue: "Kind of slicker" },
    ],
  },

  // puzzle-1 — Jun 5, 2025
  {
    slug: "puzzle-1",
    date: "Jun 5, 2025",
    title: "Puzzle 1: Staying Current",
    rows: 5,
    cols: 5,
    solution: [
      [null, null, "P", null, null],
      [null, "L",  "A", "X",  null],
      ["P",  "I",  "N", "T",  "O"],
      ["O",  "P",  "E", "R",  "A"],
      ["S",  "O",  "L", "A",  "R"],
    ],
    nums: [
      [null, null, 1,    null, null],
      [null, 2,    0,    3,    null],
      [4,    0,    0,    0,    5],
      [6,    0,    0,    0,    0],
      [7,    0,    0,    0,    0],
    ],
    across: [
      { n: 2, row: 1, clue: "Loose" },
      { n: 4, row: 2, clue: "Type of bean or Ford" },
      { n: 6, row: 3, clue: "Carmen or Tosca" },
      { n: 7, row: 4, clue: "With 1-Down, rooftop energy source" },
    ],
    down: [
      { n: 1, col: 2, clue: "See 7-Across" },
      { n: 2, col: 1, clue: "Suction prefix" },
      { n: 3, col: 3, clue: "\"____! Read all about it!\"" },
      { n: 4, col: 0, clue: "Opposite of neg" },
      { n: 5, col: 4, clue: "Row" },
    ],
  },
];
