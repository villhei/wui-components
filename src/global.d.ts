declare module "bundle-text:*" {
  const content: string;
  export default content;
}

declare module "*?raw" {
  const content: string;
  export default content;
}
