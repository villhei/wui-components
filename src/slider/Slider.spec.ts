import { Slider } from "./Slider";
import { fireEvent } from "@testing-library/dom";

const attachInternalsMock = jest.fn(() => {
  return {
    setFormValue: jest.fn(),
  };
});
beforeAll(() => {
  customElements.define("wui-slider", Slider);
});

beforeEach(() => {
  (Element.prototype as any).attachInternals = attachInternalsMock;
});

afterEach(() => {
  jest.resetAllMocks();
});

const createSlider = () => {
  const el = new Slider();
  el.setAttribute("name", "Test");
  return el;
};

it("should match snapshot", () => {
  const el = createSlider();
  expect(el.shadowRoot?.innerHTML).toMatchSnapshot();
});

it("should default to 0-100", () => {
  const el = createSlider();
  el.connectedCallback();
  expect(el.shadowRoot?.querySelector("input")).toHaveAttribute("min", "0");
  expect(el.shadowRoot?.querySelector("input")).toHaveAttribute("max", "100");
});

it("should set a label", () => {
  const el = createSlider();
  el.setAttribute("label", "MyLabel");
  el.connectedCallback();
  expect(el.shadowRoot?.querySelector("label")).toHaveTextContent("MyLabel");
});

it("should set disabled", () => {
  const el = createSlider();
  el.setAttribute("disabled", "");
  el.connectedCallback();
  expect(el.shadowRoot?.querySelector("input")).toHaveAttribute("disabled", "");
});

it("should accept custom range", () => {
  const el = createSlider();
  el.setAttribute("min", "20");
  el.setAttribute("max", "40");
  el.connectedCallback();
  expect(el.shadowRoot?.querySelector("input")).toHaveAttribute("min", "20");
  expect(el.shadowRoot?.querySelector("input")).toHaveAttribute("max", "40");
});

it("should accept steps attribute", () => {
  const el = createSlider();
  el.setAttribute("step", "0.1");
  el.connectedCallback();
  expect(el.shadowRoot?.querySelector("input")).toHaveAttribute("step", "0.1");
});

it("should allow listening for input events", () => {
  const el = createSlider();
  el.connectedCallback();
  const listener = jest.fn();
  el.addEventListener("change", listener);
  const innerInput = el.shadowRoot?.querySelector("input")!;
  const event = { target: { value: 42 } };
  fireEvent.change(innerInput, event);

  expect(listener).toHaveBeenCalledWith(
    expect.objectContaining({
      target: el,
    })
  );
});

it("should record internal input value as it's value", () => {
  const el = createSlider();
  el.connectedCallback();
  const listener = jest.fn();
  el.addEventListener("change", listener);
  const innerInput = el.shadowRoot?.querySelector("input")!;
  const event = { target: { value: "42" } };
  fireEvent.change(innerInput, event);
  expect(el.value).toEqual("42");
});

it("should accept steps attribute", () => {
  const el = createSlider();
  el.setAttribute("step", "0.1");
  el.connectedCallback();
  expect(el.shadowRoot?.querySelector("input")).toHaveAttribute("step", "0.1");
});

it("should respect the min range ", () => {
  const el = createSlider();
  el.connectedCallback();
  const listener = jest.fn();
  el.addEventListener("change", listener);
  const innerInput = el.shadowRoot?.querySelector("input")!;
  const event = { target: { value: "-100" } };
  fireEvent.change(innerInput, event);
  expect(el.value).toEqual("0");
});

it("should respect the max range ", () => {
  const el = createSlider();
  el.connectedCallback();
  const listener = jest.fn();
  el.addEventListener("change", listener);
  const innerInput = el.shadowRoot?.querySelector("input")!;
  const event = { target: { value: "150" } };
  fireEvent.change(innerInput, event);
  expect(el.value).toEqual("100");
});

it("should forward the variant prop", () => {
  const el = createSlider();
  el.setAttribute("variant", "error");
  el.connectedCallback();

  expect(el.shadowRoot?.querySelector("input")!).toHaveAttribute(
    "variant",
    "error"
  );
});
