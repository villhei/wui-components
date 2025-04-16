// filepath: /Users/ville.heikkinen/work/wui-components/src/button/Button.spec.ts
import { Button } from "./Button";
import { fireEvent } from "@testing-library/dom";

beforeAll(() => {
  customElements.define("wui-button", Button);
});

const createButton = () => {
  const el = new Button();
  return el;
};

describe("Button Component", () => {
  it("should match snapshot", () => {
    const el = createButton();
    expect(el.shadowRoot?.innerHTML).toMatchSnapshot();
  });

  it("should render with default label", () => {
    const el = createButton();
    expect(el.shadowRoot?.querySelector(".label")).toHaveTextContent("Default label");
  });

  it("should set custom label", () => {
    const el = createButton();
    el.setAttribute("label", "Custom Button");
    el.update();
    expect(el.shadowRoot?.querySelector(".label")).toHaveTextContent("Custom Button");
  });

  it("should set disabled attribute", () => {
    const el = createButton();
    el.setAttribute("disabled", "");
    el.update();
    const button = el.shadowRoot?.querySelector("button");
    expect(button).toHaveAttribute("disabled");
  });

  it("should apply variant styling", () => {
    const el = createButton();
    el.setAttribute("variant", "primary");
    el.update();
    const button = el.shadowRoot?.querySelector("button");
    expect(button).toHaveAttribute("variant", "primary");
    expect(button?.style.getPropertyValue("--button-background-h")).toBe("var(--primary-color-h)");
  });

  it("should adjust padding when icon is present", () => {
    const el = createButton();
    document.body.appendChild(el);

    // Create and append an icon to the slot
    const icon = document.createElement("span");
    icon.setAttribute("slot", "left-icon");
    icon.textContent = "icon";
    el.appendChild(icon);
    
    // Force slotchange event
    const slot = el.shadowRoot?.querySelector("slot[name='left-icon']");
    const event = new Event("slotchange");
    slot?.dispatchEvent(event);
    
    const button = el.shadowRoot?.querySelector("button");
    expect(button?.style.getPropertyValue("--button-horizontal-padding")).toBe("var(--button-horizontal-padding-with-icon)");
    
    document.body.removeChild(el);
  });

  it("should clean up event listeners on disconnectedCallback", () => {
    const el = createButton();
    document.body.appendChild(el);
    
    // Spy on removeEventListener
    const slots = el.shadowRoot?.querySelectorAll("slot");
    const spy = jest.spyOn(slots?.[0] as HTMLSlotElement, "removeEventListener");
    
    // Disconnect the element
    document.body.removeChild(el);
    
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
