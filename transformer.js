import fs from "fs";

// Transformer for Jest to comprehend templates, needed for shadow root testing
export default {
  process(sourceText, sourcePath, options) {
    const fileContents = fs
      .readFileSync(sourcePath, { encoding: "utf8" })
      .toString();
    const json = fileContents
      .replace(/\u2028/g, "\\u2028")
      .replace(/\u2029/g, "\\u2029");

    return {
      code: `module.exports = \`${json}\`;`,
    };
  },
};
