import { Rule } from "../interfaces/Rule.ts";

export const rules: Rule[] = [
  {
    description: "Pick a number between 5 and 10",
    condition: (pw: string) => pw.length >= 5 && pw.length < 10,
  },
  {
    description: "Enter a Q",
    condition: (pw: string) => pw.includes("Q"),
  },
];

export const link: string = "https://anja.codes";
