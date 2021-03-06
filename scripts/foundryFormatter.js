// #region ▮▮▮▮▮▮▮ IMPORTS ▮▮▮▮▮▮▮ ~
// import GSheetReader from "./scripts/googleAPI/build/index.js";
/* const readerOptions = {
  sheetId: "1Dnt-PJBOtN5h33-nG-wdNfaPGCKRkR7mZutHg-H6G94",
  apiKey: "dc809f64a1089004d7271dedc0c0495ffad89872"
};

GSheetReader(
  readerOptions,
  results => {
    console.log(results);
  },
  error => {
    console.log(error);
  }
); */
// #endregion ▮▮▮▮[IMPORTS]▮▮▮▮
// #region ▮▮▮▮▮▮▮[CONFIGURATION] ▮▮▮▮▮▮▮ ~
const MINMATCHSCORE = 0.8;
const MINHYPHENWORDLENGTH = 2;
const HYPHENCHARACTER = "&shy;";
// #endregion ▮▮▮▮[CONFIGURATION]▮▮▮▮
// #region ▮▮▮▮▮▮▮ DATA ▮▮▮▮▮▮▮ ~
const TOKENTYPES = {
  "skill": [
    /^acrobatics/iu,
    /^appraise/iu,
    /^bluff/iu,
    /^climb/iu,
    /^craft/iu,
    /^diplomacy/iu,
    /^disable.?device/iu,
    /^disguise/iu,
    /^escape.?artist/iu,
    /^fly/iu,
    /^handle.?animal/iu,
    /^heal/iu,
    /^intimidate/iu,
    /^knowledge/iu,
    /^linguistics/iu,
    /^perception/iu,
    /^perform/iu,
    /^profession/iu,
    /^ride/iu,
    /^sense.?motive/iu,
    /^sleight.?of.?hand/iu,
    /^spellcraft/iu,
    /^stealth/iu,
    /^survival/iu,
    /^swim/iu,
    /^use.?magic.?device/iu
  ],
  "act-full-round": [/^full.?round/iu],
  "act-standard": [/^standard/iu],
  "act-move": [/^move(?:ment)?/iu],
  "act-swift": [/^swift/iu],
  "act-immediate": [/^immediate/iu],
  "act-free": [/^free/iu],
  "act-passive": [/^passive/iu],
  "spellPoint": [
    /sp?\.?pt?s?\.?\s*:?\s*$/iu,
    /spell.?points?\s*:?\s*/iu
  ]
};
const LINKS = {
  /* eslint-disable sort-keys */
  "(blot)": "http://spheresofpower.wikidot.com/dark#toc5",
  "(darkness)": "http://spheresofpower.wikidot.com/dark#toc0",
  "(mandate)": "http://spheresofpower.wikidot.com/war#toc5",
  "(meld)": "http://spheresofpower.wikidot.com/dark#toc2",
  "(momentum)": "http://spheresofpower.wikidot.com/war#toc6",
  "(rally)": "http://spheresofpower.wikidot.com/war#toc2",
  "(shadow)": "http://spheresofpower.wikidot.com/dark#toc6",
  "(totem)": "http://spheresofpower.wikidot.com/war#toc0",
  "[Sp]": "https://www.d20pfsrd.com/magic#TOC-Spell-Like-Abilities-Sp-",
  "[su]": "https://www.d20pfsrd.com/magic#TOC-Supernatural-Abilities-Su-",
  "AC": "https://www.d20pfsrd.com/gamemastering/combat#TOC-Armor-Class",
  "acrobatics": "https://www.d20pfsrd.com/skills/acrobatics",
  "Alteration": "http://spheresofpower.wikidot.com/alteration",
  "Alternate Racial Traits":
    "https://www.d20pfsrd.com/races/core-races/Human/#Alternate_Racial_Traits",
  "Antagonized":
    "https://www.d20pfsrd.com/Gamemastering/conditions/#Antagonized3PP",
  "appraise": "https://www.d20pfsrd.com/skills/appraise",
  "armor class":
    "https://www.d20pfsrd.com/gamemastering/combat#TOC-Armor-Class",
  "Asleep": "https://www.d20pfsrd.com/Gamemastering/conditions/#Asleep_3pp",
  "attack roll":
    "https://www.d20pfsrd.com/Gamemastering/Combat/#TOC-Attack-Roll",
  "attacks of opportunity":
    "https://www.d20pfsrd.com/Gamemastering/Combat/#TOC-Attacks-of-Opportunity",
  "aura":
    "https://www.d20pfsrd.com/alternative-rule-systems/occult-adventures/occult-rules/aura/",
  "aura of ineptitude": "http://spheresofpower.wikidot.com/eliciter#toc19",
  "auras":
    "https://www.d20pfsrd.com/alternative-rule-systems/occult-adventures/occult-rules/aura/",
  "base attack bonus":
    "https://www.d20pfsrd.com/Gamemastering/Combat/#TOC-Attack-Bonus",
  "Bleed": "https://www.d20pfsrd.com/Gamemastering/conditions/#Bleed",
  "Blinded": "https://www.d20pfsrd.com/Gamemastering/conditions/#Blinded",
  "blindsense":
    "https://www.d20pfsrd.com/gamemastering/special-abilities#TOC-Blindsight-and-Blindsense",
  "blindsight":
    "https://www.d20pfsrd.com/gamemastering/special-abilities#TOC-Blindsight-and-Blindsense",
  "Blood": "http://spheresofpower.wikidot.com/blood",
  "bluff": "https://www.d20pfsrd.com/skills/bluff",
  "bright light": "https://www.d20pfsrd.com/gamemastering/vision-and-light/",
  "Broken": "https://www.d20pfsrd.com/Gamemastering/conditions/#Broken",
  "caster level":
    "http://spheresofpower.wikidot.com/using-spheres-of-power#toc3",
  "Charisma":
    "https://www.d20pfsrd.com/BASICS-ABILITY-SCORES/ability-scores/#Charisma_Cha",
  "class level":
    "http://spheresofpower.wikidot.com/using-spheres-of-power#toc3",
  "climb": "https://www.d20pfsrd.com/skills/climb",
  "CMD":
    "https://www.d20pfsrd.com/gamemastering/combat#TOC-combat-maneuver-defense",
  "combat maneuver":
    "https://www.d20pfsrd.com/gamemastering/combat#TOC-Combat-Maneuvers",
  "combat maneuver defense":
    "https://www.d20pfsrd.com/gamemastering/combat#TOC-combat-maneuver-defense",
  "concealment": "https://www.d20pfsrd.com/gamemastering/combat#TOC-Concealment",
  "concentration": "https://www.d20pfsrd.com/magic#TOC-Concentration",
  "Confused": "https://www.d20pfsrd.com/Gamemastering/conditions/#Confused",
  "Conjuration": "http://spheresofpower.wikidot.com/conjuration",
  "Constitution":
    "https://www.d20pfsrd.com/BASICS-ABILITY-SCORES/ability-scores/#Constitution_Con",
  "cower": "https://www.d20pfsrd.com/gamemastering/conditions#TOC-Cowering",
  "cowering": "https://www.d20pfsrd.com/gamemastering/conditions#TOC-Cowering",
  "Cowering": "https://www.d20pfsrd.com/Gamemastering/conditions/#Cowering",
  "craft": "https://www.d20pfsrd.com/skills/craft",
  "crawl":
    "https://www.d20pfsrd.com/gamemastering/exploration-movement/#Modes_of_Movement",
  "crawling":
    "https://www.d20pfsrd.com/gamemastering/exploration-movement/#Modes_of_Movement",
  "Creation": "http://spheresofpower.wikidot.com/creation",
  "critical hit":
    "https://www.d20pfsrd.com/Gamemastering/Combat/#TOC-Critical-Hits",
  "Dark": "http://spheresofpower.wikidot.com/dark",
  "dark presence": "http://spheresofpower.wikidot.com/dark-presence",
  "darkness": "https://www.d20pfsrd.com/gamemastering/vision-and-light/",
  "darkness or dim light":
    "https://www.d20pfsrd.com/gamemastering/vision-and-light/",
  "darkvision":
    "https://www.d20pfsrd.com/gamemastering/special-abilities#TOC-Darkvision",
  "daylight": "https://www.d20pfsrd.com/gamemastering/vision-and-light/",
  "Dazed": "https://www.d20pfsrd.com/Gamemastering/conditions/#Dazed",
  "Dazzled": "https://www.d20pfsrd.com/Gamemastering/conditions/#Dazzled",
  "Dead": "https://www.d20pfsrd.com/Gamemastering/conditions/#Dead",
  "Deafened": "https://www.d20pfsrd.com/Gamemastering/conditions/#Deafened",
  "Death": "http://spheresofpower.wikidot.com/death",
  "Destruction": "http://spheresofpower.wikidot.com/destruction",
  "Dexterity":
    "https://www.d20pfsrd.com/BASICS-ABILITY-SCORES/ability-scores/#Dexterity_Dex",
  "dim light": "https://www.d20pfsrd.com/gamemastering/vision-and-light/",
  "diplomacy": "https://www.d20pfsrd.com/skills/diplomacy",
  "disable device": "https://www.d20pfsrd.com/skills/disable-device",
  "Disabled": "https://www.d20pfsrd.com/Gamemastering/conditions/#Disabled",
  "disadvantage": "https://5thsrd.org/rules/advantage_and_disadvantage/",
  "disguise": "https://www.d20pfsrd.com/skills/disguise",
  "Divination": "http://spheresofpower.wikidot.com/divination",
  "Doubt": "https://www.d20pfsrd.com/traits/drawbacks/doubt/",
  "Drowsy": "https://www.d20pfsrd.com/Gamemastering/conditions/#Drowsy_3pp",
  "Dying": "https://www.d20pfsrd.com/Gamemastering/conditions/#Dying",
  "eliciter": "http://spheresofpower.wikidot.com/eliciter",
  "Emotion": "http://spheresofpower.wikidot.com/eliciter#toc8",
  "Energy Drained":
    "https://www.d20pfsrd.com/Gamemastering/conditions/#Energy_Drained",
  "Enhancement": "http://spheresofpower.wikidot.com/enhancement",
  "Entangled": "https://www.d20pfsrd.com/Gamemastering/conditions/#Entangled",
  "escape artist": "https://www.d20pfsrd.com/skills/escape-artist",
  "Exhausted": "https://www.d20pfsrd.com/Gamemastering/conditions/#Exhausted",
  "expend focus":
    "http://spheresofpower.wikidot.com/using-spheres-of-might#toc12",
  "Fallen Fey": "http://spheresofpower.wikidot.com/fallen-fey",
  "Fascinated": "https://www.d20pfsrd.com/Gamemastering/conditions/#Fascinated",
  "Fate": "http://spheresofpower.wikidot.com/fate",
  "Fatigued": "https://www.d20pfsrd.com/Gamemastering/conditions/#Fatigued",
  "flank": "https://www.d20pfsrd.com/Gamemastering/combat/#TOC-Flanking",
  "flanked": "https://www.d20pfsrd.com/Gamemastering/combat/#TOC-Flanking",
  "flanking": "https://www.d20pfsrd.com/Gamemastering/combat/#TOC-Flanking",
  "Flat-Footed":
    "https://www.d20pfsrd.com/Gamemastering/conditions/#Flat-Footed",
  "fly": "https://www.d20pfsrd.com/skills/fly",
  "Fortitude": "https://www.d20pfsrd.com/Gamemastering/combat/#TOC-Fortitude",
  "free action":
    "https://www.d20pfsrd.com/Gamemastering/Combat/#TOC-Free-Actions",
  "frightened":
    "https://www.d20pfsrd.com/gamemastering/conditions#TOC-Frightened",
  "Frightened": "https://www.d20pfsrd.com/Gamemastering/conditions/#Frightened",
  "full concealment":
    "https://www.d20pfsrd.com/gamemastering/combat#TOC-Concealment",
  "full-round action":
    "https://www.d20pfsrd.com/Gamemastering/Combat/#TOC-Full-Round-Actions",
  "futility": "http://spheresofpower.wikidot.com/eliciter#toc19",
  "gaze attack":
    "https://www.d20pfsrd.com/bestiary/rules-for-monsters/universal-monster-rules/#Gaze_Su",
  "Grappled": "https://www.d20pfsrd.com/Gamemastering/conditions/#Grappled",
  "handle animal": "https://www.d20pfsrd.com/skills/handle-animal",
  "heal": "https://www.d20pfsrd.com/skills/heal",
  "Helpless": "https://www.d20pfsrd.com/Gamemastering/conditions/#Helpless",
  "hustle":
    "https://www.d20pfsrd.com/gamemastering/exploration-movement/#Modes_of_Movement",
  "hustling":
    "https://www.d20pfsrd.com/gamemastering/exploration-movement/#Modes_of_Movement",
  "hypnotism": "http://spheresofpower.wikidot.com/eliciter#toc7",
  "Illusion": "http://spheresofpower.wikidot.com/illusion",
  "immediate action":
    "https://www.d20pfsrd.com/Gamemastering/Combat/#TOC-Immediate-Actions",
  "immune":
    "https://www.d20pfsrd.com/bestiary/rules-for-monsters/universal-monster-rules/#Immunity_Ex_or_Su",
  "immunity":
    "https://www.d20pfsrd.com/bestiary/rules-for-monsters/universal-monster-rules/#Immunity_Ex_or_Su",
  "incorporeal":
    "https://www.d20pfsrd.com/bestiary/rules-for-monsters/creature-types#TOC-Incorporeal",
  "Incorporeal": "https://www.d20pfsrd.com/Gamemastering/conditions/#Incorporeal",
  "initiative": "https://www.d20pfsrd.com/Gamemastering/Combat/#TOC-Initiative",
  "initiative checks":
    "https://www.d20pfsrd.com/Gamemastering/combat/#TOC-Initiative",
  "Intelligence":
    "https://www.d20pfsrd.com/BASICS-ABILITY-SCORES/ability-scores/#Intelligence_Int",
  "intimidate": "https://www.d20pfsrd.com/skills/intimidate",
  "invisible": "https://www.d20pfsrd.com/gamemastering/conditions#TOC-Invisible",
  "Invisible": "https://www.d20pfsrd.com/Gamemastering/conditions/#Invisible",
  "knowledge arcana": "https://www.d20pfsrd.com/skills/knowledge",
  "knowledge dungeoneering": "https://www.d20pfsrd.com/skills/knowledge",
  "knowledge engineering": "https://www.d20pfsrd.com/skills/knowledge",
  "knowledge geography": "https://www.d20pfsrd.com/skills/knowledge",
  "knowledge history": "https://www.d20pfsrd.com/skills/knowledge",
  "knowledge local": "https://www.d20pfsrd.com/skills/knowledge",
  "knowledge nature": "https://www.d20pfsrd.com/skills/knowledge",
  "knowledge nobility": "https://www.d20pfsrd.com/skills/knowledge",
  "knowledge planes": "https://www.d20pfsrd.com/skills/knowledge",
  "knowledge religion": "https://www.d20pfsrd.com/skills/knowledge",
  "Life": "http://spheresofpower.wikidot.com/life",
  "Light": "http://spheresofpower.wikidot.com/light",
  "line of effect":
    "https://www.d20pfsrd.com/BASICS-ABILITY-SCORES/GLOSSARY/#Line_of_Effect",
  "line of sight":
    "https://www.d20pfsrd.com/BASICS-ABILITY-SCORES/GLOSSARY/#Line_of_Sight",
  "linguistics": "https://www.d20pfsrd.com/skills/linguistics",
  "low-light vision":
    "https://www.d20pfsrd.com/gamemastering/special-abilities#TOC-Low-Light-Vision",
  "Mana": "http://spheresofpower.wikidot.com/mana",
  "maneuver":
    "https://www.d20pfsrd.com/gamemastering/combat#TOC-Combat-Maneuvers",
  "maneuver defense":
    "https://www.d20pfsrd.com/gamemastering/combat#TOC-combat-maneuver-defense",
  "martial focus":
    "http://spheresofpower.wikidot.com/using-spheres-of-might#toc12",
  "melee touch attack":
    "https://www.d20pfsrd.com/Gamemastering/Combat/#TOC-Touch-Attacks",
  "Mind": "http://spheresofpower.wikidot.com/mind",
  "mind-affecting abilities":
    "https://www.d20pfsrd.com/BASICS-ABILITY-SCORES/GLOSSARY/#Mind-Affecting",
  "mind-affecting effects":
    "https://www.d20pfsrd.com/BASICS-ABILITY-SCORES/GLOSSARY/#Mind-Affecting",
  "momentum": "http://spheresofpower.wikidot.com/war#toc6",
  "morale bonus":
    "https://www.d20pfsrd.com/BASICS-ABILITY-SCORES/GLOSSARY/#Bonus",
  "move action":
    "https://www.d20pfsrd.com/Gamemastering/Combat/#TOC-Move-Actions",
  "Nature": "http://spheresofpower.wikidot.com/nature",
  "Nauseated": "https://www.d20pfsrd.com/Gamemastering/conditions/#Nauseated",
  "normal light": "https://www.d20pfsrd.com/gamemastering/vision-and-light/",
  "panicked": "https://www.d20pfsrd.com/gamemastering/conditions#TOC-Panicked",
  "Panicked": "https://www.d20pfsrd.com/Gamemastering/conditions/#Panicked",
  "Paralyzed": "https://www.d20pfsrd.com/Gamemastering/conditions/#Paralyzed",
  "perception": "https://www.d20pfsrd.com/skills/perception",
  "perform": "https://www.d20pfsrd.com/skills/perform",
  "Petrified": "https://www.d20pfsrd.com/Gamemastering/conditions/#Petrified",
  "Pinned": "https://www.d20pfsrd.com/Gamemastering/conditions/#Pinned",
  "profession": "https://www.d20pfsrd.com/skills/profession",
  "Prone": "https://www.d20pfsrd.com/Gamemastering/conditions/#Prone",
  "Protection": "http://spheresofpower.wikidot.com/protection",
  "Pure Darkness": "http://spheresofpower.wikidot.com/dark#toc47",
  "racial bonus":
    "https://www.d20pfsrd.com/BASICS-ABILITY-SCORES/GLOSSARY/#Bonus",
  "Reflex": "https://www.d20pfsrd.com/Gamemastering/combat/#TOC-Reflex",
  "ride": "https://www.d20pfsrd.com/skills/ride",
  "run":
    "https://www.d20pfsrd.com/gamemastering/exploration-movement/#Modes_of_Movement",
  "running":
    "https://www.d20pfsrd.com/gamemastering/exploration-movement/#Modes_of_Movement",
  "scent": "https://www.d20pfsrd.com/gamemastering/special-abilities#TOC-Scent",
  "see in darkness":
    "https://www.d20pfsrd.com/bestiary/rules-for-monsters/universal-monster-rules#TOC-See-in-Darkness-Su-",
  "sense motive": "https://www.d20pfsrd.com/skills/sense-motive",
  "shaken": "https://www.d20pfsrd.com/gamemastering/conditions#TOC-Shaken",
  "Shaken": "https://www.d20pfsrd.com/Gamemastering/conditions/#Shaken",
  "Sickened": "https://www.d20pfsrd.com/Gamemastering/conditions/#Sickened",
  "Sinking": "https://www.d20pfsrd.com/Gamemastering/conditions/#Sinking",
  "sleight of hand": "https://www.d20pfsrd.com/skills/sleight-of-hand",
  "sneak attack":
    "https://www.d20pfsrd.com/classes/core-classes/rogue#TOC-Sneak-Attack",
  "spell resistance":
    "https://www.d20pfsrd.com/gamemastering/special-abilities#TOC-Spell-Resistance",
  "spell-like abilities":
    "https://www.d20pfsrd.com/magic#TOC-Spell-Like-Abilities-Sp-",
  "spell-like ability":
    "https://www.d20pfsrd.com/magic#TOC-Spell-Like-Abilities-Sp-",
  "spellcraft": "https://www.d20pfsrd.com/skills/spellcraft",
  "SR":
    "https://www.d20pfsrd.com/gamemastering/special-abilities#TOC-Spell-Resistance",
  "Stable": "https://www.d20pfsrd.com/Gamemastering/conditions/#Stable",
  "Staggered": "https://www.d20pfsrd.com/Gamemastering/conditions/#Staggered",
  "standard action":
    "https://www.d20pfsrd.com/gamemastering/combat#TOC-Standard-Actions",
  "stealth": "https://www.d20pfsrd.com/skills/stealth",
  "Strength":
    "https://www.d20pfsrd.com/BASICS-ABILITY-SCORES/ability-scores/#Strength_Str",
  "Stunned": "https://www.d20pfsrd.com/Gamemastering/conditions/#Stunned",
  "supernatural abilities":
    "https://www.d20pfsrd.com/magic#TOC-Supernatural-Abilities-Su-",
  "supernatural ability":
    "https://www.d20pfsrd.com/magic#TOC-Supernatural-Abilities-Su-",
  "surprise": "https://www.d20pfsrd.com/Gamemastering/combat/#TOC-Surprise",
  "surprised": "https://www.d20pfsrd.com/Gamemastering/combat/#TOC-Surprise",
  "survival": "https://www.d20pfsrd.com/skills/survival",
  "swift action":
    "https://www.d20pfsrd.com/Gamemastering/Combat/#TOC-Swift-Actions",
  "swim": "https://www.d20pfsrd.com/skills/swim",
  "Telekinesis": "http://spheresofpower.wikidot.com/telekinesis",
  "temporary hit points":
    "https://www.d20pfsrd.com/Gamemastering/combat/#TOC-Temporary-Hit-Points",
  "Time": "http://spheresofpower.wikidot.com/time",
  "totem": "http://spheresofpower.wikidot.com/war#toc0",
  "totemic aura": "http://spheresofpower.wikidot.com/war#toc24",
  "totems": "http://spheresofpower.wikidot.com/war#toc0",
  "touch attack":
    "https://www.d20pfsrd.com/gamemastering/combat#TOC-Touch-Attacks",
  "touch of futility": "http://spheresofpower.wikidot.com/eliciter#toc19",
  "trait bonus":
    "https://www.d20pfsrd.com/BASICS-ABILITY-SCORES/GLOSSARY/#Bonus",
  "Unconscious": "https://www.d20pfsrd.com/Gamemastering/conditions/#Unconscious",
  "use magic device": "https://www.d20pfsrd.com/skills/use-magic-device",
  "uses Artemis' shadow":
    "http://spheresofpower.wikidot.com/casting-traditions#toc83",
  "walk":
    "https://www.d20pfsrd.com/gamemastering/exploration-movement/#Modes_of_Movement",
  "walking":
    "https://www.d20pfsrd.com/gamemastering/exploration-movement/#Modes_of_Movement",
  "War": "http://spheresofpower.wikidot.com/war",
  "Warleader": "http://spheresofpower.wikidot.com/warleader-sphere",
  "Warp": "http://spheresofpower.wikidot.com/warp",
  "Weather": "http://spheresofpower.wikidot.com/weather",
  "Will": "https://www.d20pfsrd.com/Gamemastering/combat/#TOC-Will",
  "Wisdom":
    "https://www.d20pfsrd.com/BASICS-ABILITY-SCORES/ability-scores/#Wisdom_Wis"
};
const LINKDICT = FuzzySet(Object.keys(LINKS));
// #endregion ▮▮▮▮[DATA]▮▮▮▮

