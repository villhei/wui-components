export class WUIBase extends HTMLElement {
  constructor(template: HTMLTemplateElement) {
    super();
    const shadowRoot = this.attachShadow({
      mode: "open",
    });
    shadowRoot.appendChild(template.content.cloneNode(true));
    this.root = shadowRoot;
  }
  root: ShadowRoot;

  attributeChangedCallback() {
    this.update();
  }

  update() {}
}
