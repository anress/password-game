import { Rule } from "../interfaces/Rule.ts";

function sumDigitsFromString(str: string) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
      if (!isNaN(parseInt(str[i]))) {
          sum += parseInt(str[i]);
      }
  }
  return sum;
}

function countRegexMatches(str: string, regex: RegExp) {
  const matches = str.match(regex);
  console.log(matches);
  return matches ? matches.length : 0;
}

export const rules: Rule[] = [
  {
      description: "Das Passwort muss mindestens 5 Zeichen lang sein.",
      condition: (pw: string) => pw.length >= 5,
  },
  {
      description: "Das Passwort muss den Tag deines Geburtstags als Zahl enthalten.",
      condition: (pw: string) => pw.includes("26"),
  },
  {
      description: "Das Passwort muss den Namen eines der fliegenden Rentiere sowie ein Rentier-Emoji enthalten.",
      condition: (pw: string) => {
          const reindeer = ["dasher", "dancer", "prancer", "vixen", "comet", "cupid", "donner", "blitzen", "rudolph"];
          return reindeer.some(r => pw.toLowerCase().includes(r)) && pw.includes("🦌");
      },
  },
  {
      description: "Das Passwort muss die Anzahl der Tage von Weihnachten bis Ostern 2024 enthalten.",
      condition: (pw: string) => pw.includes("98"),
  },
  {
      description: "Das Passwort ist noch nicht festlich genug. Bitte ein paar Weihnachts-Emojis hinzufügen.",
      condition: (pw: string) => countRegexMatches(pw, /🎄|🎁|🤶|🎅|🧑‍🎄|🦌|🌟|❄️|⛄/g) >= 5,
  },
  {
      description: "Das Passwort ist fast fertig: binde am Anfang und am Ende noch eine Schleife herum!",
      condition: (pw: string) => pw.startsWith("🎀") && pw.endsWith("🎀"),
  }
];

export const link: string = "https://anja.codes";
