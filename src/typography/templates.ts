import templateContentParagraph from "./paragraph.html?raw";

import { range } from "../utils/range";
import { typeSizes } from "./constants";

const templates = range(1, 6).map((level) => {
  const tagName = `h${level}`;

  const template = document.createElement("template");

  const fontSize = typeSizes[tagName];

  const margin = Math.max(1, fontSize * 0.4).toPrecision(3);
  template.innerHTML = `
    <style>
      ${tagName} {
          --border-width: 0;
          --bottom-padding: 0;
          font-size: ${fontSize}rem;
          margin-top: ${margin}rem;
          margin-bottom: ${margin}rem;
          border-bottom-style: solid;
          border-width: var(--border-width);
          border-color: var(--primary-color);
          padding-bottom: var(--padding-bottom);
          color: var(--font-color, --text-color);
      }
    </style>
      <${tagName}><slot>Foo</slot></${tagName}>
    `;
  return [tagName, template];
});

const headingMap = Object.fromEntries(templates);

const templateP = document.createElement("template");
templateP.innerHTML = templateContentParagraph;

export const templateMap = {
  ...headingMap,
  p: templateP,
};
