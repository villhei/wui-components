import templateContentParagraph from "bundle-text:./paragraph.html";
import { WUIBase } from "../core";

import { range } from "../utils/range";
import { typeSizes } from "./constants";

const templates = range(1, 6).map((level) => {
  const tagName = `h${level}`;

  const template = document.createElement("template");

  const fontSize = typeSizes[tagName] / 16;

  const margin = Math.max(0.5, fontSize * 0.3).toPrecision(3);
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
