import { Flex } from "./flex";
customElements.define("wui-flex", Flex);

describe("Flex", () => {
  it("should match snapshot", () => {
    const el = new Flex();
    expect(el.shadowRoot?.innerHTML).toMatchSnapshot();
  });

  it("should set flex class by default", () => {
    const el = new Flex();
    expect(el.shadowRoot?.querySelector("div")?.classList).toContain("flex");
  });

  it("should set inline class when inline attribute is set", () => {
    const el = new Flex();
    el.setAttribute("inline", "");
    expect(el.shadowRoot?.querySelector("div")?.classList).toContain(
      "inline-flex"
    );
  });

  it("should set inline class", () => {
    const el = new Flex();
    el.setAttribute("inline", "");
    expect(el.shadowRoot?.querySelector("div")?.classList).toContain(
      "inline-flex"
    );
  });

  it("should set raised class", () => {
    const el = new Flex();
    el.setAttribute("raised", "");
    expect(el.shadowRoot?.querySelector("div")?.classList).toContain("raised");
  });

  it("should allow control of wrap", () => {
    const el = new Flex();
    el.setAttribute("wrap", "wrap-reverse");
    expect(
      el.shadowRoot?.querySelector("div")?.style.getPropertyValue("--flex-wrap")
    ).toContain("wrap-reverse");
  });

  it("should allow control of direction", () => {
    const el = new Flex();
    el.setAttribute("direction", "column-reverse");
    expect(
      el.shadowRoot
        ?.querySelector("div")
        ?.style.getPropertyValue("--flex-direction")
    ).toContain("column-reverse");
  });
});
