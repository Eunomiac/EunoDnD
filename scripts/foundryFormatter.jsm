// import GSheetReader from "./scripts/googleAPI/build/index.js";

const MINMATCHSCORE = 0.8;
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

const LINKS = {/* eslint-disable sort-keys */
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
  "Alternate Racial Traits": "https://www.d20pfsrd.com/races/core-races/Human/#Alternate_Racial_Traits",
  "Antagonized": "https://www.d20pfsrd.com/Gamemastering/conditions/#Antagonized3PP",
  "appraise": "https://www.d20pfsrd.com/skills/appraise",
  "armor class": "https://www.d20pfsrd.com/gamemastering/combat#TOC-Armor-Class",
  "Asleep": "https://www.d20pfsrd.com/Gamemastering/conditions/#Asleep_3pp",
  "attack roll": "https://www.d20pfsrd.com/Gamemastering/Combat/#TOC-Attack-Roll",
  "attacks of opportunity": "https://www.d20pfsrd.com/Gamemastering/Combat/#TOC-Attacks-of-Opportunity",
  "aura": "https://www.d20pfsrd.com/alternative-rule-systems/occult-adventures/occult-rules/aura/",
  "aura of ineptitude": "http://spheresofpower.wikidot.com/eliciter#toc19",
  "auras": "https://www.d20pfsrd.com/alternative-rule-systems/occult-adventures/occult-rules/aura/",
  "base attack bonus": "https://www.d20pfsrd.com/Gamemastering/Combat/#TOC-Attack-Bonus",
  "Bleed": "https://www.d20pfsrd.com/Gamemastering/conditions/#Bleed",
  "Blinded": "https://www.d20pfsrd.com/Gamemastering/conditions/#Blinded",
  "blindsense": "https://www.d20pfsrd.com/gamemastering/special-abilities#TOC-Blindsight-and-Blindsense",
  "blindsight": "https://www.d20pfsrd.com/gamemastering/special-abilities#TOC-Blindsight-and-Blindsense",
  "Blood": "http://spheresofpower.wikidot.com/blood",
  "bluff": "https://www.d20pfsrd.com/skills/bluff",
  "bright light": "https://www.d20pfsrd.com/gamemastering/vision-and-light/",
  "Broken": "https://www.d20pfsrd.com/Gamemastering/conditions/#Broken",
  "caster level": "http://spheresofpower.wikidot.com/using-spheres-of-power#toc3",
  "Charisma": "https://www.d20pfsrd.com/BASICS-ABILITY-SCORES/ability-scores/#Charisma_Cha",
  "class level": "http://spheresofpower.wikidot.com/using-spheres-of-power#toc3",
  "climb": "https://www.d20pfsrd.com/skills/climb",
  "CMD": "https://www.d20pfsrd.com/gamemastering/combat#TOC-combat-maneuver-defense",
  "combat maneuver": "https://www.d20pfsrd.com/gamemastering/combat#TOC-Combat-Maneuvers",
  "combat maneuver defense": "https://www.d20pfsrd.com/gamemastering/combat#TOC-combat-maneuver-defense",
  "concealment": "https://www.d20pfsrd.com/gamemastering/combat#TOC-Concealment",
  "concentration": "https://www.d20pfsrd.com/magic#TOC-Concentration",
  "Confused": "https://www.d20pfsrd.com/Gamemastering/conditions/#Confused",
  "Conjuration": "http://spheresofpower.wikidot.com/conjuration",
  "Constitution": "https://www.d20pfsrd.com/BASICS-ABILITY-SCORES/ability-scores/#Constitution_Con",
  "cower": "https://www.d20pfsrd.com/gamemastering/conditions#TOC-Cowering",
  "cowering": "https://www.d20pfsrd.com/gamemastering/conditions#TOC-Cowering",
  "Cowering": "https://www.d20pfsrd.com/Gamemastering/conditions/#Cowering",
  "craft": "https://www.d20pfsrd.com/skills/craft",
  "crawl": "https://www.d20pfsrd.com/gamemastering/exploration-movement/#Modes_of_Movement",
  "crawling": "https://www.d20pfsrd.com/gamemastering/exploration-movement/#Modes_of_Movement",
  "Creation": "http://spheresofpower.wikidot.com/creation",
  "critical hit": "https://www.d20pfsrd.com/Gamemastering/Combat/#TOC-Critical-Hits",
  "Dark": "http://spheresofpower.wikidot.com/dark",
  "dark presence": "http://spheresofpower.wikidot.com/dark-presence",
  "darkness": "https://www.d20pfsrd.com/gamemastering/vision-and-light/",
  "darkness or dim light": "https://www.d20pfsrd.com/gamemastering/vision-and-light/",
  "darkvision": "https://www.d20pfsrd.com/gamemastering/special-abilities#TOC-Darkvision",
  "daylight": "https://www.d20pfsrd.com/gamemastering/vision-and-light/",
  "Dazed": "https://www.d20pfsrd.com/Gamemastering/conditions/#Dazed",
  "Dazzled": "https://www.d20pfsrd.com/Gamemastering/conditions/#Dazzled",
  "Dead": "https://www.d20pfsrd.com/Gamemastering/conditions/#Dead",
  "Deafened": "https://www.d20pfsrd.com/Gamemastering/conditions/#Deafened",
  "Death": "http://spheresofpower.wikidot.com/death",
  "Destruction": "http://spheresofpower.wikidot.com/destruction",
  "Dexterity": "https://www.d20pfsrd.com/BASICS-ABILITY-SCORES/ability-scores/#Dexterity_Dex",
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
  "Energy Drained": "https://www.d20pfsrd.com/Gamemastering/conditions/#Energy_Drained",
  "Enhancement": "http://spheresofpower.wikidot.com/enhancement",
  "Entangled": "https://www.d20pfsrd.com/Gamemastering/conditions/#Entangled",
  "escape artist": "https://www.d20pfsrd.com/skills/escape-artist",
  "Exhausted": "https://www.d20pfsrd.com/Gamemastering/conditions/#Exhausted",
  "expend focus": "http://spheresofpower.wikidot.com/using-spheres-of-might#toc12",
  "Fallen Fey": "http://spheresofpower.wikidot.com/fallen-fey",
  "Fascinated": "https://www.d20pfsrd.com/Gamemastering/conditions/#Fascinated",
  "Fate": "http://spheresofpower.wikidot.com/fate",
  "Fatigued": "https://www.d20pfsrd.com/Gamemastering/conditions/#Fatigued",
  "flank": "https://www.d20pfsrd.com/Gamemastering/combat/#TOC-Flanking",
  "flanked": "https://www.d20pfsrd.com/Gamemastering/combat/#TOC-Flanking",
  "flanking": "https://www.d20pfsrd.com/Gamemastering/combat/#TOC-Flanking",
  "Flat-Footed": "https://www.d20pfsrd.com/Gamemastering/conditions/#Flat-Footed",
  "fly": "https://www.d20pfsrd.com/skills/fly",
  "Fortitude": "https://www.d20pfsrd.com/Gamemastering/combat/#TOC-Fortitude",
  "free action": "https://www.d20pfsrd.com/Gamemastering/Combat/#TOC-Free-Actions",
  "frightened": "https://www.d20pfsrd.com/gamemastering/conditions#TOC-Frightened",
  "Frightened": "https://www.d20pfsrd.com/Gamemastering/conditions/#Frightened",
  "full concealment": "https://www.d20pfsrd.com/gamemastering/combat#TOC-Concealment",
  "full-round action": "https://www.d20pfsrd.com/Gamemastering/Combat/#TOC-Full-Round-Actions",
  "futility": "http://spheresofpower.wikidot.com/eliciter#toc19",
  "gaze attack": "https://www.d20pfsrd.com/bestiary/rules-for-monsters/universal-monster-rules/#Gaze_Su",
  "Grappled": "https://www.d20pfsrd.com/Gamemastering/conditions/#Grappled",
  "handle animal": "https://www.d20pfsrd.com/skills/handle-animal",
  "heal": "https://www.d20pfsrd.com/skills/heal",
  "Helpless": "https://www.d20pfsrd.com/Gamemastering/conditions/#Helpless",
  "hustle": "https://www.d20pfsrd.com/gamemastering/exploration-movement/#Modes_of_Movement",
  "hustling": "https://www.d20pfsrd.com/gamemastering/exploration-movement/#Modes_of_Movement",
  "hypnotism": "http://spheresofpower.wikidot.com/eliciter#toc7",
  "Illusion": "http://spheresofpower.wikidot.com/illusion",
  "immediate action": "https://www.d20pfsrd.com/Gamemastering/Combat/#TOC-Immediate-Actions",
  "immune": "https://www.d20pfsrd.com/bestiary/rules-for-monsters/universal-monster-rules/#Immunity_Ex_or_Su",
  "immunity": "https://www.d20pfsrd.com/bestiary/rules-for-monsters/universal-monster-rules/#Immunity_Ex_or_Su",
  "incorporeal": "https://www.d20pfsrd.com/bestiary/rules-for-monsters/creature-types#TOC-Incorporeal",
  "Incorporeal": "https://www.d20pfsrd.com/Gamemastering/conditions/#Incorporeal",
  "initiative": "https://www.d20pfsrd.com/Gamemastering/Combat/#TOC-Initiative",
  "initiative checks": "https://www.d20pfsrd.com/Gamemastering/combat/#TOC-Initiative",
  "Intelligence": "https://www.d20pfsrd.com/BASICS-ABILITY-SCORES/ability-scores/#Intelligence_Int",
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
  "line of effect": "https://www.d20pfsrd.com/BASICS-ABILITY-SCORES/GLOSSARY/#Line_of_Effect",
  "line of sight": "https://www.d20pfsrd.com/BASICS-ABILITY-SCORES/GLOSSARY/#Line_of_Sight",
  "linguistics": "https://www.d20pfsrd.com/skills/linguistics",
  "low-light vision": "https://www.d20pfsrd.com/gamemastering/special-abilities#TOC-Low-Light-Vision",
  "Mana": "http://spheresofpower.wikidot.com/mana",
  "maneuver": "https://www.d20pfsrd.com/gamemastering/combat#TOC-Combat-Maneuvers",
  "maneuver defense": "https://www.d20pfsrd.com/gamemastering/combat#TOC-combat-maneuver-defense",
  "martial focus": "http://spheresofpower.wikidot.com/using-spheres-of-might#toc12",
  "melee touch attack": "https://www.d20pfsrd.com/Gamemastering/Combat/#TOC-Touch-Attacks",
  "Mind": "http://spheresofpower.wikidot.com/mind",
  "mind-affecting abilities": "https://www.d20pfsrd.com/BASICS-ABILITY-SCORES/GLOSSARY/#Mind-Affecting",
  "mind-affecting effects": "https://www.d20pfsrd.com/BASICS-ABILITY-SCORES/GLOSSARY/#Mind-Affecting",
  "momentum": "http://spheresofpower.wikidot.com/war#toc6",
  "morale bonus": "https://www.d20pfsrd.com/BASICS-ABILITY-SCORES/GLOSSARY/#Bonus",
  "move action": "https://www.d20pfsrd.com/Gamemastering/Combat/#TOC-Move-Actions",
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
  "racial bonus": "https://www.d20pfsrd.com/BASICS-ABILITY-SCORES/GLOSSARY/#Bonus",
  "Reflex": "https://www.d20pfsrd.com/Gamemastering/combat/#TOC-Reflex",
  "ride": "https://www.d20pfsrd.com/skills/ride",
  "run": "https://www.d20pfsrd.com/gamemastering/exploration-movement/#Modes_of_Movement",
  "running": "https://www.d20pfsrd.com/gamemastering/exploration-movement/#Modes_of_Movement",
  "scent": "https://www.d20pfsrd.com/gamemastering/special-abilities#TOC-Scent",
  "see in darkness": "https://www.d20pfsrd.com/bestiary/rules-for-monsters/universal-monster-rules#TOC-See-in-Darkness-Su-",
  "sense motive": "https://www.d20pfsrd.com/skills/sense-motive",
  "shaken": "https://www.d20pfsrd.com/gamemastering/conditions#TOC-Shaken",
  "Shaken": "https://www.d20pfsrd.com/Gamemastering/conditions/#Shaken",
  "Sickened": "https://www.d20pfsrd.com/Gamemastering/conditions/#Sickened",
  "Sinking": "https://www.d20pfsrd.com/Gamemastering/conditions/#Sinking",
  "sleight of hand": "https://www.d20pfsrd.com/skills/sleight-of-hand",
  "sneak attack": "https://www.d20pfsrd.com/classes/core-classes/rogue#TOC-Sneak-Attack",
  "spell resistance": "https://www.d20pfsrd.com/gamemastering/special-abilities#TOC-Spell-Resistance",
  "spell-like abilities": "https://www.d20pfsrd.com/magic#TOC-Spell-Like-Abilities-Sp-",
  "spell-like ability": "https://www.d20pfsrd.com/magic#TOC-Spell-Like-Abilities-Sp-",
  "spellcraft": "https://www.d20pfsrd.com/skills/spellcraft",
  "SR": "https://www.d20pfsrd.com/gamemastering/special-abilities#TOC-Spell-Resistance",
  "Stable": "https://www.d20pfsrd.com/Gamemastering/conditions/#Stable",
  "Staggered": "https://www.d20pfsrd.com/Gamemastering/conditions/#Staggered",
  "standard action": "https://www.d20pfsrd.com/gamemastering/combat#TOC-Standard-Actions",
  "stealth": "https://www.d20pfsrd.com/skills/stealth",
  "Strength": "https://www.d20pfsrd.com/BASICS-ABILITY-SCORES/ability-scores/#Strength_Str",
  "Stunned": "https://www.d20pfsrd.com/Gamemastering/conditions/#Stunned",
  "supernatural abilities": "https://www.d20pfsrd.com/magic#TOC-Supernatural-Abilities-Su-",
  "supernatural ability": "https://www.d20pfsrd.com/magic#TOC-Supernatural-Abilities-Su-",
  "surprise": "https://www.d20pfsrd.com/Gamemastering/combat/#TOC-Surprise",
  "surprised": "https://www.d20pfsrd.com/Gamemastering/combat/#TOC-Surprise",
  "survival": "https://www.d20pfsrd.com/skills/survival",
  "swift action": "https://www.d20pfsrd.com/Gamemastering/Combat/#TOC-Swift-Actions",
  "swim": "https://www.d20pfsrd.com/skills/swim",
  "Telekinesis": "http://spheresofpower.wikidot.com/telekinesis",
  "temporary hit points": "https://www.d20pfsrd.com/Gamemastering/combat/#TOC-Temporary-Hit-Points",
  "Time": "http://spheresofpower.wikidot.com/time",
  "totem": "http://spheresofpower.wikidot.com/war#toc0",
  "totemic aura": "http://spheresofpower.wikidot.com/war#toc24",
  "totems": "http://spheresofpower.wikidot.com/war#toc0",
  "touch attack": "https://www.d20pfsrd.com/gamemastering/combat#TOC-Touch-Attacks",
  "touch of futility": "http://spheresofpower.wikidot.com/eliciter#toc19",
  "trait bonus": "https://www.d20pfsrd.com/BASICS-ABILITY-SCORES/GLOSSARY/#Bonus",
  "Unconscious": "https://www.d20pfsrd.com/Gamemastering/conditions/#Unconscious",
  "use magic device": "https://www.d20pfsrd.com/skills/use-magic-device",
  "uses Artemis' shadow": "http://spheresofpower.wikidot.com/casting-traditions#toc83",
  "walk": "https://www.d20pfsrd.com/gamemastering/exploration-movement/#Modes_of_Movement",
  "walking": "https://www.d20pfsrd.com/gamemastering/exploration-movement/#Modes_of_Movement",
  "War": "http://spheresofpower.wikidot.com/war",
  "Warleader": "http://spheresofpower.wikidot.com/warleader-sphere",
  "Warp": "http://spheresofpower.wikidot.com/warp",
  "Weather": "http://spheresofpower.wikidot.com/weather",
  "Will": "https://www.d20pfsrd.com/Gamemastering/combat/#TOC-Will",
  "Wisdom": "https://www.d20pfsrd.com/BASICS-ABILITY-SCORES/ability-scores/#Wisdom_Wis",
};

