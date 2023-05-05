export class WUIBase extends HTMLElement {
  constructor(template: HTMLTemplateElement) {
    super();
    const shadowRoot = this.attachShadow({
      mode: "closed",
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
