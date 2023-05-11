export class BaseComponent extends HTMLElement {
  constructor(template: HTMLTemplateElement) {
    super();
    const shadowRoot = this.attachShadow({
      mode: "open",
    });
    shadowRoot.appendChild(template.content.cloneNode(true));
    this.root = shadowRoot;
  }
  root: ShadowRoot;

  attributeChangedCallback(
    _attribute: string,
    previousValue: string | null,
    currentvalue: string | null
  ) {
    if (previousValue !== currentvalue) {
      this.update();
    }
  }

  getBoolean(attribute: string): boolean {
    return this.getAttribute(attribute) === "";
  }

  forwardAttribute(attribute: string, target: HTMLElement) {
    const value = this.getAttribute(attribute);
    if (value === null) {
      target.removeAttribute(attribute);
    } else {
      target.setAttribute(attribute, value);
    }
  }

  update() {}
}
