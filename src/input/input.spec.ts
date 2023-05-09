import { Input } from "./input";
import { fireEvent } from "@testing-library/dom";

const attachInternalsMock = jest.fn(() => {
  return {
    setFormValue: jest.fn(),
  };
});
beforeAll(() => {
  customElements.define("wui-input", Input);
});

beforeEach(() => {
  (Element.prototype as any).attachInternals = attachInternalsMock;
});

afterEach(() => {
  jest.resetAllMocks();
});

it("should match snapshot", () => {
  const el = new Input();
  expect(el.shadowRoot?.innerHTML).toMatchSnapshot();
});

it("should set label", () => {
  const el = new Input();
  el.setAttribute("label", "MyLabel");
  expect(el.shadowRoot?.querySelector("label")!).toHaveTextContent("MyLabel");
});

it("should set initial value", () => {
  const el = new Input();
  el.setAttribute("value", "SomeValue");
  el.connectedCallback();
  expect(el.shadowRoot?.querySelector("input")!).toHaveValue("SomeValue");
});

it("should allow listening for input events", () => {
  const el = new Input();
  el.connectedCallback();
  const listener = jest.fn();
  el.addEventListener("change", listener);
  const innerInput = el.shadowRoot?.querySelector("input")!;
  const event = { target: { value: "MyValue" } };
  fireEvent.change(innerInput, event);

  expect(listener).toHaveBeenCalledWith(
    expect.objectContaining({
      target: el,
    })
  );
});

it("should record internal input value as it's value", () => {
  const el = new Input();
  el.connectedCallback();
  const listener = jest.fn();
  el.addEventListener("change", listener);
  const innerInput = el.shadowRoot?.querySelector("input")!;
  const event = { target: { value: "MyValue" } };
  fireEvent.change(innerInput, event);
  expect(el.value).toEqual("MyValue");
});
