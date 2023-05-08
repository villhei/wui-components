import { Input } from "./input";
import { fireEvent } from "@testing-library/dom";
customElements.define("wui-input", Input);

describe("Flex", () => {
  it("should match snapshot", () => {
    const el = new Input();
    expect(el.shadowRoot?.innerHTML).toMatchSnapshot();
  });

  it("should set label", () => {
    const el = new Input();
    el.setAttribute("label", "MyLabel");
    expect(el.shadowRoot?.querySelector("label")!).toHaveTextContent("MyLabel");
  });
});
