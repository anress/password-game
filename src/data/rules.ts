import { Rule } from "../interfaces/Rule.ts";

function countRegexMatches(str: string, regex: RegExp) {
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}

export const rules: Rule[] = [
  {
    description: "The password must be at least 5 characters long.",
    condition: (pw: string) => pw.length >= 5,
  },
  {
    description: "The Password must contain today's date (DD-M-YYYY).",
    condition: (pw: string) => {
      const today = new Date();
      return (
        pw.includes(today.getDate().toString()+"-"+(today.getMonth()+1).toString()+"-"+today.getFullYear().toString())
      );
    },
  },
  {
    description:
      "The Password is almost done: wrap it with a bow on each side!",
    condition: (pw: string) => pw.startsWith("🎀") && pw.endsWith("🎀"),
  }
];