const LINKDICT = FuzzySet(Object.keys(LINKS));

const ELEMENTS = {
  get Span() { return (content, cls) => `<span style="${convertToInline(STYLES.Span, typeof cls === "string" ? STYLES.Classes[cls] : cls ?? {})}">${content}</span>` },
  get Link() { return (title, url, cls) => `<a style="${convertToInline(STYLES.Link, typeof cls === "string" ? STYLES.Classes[cls] : cls ?? {})}" href="${url}">${title}</a>` },
  get Para() { return (content, cls) => `<p style="${convertToInline(STYLES.Para, typeof cls === "string" ? STYLES.Classes[cls] : cls ?? {})}">${content}</p>` },
  SpellPoints(num = 1) {
    num = parseInt(num) || 1;
    const spellPoints = [this.Span("&nbsp;", "spellPoint")];
    while (spellPoints.length < num) {
      spellPoints.push(this.Span("&nbsp;", "spellPointShift"));
    }
    return spellPoints.join("");
  }
};



const convertToInline = (...styles) => Object.entries(styles.reduceRight((finalStyles, theseStyles) => ({...theseStyles, ...finalStyles}), {}))
  .map(([property, val]) => `${property}: ${val};`)
  .join(" ");

const STYLES = {
  Span: {
    "display": "inline-block",
    "background": "transparent",
    "line-height": "11px",
    "min-height": "13px"
  },
  Link: {
    "text-shadow": "0 0 5px red",
    "color": "black"
  },
  Para: {
    "margin": "0 0 0.4em 0"
  },
  Classes: {
    get "label"() {
      return {
        "padding": "0 3px",
        "font-weight": "bold",
        "font-variant": "small-caps",
        "font-size": "16px",
        "margin": "-2px 3px 2px 3px",
        "text-align": "center",
        "text-transform": "lowercase",
        "text-shadow": "none !important"
      };
    },
    get "inlineRoll"() {
      return {
        "max-height": "15px",
        "margin": "3px 3px -3px 3px",
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
          "margin-right": "-2px",
          "transform": "skewX(-15deg)"
        }
      };
    },
    "spellPoint": {
      "display": "inline-block",
      "position": "relative",
      "background-image": "url('https://i.imgur.com/9MIWkgm.gif')",
      "background-size": "cover",
      "border": "none",
      "border-radius": "50%",
      "line-height": "13px",
      "height": "13px",
      "width": "13px",
      "margin": "0px 2px",
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
        "line-height": "13px"
      };
    }
  }
};

