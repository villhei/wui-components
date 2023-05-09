import { Slider } from "./slider";
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

it("should match snapshot", () => {
  const el = new Slider();
  expect(el.shadowRoot?.innerHTML).toMatchSnapshot();
});
