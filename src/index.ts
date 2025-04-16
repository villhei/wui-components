import { Anchor } from "./anchor";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { Flex } from "./flex";
import { Icon } from "./icon";
import { Input } from "./input";
import { Slider } from "./slider";
import coreCSS from "./core/core.css?raw";
import { H1, H2, H3, H4, H5, Paragraph } from "./typography";

const style = document.createElement("style");
style.textContent = coreCSS;
document.head.append(style);

customElements.define("wui-a", Anchor);
customElements.define("wui-button", Button);
customElements.define("wui-checkbox", Checkbox);
customElements.define("wui-flex", Flex);
customElements.define("wui-input", Input);
customElements.define("wui-icon", Icon);

customElements.define("wui-h1", H1);
customElements.define("wui-h2", H2);
customElements.define("wui-h3", H3);
customElements.define("wui-h4", H4);
customElements.define("wui-h5", H5);
customElements.define("wui-p", Paragraph);

customElements.define("wui-slider", Slider);