const resolveLink = (keyword) => {
  const matches = LINKDICT.get(keyword)
    ?.filter(([score]) => score >= MINMATCHSCORE);
  if (matches && matches.length) {
    console.log(matches);
    return LINKS[matches[0][1]];
  }
  return false;
};
const properCase = (words) => {
  words.split(/[-_ \s]/)
    .map((word) => word.trim())
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`)
    .forEach((word) => {
      words = words.replace(new RegExp(word, "i"), word)
    });
  return words;
}

const REGEXPREPLACERS = {
  preProcessing: [
    [/ +---? +/gu, " &mdash; "],
    [/->/gui, "&rarr;"]
  ],
  processing: [
    [/(\s*\r?\n\*\s*?[^\n\r]+)+/gui, (match) => `<ul>${match}</ul>`.replace(/\*\s*([^*\n]+)/gui, "<li>$1</li>")],
    [/([ \t]*\r?\n[ \t]*){2}/gu, `</p><p style="${convertToInline(STYLES.Para)}">`],
    [/(?<!li?>)([ \t]*\r?\n[ \t]*){1}/gu, "<br>"],
    [/\[\[(close|medium|long)\]\]/gui, (match, range) => {
      return `[[${{
        "close": "25+5*floor(@attributes.hd.total/2)",
        "medium": "100+10*@attributes.hd.total",
        "long": "400+40*@attributes.hd.total"
      }[range.toLowerCase()]}]]`;
    }],
    [/(\[\[.*?\]\])/gu, (inlineRoll) => ELEMENTS.Span(inlineRoll, "inlineRoll")],
    [/\{[^\}]+\}/gui, (match) => {
      match = match.slice(1, -1);
      const url = resolveLink(match);
      if (url) {
        // return ELEMENTS.Link(match, url, /d20pfsrd\.com\/skills|Gamemastering\/Combat\/#TOC-.*?-Actions/iu.test(url) ? "skillLink" : undefined);
        return ELEMENTS.Link(match, url, /d20pfsrd\.com\/skills/iu.test(url) ? "skillLink" : undefined);
      }
      return `<a style="color: red; background-color: rgba(255, 0, 0, 0.3);" href="https://www.google.com/search?q=d20pfsrd+${match.replace(/ /gu, "+")}"><b>&lt;&lt ${match} &gt;&gt;</b></a>`;
    }],
    [/a?n?\s*((?:full-round|standard|move|swift|immediate|free)(?:ment)? actions?)\s*/gui, (match, action) => {
      action = {
        ful: "full-round",
        sta: "standard",
        mov: "move",
        swi: "swift",
        imm: "immediate",
        fre: "free"
      }[action.slice(0, 3).toLowerCase()];
      return ELEMENTS.Span(action, `act-${action}`);
    }],
    [/(\d*)\s*(?:s?s?pell p?P?oints?|\bs\.?p\.?\b|\bS\.?P\.?\b)\s*?:?/gu, (match, num) => ELEMENTS.SpellPoints(num)],
    [/\s*</gu, " <"],
    [/\s*<\//gu, "</"],
    [/>\s*/gu, "> "],
    [/ +/gu, " "],
    [/<\/span>\s*/gu, "</span>"],
    [/(<.l>).*?(<li>)/gum, "$1$2"],
    [/(<\/.l>)\s*(<\/li>)/gum, "$2$1"],
    [/(<\/.l>)\s*(<\/p>)/gum, "$1"],
    [/ +<\//gu, "</"],
    [/(<\/.*?>) +/gu, "$1 "],
    [/>\s*</g, "><"]
  ]
};

// <span style="display: inline-block; background: transparent; line-height: 13px; min-height: 13px; max-height: 15px; margin: 3px 3px -3px 3px; overflow: hidden; background-color: rgba(0, 0, 0, 0.3); outline: 2px solid black;"> [[10 + 5 * floor(@attributes.hd.total / 2)]]</span>
function formatForFoundry() {
  const rawText = ELEMENTS.Para($("#rawinput")[0].value);
  let parsedText = rawText;
  for (const replaceParams of REGEXPREPLACERS.preProcessing) {
    parsedText = parsedText.replace(...replaceParams);
  }
  for (const replaceParams of REGEXPREPLACERS.processing) {
    parsedText = parsedText.replace(...replaceParams);
  }
  $("#rawinput")
    .css({borderStyle: "inset", backgroundColor: "#666666"});
  $("#code-input-prompt")
    .css({opacity: 0.5});
  $("#sample-output")
    .html(parsedText.replace(/<span style="(.*?)"\s*?>\s*\[\[.*?\]\]\s*<\/span>/gu, "<span style=\"$1\">&nbsp;#&nbsp;</span>"))
    .css({opacity: 1, boxShadow: "10px 10px 25px black"});
  $("#code-output-prompt")
    .css({opacity: 1});
  $("#code-output")
    .text(parsedText)
    .css({pointerEvents: "unset", borderStyle: "outset", backgroundColor: "white", opacity: 1});
}

$(document).ready(() => {
  $("button#submit").click(formatForFoundry);
  $("#rawinput")[0].value = `<em>Artemis' own shadow comes alive, coaxing Xal's power down the shadewarden's ashen, pitted blade before casting it out in an enervating torrent of smothering dark.</em>

  {standard action} Artemis creates a sphere of darkness up to [[10 + 5 * floor(@attributes.hd.total / 2)]] ft. in radius. The darkness:
  
  * {uses Artemis' shadow} for the duration
  * cannot extend through walls
  * is not subject to {spell resistance}
  * does not impede {darkvision}
  
  In this darkness:
  
  * {bright light} (including daylight) -> {dim light}
  * {normal light} sources -> 5' dim light sources
  * all other light -> absolute {darkness}
  
  Maintaining the darkness requires {concentration} from within range.
  
  {free action} 1 spell point Extend the duration to [[@attributes.hd.total]] min. without concentration.
  {free action} Dismiss this effect.`.replace(/(\r?\n)[ \t]*/gui, "\n");
});