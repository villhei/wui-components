import { Input } from "./Input";
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

const createInput = () => {
  const el = new Input();
  el.setAttribute("name", "Test");
  return el;
};

it("should match snapshot", () => {
  const el = createInput();
  el.setAttribute("name", "Test");
  expect(el.shadowRoot?.innerHTML).toMatchSnapshot();
});

it("should set label", () => {
  const el = createInput();
  el.setAttribute("label", "MyLabel");
  expect(el.shadowRoot?.querySelector("label")!).toHaveTextContent("MyLabel");
});

it("should set initial value", () => {
  const el = createInput();
  el.setAttribute("value", "SomeValue");
  el.connectedCallback();
  expect(el.shadowRoot?.querySelector("input")!).toHaveValue("SomeValue");
});

it("should set disabled", () => {
  const el = createInput();
  el.setAttribute("disabled", "");
  el.connectedCallback();
  expect(el.shadowRoot?.querySelector("input")!).toBeDisabled();
});

it("should set readonly", () => {
  const el = createInput();
  el.setAttribute("readonly", "");
  el.connectedCallback();
  expect(el.shadowRoot?.querySelector("input")!).toHaveAttribute(
    "readonly",
    ""
  );
});

it("should allow listening for input events", () => {
  const el = createInput();
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
  const el = createInput();
  el.connectedCallback();
  const listener = jest.fn();
  el.addEventListener("change", listener);
  const innerInput = el.shadowRoot?.querySelector("input")!;
  const event = { target: { value: "MyValue" } };
  fireEvent.change(innerInput, event);
  expect(el.value).toEqual("MyValue");
});