// #region ████████ UTILITY FUNCTIONS ████████ ~
// #region ░░░░░░░ Hyphenator ░░░░░░░ ~
Hyphenator.config({
  minwordlength : MINHYPHENWORDLENGTH,
  defaultlanguage: "en-us",
  remoteloading: false,
  compound: "hyphen",
  hyphenchar: HYPHENCHARACTER
});
const hyphenate = (string) => {
  if (/^<|&shy;|\u200B/.test(string)) { return string }
  return Hyphenator.hyphenate(string, "en-us");
};
const unhyphenate = (string) => string.replace(/\u00AD|\u200B/gu, "");
// #endregion ░░░░[Hyphenator]░░░░
// #region ░░░░░░░ String Formatting ░░░░░░░ ~
const properCase = words => {
  words
    .split(/[-_\|\s]/)
    .map(word => word.trim())
    .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`)
    .forEach(word => {
      words = words.replace(new RegExp(word, "i"), word);
    });
  return words;
};
// #endregion ░░░░[String Formatting]░░░░
// #region ░░░░░░░ HTML Generation ░░░░░░░ ~
const processRawInput = (rawText) => rawText
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter((line) => /[^\s]/.test(line))
  .join("\n");
const convertToInline = (...styles) =>
  Object.entries(styles
    .reduceRight((finalStyles, theseStyles) => {
      theseStyles = typeof theseStyles === "string"
        ? CLASSES[theseStyles] ?? {}
        : theseStyles ?? {};
      return {...theseStyles, ...finalStyles};
    }, {}))
    .map(([property, val]) => `${property}: ${val};`)
    .join(" ");
const getSearchLink = (ref) => `https://www.google.com/search?q=d20pfsrd+${ref.replace(/\s+/gu, "+")}`;
// #endregion ░░░░[HTML Generation]░░░░
// #endregion ▄▄▄▄▄ UTILITY FUNCTIONS ▄▄▄▄▄

// #region ████████ CSS: Elements & Style Definitions ████████ ~
const ELEMENTS = {
  get Para() { return (content, cls) => `<p style="${convertToInline(STYLES.Para, cls)}">${hyphenate(content)}</p>` },
  get Span() { return (content, cls) => `<span style="${convertToInline(STYLES.Span, cls)}">${hyphenate(content)}</span>` },
  get Link() { return (content, url, cls) => `<a style="${convertToInline(STYLES.Link, cls)}" href="${url}">${hyphenate(content)}</a>` },
  get ButtonLink() { return (content, url, cls, isAddingDash) => `${this.Link(this.Span(content, cls), url, STYLES.ButtonLink)}${isAddingDash ? " &mdash;" : ""}` },
  get MissingLink() { return (ref) => `<a style="${convertToInline(STYLES.MissingLink)}" href="${getSearchLink(ref)}">${ref}</a>` },
  UL(match) {
    return [
      `<ul style="${convertToInline(STYLES.UL)}">`,
      ...[...match.matchAll(/\*\s+(.*)(?:<\/p>)$/gmui)].map(([full, group]) => `<li>${group}</li>`),
      "</ul>\n"
    ].join("\n");
  },
  SpellPoints(num = 1, isAddingColon) {
    num = parseInt(num) || 1;
    const spellPoints = [this.Span("&nbsp;", "spellPoint")];
    while (spellPoints.length < num) {
      spellPoints.push(this.Span("&nbsp;", "spellPointShift"));
    }
    return `${spellPoints.join("")}${isAddingColon ? this.Span(":", "bigDark") : ""}`;
  }
};
const STYLES = {
  Para: {
    margin: "0 0 0.4em 0"
  },
  Span: {
    "display": "inline-block",
    "background": "transparent",
    "line-height": "11px",
    "min-height": "13px"
  },
  UL: {
    "padding-left": "2em",
    "text-indent": "-5px",
    "margin": "0.4em 0"
  },
  Link: {
    "text-shadow": new Array(2).fill("1px 1px 2px rgba(0, 0, 0, 1)").join(", "),
    "color": "#ffbc00",
    "font-weight": "bold",
    "font-size": "10px",
    "text-transform": "uppercase",
    "line-height": "15px",
    "vertical-align": "top",
    "text-decoration": "none"
  },
  ButtonLink: {},
  MissingLink: {
    "color": "red",
    "background-color": "rgba(255, 0, 0, 0.3)"
  }
};
const CLASSES = {
  get "label"() {
    return {
      "padding": "0 3px",
      "font-weight": "bold",
      "font-variant": "small-caps",
      "font-size": "16px",
      // "margin": "-2px 3px 2px 3px",
      "text-align": "center",
      "text-transform": "lowercase",
      "text-shadow": "none !important",
      "vertical-align": "middle",
      "text-indent": "0"
    };
  },
  get "flavor"() {
    return {
      "padding": "0.3em",
      "background-color": "rgba(0, 0, 0, 0.2)",
      "display": "block",
      // "border-radius": "10px",
      "box-shadow": "4px 4px 5px rgba(0,0,0,0.5)",
      "margin": "0 2px 10px 2px",
      "border-top-left-radius": "0",
      "border-top-right-radius": "0",
      "text-align": "justify",
      "white-space": "break-spaces",
      "line-height": "13px"
    };
  },
  get "inlineRoll"() {
    return {
      "max-height": "15px",
      "margin": "1px 0px -3px 0px",
      "overflow": "hidden",
      "background-color": "rgba(0, 0, 0, 0.3)",
      "line-height": "13px",
      "border-radius": "5px",
      "border-left": "2px solid black",
      "border-right": "2px solid black"
    };
  },
  get "act-full-round"() {
    return {
      ...this.label,
      ...{
        "color": "white",
        "background": "black",
        "border-left": "15px outset #1c2c2c",
        "border-right": "15px outset #1c2c2c",
        "border-radius": "0px"
      }
    };
  },
  get "act-standard"() {
    return {
      ...this.label,
      ...{
        "color": "black",
        "background": "white",
        "border-left": "9px solid #666666",
        "border-right": "9px solid #666666"
      }
    };
  },
  get "act-move"() {
    return {
      ...this.label,
      ...{
        "color": "#893200",
        "background": "#fff4a2",
        "border-left": "6px solid #893200",
        "border-right": "6px solid #893200"
      }
    };
  },
  get "act-swift"() {
    return {
      ...this.label,
      ...{
        "color": "#512DA8",
        "background": "#EA80FC",
        "border-left": "2px solid #311B92",
        "border-right": "2px solid #311B92",
        "transform": "skewX(-15deg)"
      }
    };
  },
  get "act-immediate"() {
    return {
      ...this.label,
      ...{
        "color": "white",
        "background": "#FF0000",
        "border-left": "2px solid #660000",
        "border-right": "2px solid #660000",
        "transform": "skewX(-15deg)"
      }
    };
  },
  get "act-free"() {
    return {
      ...this.label,
      ...{
        "color": "#005a00",
        "background": "#91ff91",
        "border-left": "5px groove #00FF00",
        "border-right": "5px ridge #00FF00",
        "border-radius": "15px",
        "padding": "0 2px",
        // "margin-right": "-2px",
        "transform": "skewX(-15deg)"
      }
    };
  },
  "spellPoint": {
    "display": "inline-block",
    "position": "relative",
    "background-image": "url('images/gifs/spell-point.gif')",
    "background-size": "cover",
    "border": "none",
    "border-radius": "50%",
    "line-height": "13px",
    "height": "13px",
    "width": "13px",
    // "margin": "0px 2px",
    "padding": "0"
  },
  get "spellPointShift"() {
    return {
      ...this.spellPoint,
      "margin-left": "-5px"
    };
  },
  get "skillLink"() {
    return {
      ...this["act-move"],
      "display": "inline-block",
      "max-height": "15px",
      "border-radius": "15px",
      "text-decoration": "none",
      "line-height": "13px",
      "vertical-align": "unset"
    };
  },
  "bigDark": {
    "font-size": "14px",
    "line-height": "14px",
    "font-weight": "bold",
    "text-indent": "0"
  }
};
// #endregion ▄▄▄▄▄ CSS ▄▄▄▄▄

// #region ████████ REGEXP: Processing Raw Text via Regular Expressions ████████ ~
const processToken = (match) => {
  console.log(`'${match}': ${/-$/.test(match)}`);
  function resolveLink(keyword) {
    keyword = unhyphenate(keyword);
    const matches = LINKDICT.get(keyword)?.filter(([score]) => score >= MINMATCHSCORE);
    if (matches && matches.length) { return LINKS[matches[0][1]] }
    return false;
  }
  function getTokenType(ref) {
    ref = unhyphenate(ref);
    for (const [tType, regExpTests] of Object.entries(TOKENTYPES)) {
      if (regExpTests.some((regexp) => regexp.test(ref))) { return tType }
    }
    return false;
  }
  const tokenType = getTokenType(match);
  const url = resolveLink(match);
  switch (getTokenType(match)) {
    case "act-full-round": { return ELEMENTS.ButtonLink("full round", url, "act-full-round", /-\W*$/.test(match)) }
    case "act-standard": { return ELEMENTS.ButtonLink("standard", url, "act-standard", /-.*$/.test(match)) }
    case "act-move": { return ELEMENTS.ButtonLink("move", url, "act-move", /-.*$/.test(match)) }
    case "act-swift": { return ELEMENTS.ButtonLink("swift", url, "act-swift", /-.*$/.test(match)) }
    case "act-immediate": { return ELEMENTS.ButtonLink("immediate", url, "act-immediate", /-.*$/.test(match)) }
    case "act-free": { return ELEMENTS.ButtonLink("free", url, "act-free", /-.*$/.test(match)) }
    case "act-passive": { return ELEMENTS.ButtonLink("passive", url, "act-passive", /-.*$/.test(match)) }
    case "skill": { return ELEMENTS.Link(match, url, "skillLink") }
    case "spellPoint": { return ELEMENTS.SpellPoints(parseInt(match.replace(/\D/gu, "")), /:/.test(match)) }
    default: { return url ? ELEMENTS.Link(match, url) : ELEMENTS.MissingLink(match) }
  }
};

const REGEXPREPLACERS = [
  [/--+/gu, "&mdash;"], // Parse em-dashes.
  [/->/giu, "&rarr;"], // Parse --> arrows.
  [/^\/[^/\n]+?\/$/gum, (match) => ELEMENTS.Para(match.slice(1, -1), CLASSES.flavor)], // Style flavor paragraphs.
  [/^[^<][^\n]+?$/gum, (match) => ELEMENTS.Para(match)], // Wrap all lines in paragraphs.
  [/<p[^>]+>(\*.+?)(?=<p[^>]+>[^*])/gisu, (match) => ELEMENTS.UL(match)], // Process unordered lists.
  [/\{[^}]+\}/gu, (match) => processToken(match.slice(1, -1))], // Convert tokens ('{...}') into HTML elements.
  [/\[\[[^\]]+\]\]/gu, (match) => unhyphenate(ELEMENTS.Span(match, "inlineRoll"))]
];
// #endregion ▄▄▄▄▄ REGEXP ▄▄▄▄▄
async function formatForFoundry() {
  const rawText = processRawInput($("#rawinput")[0].value);
  let parsedText = rawText;
  for (const replaceParams of REGEXPREPLACERS) {
    parsedText = parsedText.replace(...replaceParams);
  }
  $("#rawinput")
    .css({borderStyle: "inset", backgroundColor: "#666666"});
  $("#code-input-prompt")
    .css({opacity: 0.5});
  $("#sample-output")
    .css({opacity: 1, boxShadow: "10px 10px 25px black"})
    .html(parsedText.replace(
      /<span style="(.*?)"\s*?>\s*\[\[.*?\]\]\s*<\/span>/gu,
      '<span style="$1">&nbsp;#&nbsp;</span>'
    ));
  $("#code-output-prompt")
    .css({opacity: 1});
  $("#code-output")
    .css({
      pointerEvents: "unset",
      borderStyle: "outset",
      backgroundColor: "white",
      opacity: 1
    })
    .text(parsedText);
}

