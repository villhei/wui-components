import { Flex } from "./flex";
customElements.define("wui-flex", Flex);

describe("Flex", () => {
  it("should match snapshot", () => {
    const el = new Flex();
    expect(el.shadowRoot?.innerHTML).toMatchSnapshot();
  });

  it("should set flex as display by default", () => {
    const el = new Flex();
    expect(el.style.getPropertyValue("--flex-display")).toEqual("flex");
  });

  it("should set inline-flex with inline attribute", () => {
    const el = new Flex();
    el.setAttribute("inline", "");
    expect(el.style.getPropertyValue("--flex-display")).toEqual("inline-flex");
  });

  it("should set raised global class", () => {
    const el = new Flex();
    el.setAttribute("raised", "");
    expect(el.classList).toContain("__wui-raised");
  });

  it("should allow control of wrap", () => {
    const el = new Flex();
    el.setAttribute("wrap", "wrap-reverse");
    expect(el.style.getPropertyValue("--flex-wrap")).toEqual("wrap-reverse");
  });

  it("should allow control of direction", () => {
    const el = new Flex();
    el.setAttribute("direction", "column-reverse");
    expect(el.style.getPropertyValue("--flex-direction")).toEqual(
      "column-reverse"
    );
  });
});
