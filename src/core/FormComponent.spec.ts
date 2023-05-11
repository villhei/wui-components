import { FormComponent } from "./FormComponent";

const template = document.createElement("template");
template.innerHTML = "<label><input/>";

beforeAll(() => {
  customElements.define("wui-form-component", FormComponent);
});

beforeEach(() => {
  (Element.prototype as any).attachInternals = attachInternalsMock;
});

afterEach(() => {
  jest.resetAllMocks();
});

const attachInternalsMock = jest.fn(() => {
  return {
    setFormValue: jest.fn(),
  };
});

it("should throw when missing definition property", async () => {
  const el = new FormComponent(template);
  expect(() => el.checkProperties()).toThrowError(
    'The name attribute for element unknown must be set with [name="MyName"]'
  );
});
