export const colorKeywords = [
  "text",
  "default",
  "success",
  "primary",
  "secondary",
  "warning",
  "error",
  "background",
] as const;

export type ColorKeyword = (typeof colorKeywords)[number];