// #region ▮▮▮▮▮▮▮[TEST CASES] Various Pre-Populated Data for Raw Text Field ▮▮▮▮▮▮▮ ~
const TESTCASES = {
  Guide: `/Text wrapped in forward slashes will be boxed as a quotation or flavor text./
  Bulleted lists are as easy as adding a '*' to the start of a line:
  * To indicate a link, surround it in curly braces. If the fuzzy-matcher can't figure out what to link to, {the output link will be red}, and will take you to a search of the term you used on the Pathfinder SRD.
  * Action tokens appear for any of the following link values: {full-round action} {standard action} {move action} {swift action} {immediate action} or {free action}.
  * If you want an em-dash after the action token, add a dash to the end of the link, like so: {standard action-}
  * For spell point icons, just use a number followed by 'sp': {3 sp}; if you want a properly-placed colon after it, include it inside the brackets: {3 sp:}
  * Skill tokens appear for any link values that match to skills: {acrobatics}, {use magic device}, {knowledge (arcana)}
  * Inline rolls are indicated by double-square brackets, and are unchanged from how they work on the Pathfinder sheet (you'll have to figure that out yourself)
  A few other convenience substitutions include multiple hyphens into em-dashes (e.g. '---'), and arrows converted to arrow characters (e.g. '->')`,
  Darkness: `/Artemis' own shadow comes alive, coaxing Xal's power down the shadewarden's ashen, pitted blade before casting it out in an enervating torrent of smothering dark./

  {standard action-} Artemis creates a sphere of darkness up to [[10 + 5 * floor(@attributes.hd.total / 2)]] ft. in radius. The darkness:
  
  * {uses Artemis' shadow} for the duration
  * cannot extend through walls
  * is not subject to {spell resistance}
  * does not impede {darkvision}
  
  In this darkness:
  
  * {bright light} (including daylight) -> {dim light}
  * {normal light} sources -> 5' dim light sources
  * all other light -> absolute {darkness}
  
  Maintaining the darkness requires {concentration} from within range.
  
  {free action-}{1 sp:} Extend the duration to [[@attributes.hd.total]] min. without concentration.
  {free action-} Dismiss this effect.`
};
// #endregion ▮▮▮▮[TEST CASES]▮▮▮▮

$(document).ready(() => {
  $("button#submit").click(formatForFoundry);
  $("#rawinput")[0].value = TESTCASES.Guide;
});