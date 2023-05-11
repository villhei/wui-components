var A=Object.defineProperty;var N=(o,r,t)=>r in o?A(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t;var a=(o,r,t)=>(N(o,typeof r!="symbol"?r+"":r,t),t);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();const C=`<style>
  a {
    --anchor-hover-color-l: calc(var(--primary-color-l) - var(--hover-darken));
    --anchor-hover-color: hsl(
      var(--primary-color-h),
      var(--primary-color-s),
      var(--anchor-hover-color-l)
    );
  }
  a {
    transition: color ease-in-out var(--transition-base);
  }
  a {
    color: var(--primary-color);
  }
  a:visited {
    color: var(--primary-color);
  }
  a:hover {
    color: var(--anchor-hover-color);
  }
</style>

<a>
  <slot></slot>
</a>
`,E=["text","default","success","primary","secondary","warning","error","background"];class l extends HTMLElement{constructor(t){super();a(this,"root");const n=this.attachShadow({mode:"open"});n.appendChild(t.content.cloneNode(!0)),this.root=n}attributeChangedCallback(t,n,e){n!==e&&this.update()}getBoolean(t){return this.getAttribute(t)===""}forwardAttribute(t,n){const e=this.getAttribute(t);e===null?n.removeAttribute(t):n.setAttribute(t,e)}update(){}}class d extends l{constructor(t){super(t);a(this,"internals");a(this,"inputNode");a(this,"labelNode");a(this,"messageNode");a(this,"_value");a(this,"_readonly");a(this,"handleInputEvent",t=>{if(this.readonly)this.inputNode.value=this.getAttribute("value")||"";else{const n=new Event(t.type,t);this.value=this.inputNode.value,this.dispatchEvent(n)}});this.internals=this.attachInternals(),this._value="",this.inputNode=this.root.querySelector("input"),this.labelNode=this.root.querySelector("label"),this.messageNode=this.root.querySelector("#message"),this._readonly=this.getBoolean("readonly")}get readonly(){return this._readonly}checkProperties(){if(this.name===null)throw new Error(`The name attribute for element ${this.localName||"FormComponent"} must be set with [name="MyName"]`)}connectedCallback(){this.checkProperties();const t=this.getAttribute("value");t!==null&&this.inputNode.setAttribute("value",t),this.inputNode.addEventListener("change",this.handleInputEvent)}disconnectedCallback(){this.inputNode.removeEventListener("change",this.handleInputEvent)}get label(){return this.getAttribute("label")}get name(){return this.getAttribute("name")}set value(t){this._value=t,this.inputNode.value=t,this.internals&&this.internals.setFormValue(t)}get message(){return this.getAttribute("message")}get value(){return this._value}update(){super.update(),this.message&&this.messageNode?this.messageNode.textContent=this.message:this.messageNode&&(this.messageNode.textContent="")}}a(d,"formAssociated",!0);const p=document.createElement("template");p.innerHTML=C;class P extends l{constructor(){super(p);a(this,"anchorNode");this.anchorNode=this.root.querySelector("a")}static get observedAttributes(){return["href"]}update(){this.forwardAttribute("href",this.anchorNode)}}const S=`<style>
  button {
    outline: none;
    border: none;
    --greyscale-percentage: 100%;

    --button-horizontal-padding-with-icon: 1.75rem;
    --button-horizontal-padding-without-icon: 2.5rem;
    --button-horizontal-padding: var(--button-horizontal-padding-without-icon);
    --button-background-h: 0;
    --button-background-s: 0%;
    --button-background-l: 100%;
    --button-background-color: hsl(
      var(--button-background-h),
      var(--button-background-s),
      var(--button-background-l)
    );

    --button-hover-background-l: calc(
      var(--button-background-l) - var(--hover-darken)
    );
    --button-hover-background-color: hsl(
      var(--button-background-h),
      var(--button-background-s),
      var(--button-hover-background-l)
    );

    --button-hover-text-color-l: calc(
      (var(--button-hover-background-l) - var(--contrast-threshold)) * -100
    );
    --button-hover-text-color: hsl(0, 0%, var(--button-hover-text-color-l));

    --button-active-background-l: calc(
      var(--button-background-l) - var(--active-darken)
    );
    --button-active-background-color: hsl(
      var(--button-background-h),
      var(--button-background-s),
      var(--button-active-background-l)
    );

    --button-active-text-color-l: calc(
      (var(--button-active-background-l) - var(--contrast-threshold)) * -100
    );
    --button-active-text-color: hsl(0, 0%, var(--button-active-text-color-l));

    --button-border-color: var(--text-color);
    --button-text-color-l: calc(
      (var(--button-background-l) - var(--contrast-threshold)) * -100
    );
    --button-text-color: hsl(0, 0%, var(--button-text-color-l));
    --button-border-width: var(--border-width);
    --icon-color: var(--button-text-color);
  }

  button {
    transition: background-color ease-in-out var(--transition-base),
      border-color ease-in-out var(--transition-base);
  }
  button {
    padding: 0.125rem var(--button-horizontal-padding);
    height: 2.5rem;
    margin: var(--component-margin);
    box-sizing: border-box;
    background: var(--button-background-color);
    border-radius: 1.2rem;
    border-width: var(--button-border-width);
    border-style: solid;
    border-color: var(--button-border-color);
    color: var(--button-text-color);
    font: var(--theme-font);
    line-height: 1rem;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  button:is(
      [variant="primary"],
      [variant="secondary"],
      [variant="neutral"],
      [variant="success"],
      [variant="warning"],
      [variant="error"]
    ) {
    --button-border-color: var(--button-background-color);
  }

  button:enabled:is(
      [variant="primary"],
      [variant="secondary"],
      [variant="neutral"],
      [variant="success"],
      [variant="warning"],
      [variant="error"]
    ):hover {
    --button-border-color: var(--button-hover-background-color);
  }

  button:enabled:is(
      [variant="primary"],
      [variant="secondary"],
      [variant="neutral"],
      [variant="success"],
      [variant="warning"],
      [variant="error"]
    ):active {
    --button-border-color: var(--button-active-background-color);
  }

  button:hover:enabled {
    background-color: var(--button-hover-background-color);
    color: var(--button-hover-text-color);
  }

  button:active:enabled {
    background-color: var(--button-active-background-color);
  }

  button:focus-visible:enabled {
    outline: var(--focus-outline);
    outline-offset: var(--focus-outline-offset);
  }

  button:disabled {
    opacity: var(--disabled-background-opacity);
    color: hsla(
      0,
      0%,
      var(--button-text-color-l),
      var(--disabled-text-opacity)
    );
    cursor: not-allowed;
    pointer-events: visible;
  }

  ::slotted(*) {
    margin-right: 0.25rem;
    font-size: 18px;
  }

  .label {
    position: relative;
    text-transform: uppercase;
    line-height: 1.5rem;
    height: 1.5rem;
  }
</style>
<button>
  <slot name="left-icon"></slot>
  <span class="label">Default label</span>
  <slot name="right-icon"></slot>
</button>
`,v=document.createElement("template");v.innerHTML=S;class z extends l{constructor(){super(v);a(this,"hasIcon");a(this,"button");a(this,"listeners");this.button=this.root.querySelector("button"),this.listeners=[],this.hasIcon=!1}static get observedAttributes(){return["label","disabled","variant"]}get label(){return this.getAttribute("label")||"Default label"}set label(t){this.setAttribute("label",t)}get variant(){var t;return(t=this.getAttribute("variant"))==null?void 0:t.toLowerCase()}connectedCallback(){const t=this.root.querySelectorAll("slot");this.listeners=[...t].map(n=>{const e=i=>{const s=n.assignedNodes();this.hasIcon=s.length>0,this.update()};return n.addEventListener("slotchange",e),()=>n.removeEventListener("slotchange",e)})}disconnectedCallback(){this.listeners.forEach(t=>t())}update(){this.variant&&(this.button.setAttribute("variant",this.variant),this.button.style.setProperty("--button-background-h",`var(--${this.variant}-color-h)`),this.button.style.setProperty("--button-background-s",`var(--${this.variant}-color-s)`),this.button.style.setProperty("--button-background-l",`var(--${this.variant}-color-l)`)),this.button.querySelector(".label").innerHTML=this.label,this.forwardAttribute("disabled",this.button),this.button.style.setProperty("--button-horizontal-padding",this.hasIcon?"var(--button-horizontal-padding-with-icon)":"var(--button-horizontal-padding-without-icon)")}}const $=`<style>
  :host {
    display: var(--flex-display);
    flex-direction: var(--flex-direction);
    flex-wrap: var(--flex-wrap);
  }
</style>
<slot></slot>
`,m=document.createElement("template");m.innerHTML=$;class L extends l{constructor(){super(m),this.update()}static get observedAttributes(){return["raised","inline","direction","wrap","position"]}get inline(){return this.getBoolean("inline")}get raised(){return this.getBoolean("raised")}get direction(){return this.getAttribute("direction")||"row"}get wrap(){return this.getAttribute("wrap")||"nowrap"}get position(){return this.getAttribute("position")}update(){this.inline?this.style.setProperty("--flex-display","inline-flex"):this.style.setProperty("--flex-display","flex"),this.style.setProperty("--flex-direction",this.direction),this.style.setProperty("--flex-wrap",this.wrap),this.style.setProperty("--position",this.position),this.raised?this.classList.add("__wui-raised"):this.classList.remove("__wui-raised")}}const M=`<style>
  .aligner {
    --effective-icon-color: var(--icon-color, var(--text-color));
    width: 1.5em;
    height: 1.5em;
    min-width: 1.5em;
    min-height: 1.5em;
    display: inline-block;
    color: var(--effective-icon-color);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    user-select: none;
  }

  .content {
    filter: grayscale(var(--grayscale-percentage));
    display: inline-block;
    pointer-events: none;
  }
</style>

<div class="aligner">
  <span class="content"><slot>⁉️</slot> </span>
</div>
`,g=document.createElement("template");g.innerHTML=M;class H extends l{constructor(){super(g);a(this,"iconContainer");this.iconContainer=this.root.querySelector("span");const t=getComputedStyle(this).getPropertyValue("--icon-color");this.iconContainer.style.setProperty("--icon-color",t);const n=getComputedStyle(this).fontSize;this.iconContainer.style.setProperty("--font-size-base",n)}static get observedAttributes(){return["grayscale","greyscale"]}get greyscale(){return this.getAttribute("grayscale")===""||this.getAttribute("greyscale")===""}attributeChangedCallback(){this.iconContainer.style.setProperty("--grayscale-percentage",this.greyscale?"100%":"0%")}}const _=`<style>
  :host {
    --input-inactive-border-color: var(--grey-shade-4);
    --input-placeholder-color: var(--grey-shade-4);
    --input-focused-border-color: var(--primary-color);
  }

  input {
    transition: background-color ease-in-out var(--transition-base),
      border-color ease-in-out var(--transition-base);
  }

  label {
    transition: color ease-in-out var(--transition-base);
  }

  :host {
    display: inline-flex;
    flex-direction: column;
    padding: var(--component-padding);
    width: calc(100% - var(--component-padding) * 2);
  }

  input {
    border-radius: var(--border-radius);
    font-size: var(--font-size);
    padding: 0.5rem 1rem;
    color: var(--text-color);
    border-color: var(--input-inactive-border-color);
    border-style: solid;
  }

  input:enabled:focus,
  input:enabled:focus-visible {
    border-color: var(--input-focused-border-color);
    outline: none;
  }

  input::placeholder {
    color: var(--input-placeholder-color);
  }

  input:disabled {
    cursor: not-allowed;
    background-color: var(--grey-shade-5);
    color: var(--text-color-disabled);
  }

  input:enabled:read-only {
    font-style: italic;
    border-color: var(--input-inactive-border-color);
    background-color: var(--background-color);
    color: var(--text-color-disabled);
  }

  input:enabled:invalid {
    border: var(--border-width) solid var(--warning-color);
  }

  input[variant="error"]:enabled {
    border: var(--border-width) solid var(--error-color);
  }

  input[variant="success"]:enabled {
    border: var(--border-width) solid var(--success-color);
  }

  label {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  label:has(+ input:enabled:read-only:focus) {
    color: var(--text-color);
  }

  label:has(+ input:disabled) {
    color: var(--text-color-disabled);
  }

  label:has(+ input:enabled:focus) {
    color: var(--primary-color);
  }

  label:has(+ input[variant="error"]:enabled:not(:focus)) {
    color: var(--error-color);
  }

  label:has(+ input[variant="success"]:enabled:not(:focus)) {
    color: var(--success-color);
  }

  label:has(+ input:invalid) {
    color: var(--warning-color);
  }

  #message {
    transition: max-height ease-in-out var(--transition-base);
  }

  #message {
    max-height: unset;
    font-size: 0.75rem;
    margin: 0.5rem 0 0.5rem 0.125rem;
  }

  #message:empty {
    max-height: 0;
    display: none;
  }

  input[variant="warning"],
  input:enabled:invalid + #message {
    color: var(--warning-color);
  }

  input[variant="success"] + #message {
    color: var(--success-color);
  }

  input[variant="error"] + #message {
    color: var(--error-color);
  }
</style>
<label></label>
<input />
<p id="message"></p>
`,y=document.createElement("template");y.innerHTML=_;class q extends d{constructor(){super(y)}static get observedAttributes(){return["class","label","name","disabled","type","message","readonly"]}get classes(){var r;return((r=this.getAttribute("class"))==null?void 0:r.split(","))||[]}get type(){return this.localName}update(){super.update(),this.classes.forEach(r=>this.inputNode.classList.add(r)),this.labelNode.textContent=this.label,this.name&&(this.labelNode.setAttribute("for",this.name),this.inputNode.setAttribute("name",this.name)),this.forwardAttribute("placeholder",this.inputNode),this.forwardAttribute("disabled",this.inputNode),this.forwardAttribute("readonly",this.inputNode),this.forwardAttribute("type",this.inputNode),this.forwardAttribute("variant",this.inputNode)}}const T=`<style>
  :host {
    --input-focused-border-color: var(--primary-color);
    --font-size: var(--font-size);
    --component-padding: 0.5rem;
    --inactive-background: var(--grey-shade-3);
    --active-background: var(--grey-shade-2);
    --enabled-thumb-color: var(--grey-shade-2);
    --tooltip-opacity: 0;
  }

  input:enabled:focus {
    --enabled-thumb-color: var(--primary-color);
  }

  input[variant="success"]:enabled:not(:focus) {
    --active-background: var(--success-color);
  }

  input[variant="success"]:enabled:not(:focus)::-webkit-slider-thumb {
    --enabled-thumb-color: var(--success-color);
  }

  input[variant="warning"]:enabled:not(:focus) {
    --active-background: var(--warning-color);
  }

  input[variant="warning"]:enabled:not(:focus)::-webkit-slider-thumb {
    --enabled-thumb-color: var(--warning-color);
  }

  input[variant="error"]:enabled:not(:focus) {
    --active-background: var(--error-color);
  }

  input[variant="error"]:enabled:not(:focus)::-webkit-slider-thumb {
    --enabled-thumb-color: var(--error-color);
  }

  input {
    appearance: none;
    display: inline-block;
    height: 0.25rem;
    background: #ccc;
    border-radius: 0.125rem;
    margin: 0 var(--component-padding);
  }

  input {
    transition: background-color ease-in-out var(--transition-base),
      border-color ease-in-out var(--transition-base);

    border-radius: 16px;
  }

  label {
    transition: color ease-in-out var(--transition-base);
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    transition: background-color ease-in-out var(--transition-base);
  }

  input::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: var(--enabled-thumb-color);
    cursor: pointer;
  }

  input::-webkit-slider-thumb {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: var(--enabled-thumb-color);
    cursor: pointer;
  }

  input[readonly=""]:enabled:focus-visible::-webkit-slider-thumb {
    background: var(--inactive-background);
    cursor: default;
    pointer-events: none;
  }

  input[readonly=""]:enabled:focus::-webkit-slider-thumb {
    background: var(--enabled-thumb-color);
    cursor: default;
    pointer-events: none;
  }

  input:disabled::-webkit-slider-thumb {
    background: var(--inactive-background);
  }

  input:enabled:focus,
  input:enabled:focus-visible {
    --active-background: var(--primary-color);
    outline-offset: var(--focus-outline-offset);
    outline: var(--focus-outline);
    --tooltip-opacity: 1;
  }

  label {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  label:has(+ div > div > input:disabled) {
    color: var(--text-color-disabled);
  }

  label:has(+ div > div > input:enabled:focus) {
    color: var(--primary-color);
  }

  label:has(+ div > div > input[variant="success"]:not(:focus)) {
    color: var(--success-color);
  }
  label:has(+ div > div > input[variant="warning"]:not(:focus)) {
    color: var(--warning-color);
  }

  label:has(+ div > div > input[variant="error"]:not(:focus)) {
    color: var(--error-color);
  }

  #message {
    transition: max-height ease-in-out var(--transition-base);
  }

  #message {
    max-height: unset;
    font-size: 0.75rem;
    margin: 0.5rem 0 0.5rem 0.125rem;
  }

  div:has(input[variant="warning"]) + #message {
    color: var(--warning-color);
  }

  div:has(input[variant="success"]) + #message {
    color: var(--success-color);
  }

  div:has(input[variant="error"]) + #message {
    color: var(--error-color);
  }

  .layer:has(input:focus) + .tooltip-aligner {
    --tooltip-opacity: 1;
  }

  #message:empty {
    max-height: 0;
    display: none;
  }

  :host {
    display: inline-flex;
    flex-direction: column;
    padding: var(--component-padding);
  }

  .container {
    position: relative;
    height: 0.75rem;
    display: flex;
  }

  .layer {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  #tooltip {
    opacity: var(--tooltip-opacity);
    position: absolute;
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 1.5rem;
    top: -1rem;
    left: 50%;
    margin-left: -0.75rem;
    margin-top: -1.5rem;
    color: var(--background-color);
    background-color: var(--grey-shade-2);
  }

  .tooltip-aligner {
    position: absolute;
    margin-left: 2.25rem;
    margin-right: 2.25rem;
    width: calc(100% - 3 * var(--component-padding) - (2 * 2.25rem));
  }

  div > input {
    flex: 1;
  }

  span {
    color: var(--text-color);
    min-width: 2rem;
    font-size: 0.75rem;
  }
</style>
<label></label>
<div class="container">
  <div class="layer">
    <span>0%</span>
    <input type="range" />
    <span>100%</span>
  </div>
  <div class="tooltip-aligner">
    <div id="tooltip">42</div>
  </div>
</div>
<p id="message"></p>
`,f=document.createElement("template");f.innerHTML=T;const b=(o,r,t)=>(t-o)/(r-o)*100,h=o=>`linear-gradient(to right, var(--active-background) ${o}%, var(--inactive-background) ${o}%)`;class w extends d{constructor(){super(f);a(this,"updateProgress",t=>{if(this.readonly)return;const n=t.target,e=Number(n.value),i=b(this.min,this.max,e);this.inputNode.style.background=h(i);const s=this.root.querySelector("#tooltip");s.style.left=`${i}%`,s.textContent=e.toString()});const t=this.getAttribute("value"),n=Number(t),e=t!==null&&typeof n=="number"?n:(this.max-this.min)/2+this.min,i=b(this.min,this.max,e);this.inputNode.setAttribute("min",this.min.toString()),this.inputNode.setAttribute("max",this.max.toString()),this.inputNode.setAttribute("value",e.toString()),this.inputNode.style.background=h(i);const s=this.root.querySelector("#tooltip");s.style.left=`${i}%`,s.textContent=e.toString()}static get observedAttributes(){return["label","disabled","readonly","variant","min","max","step"]}get min(){const t=this.getAttribute("min"),n=Number(t);return t!==null&&typeof n=="number"?n:0}get max(){const t=this.getAttribute("max"),n=Number(t);return t!==null&&typeof n=="number"?n:100}connectedCallback(){super.connectedCallback(),this.inputNode.addEventListener("input",this.updateProgress)}disconnectedCallback(){this.inputNode.removeEventListener("input",this.updateProgress)}update(){super.update(),this.name&&(this.labelNode.setAttribute("for",this.name),this.inputNode.setAttribute("name",this.name)),this.labelNode.textContent=this.label,this.forwardAttribute("step",this.inputNode),this.inputNode.setAttribute("min",this.min.toString()),this.inputNode.setAttribute("max",this.max.toString()),this.forwardAttribute("disabled",this.inputNode),this.forwardAttribute("variant",this.inputNode);const[t,n]=this.root.querySelectorAll("span");t.textContent=this.min.toString(),n.textContent=this.max.toString()}}a(w,"formAssociated",!0);const V=`.__wui-raised {
    padding: var(--content-panel-padding);
    margin: var(--content-panel-margin);
  
    box-shadow: 0 0 0.25rem hsla(0, 0%, 0%, var(--small-shadow-opacity));
    border-radius: var(--border-radius);
    background-color: var(--background-color);
  }`,I=`<style>
  p {
    --font-size: 1rem;
    font-size: var(--font-size);
    line-height: 1.33rem;
    color: var(--font-color, --text-color);
    margin-block-start: 0.75rem;
    margin-block-end: 0.75rem;
  }
</style>

<p>
  <slot></slot>
</p>
`,B=(o,r)=>{const t=Math.abs(r-o);return Array.apply(null,Array(t)).map(function(n,e){return o+e})},u={h1:3.125,h2:2.375,h3:1.75,h4:1.31,h5:1,p:1,tooltip:.875,small:.75},O=B(1,6).map(o=>{const r=`h${o}`,t=document.createElement("template"),n=u[r],e=Math.max(1,n*.4).toPrecision(3);return t.innerHTML=`
    <style>
      ${r} {
          --border-width: 0;
          --bottom-padding: 0;
          font-size: ${n}rem;
          margin-top: ${e}rem;
          margin-bottom: ${e}rem;
          border-bottom-style: solid;
          border-width: var(--border-width);
          border-color: var(--primary-color);
          padding-bottom: var(--padding-bottom);
          color: var(--font-color, --text-color);
      }
    </style>
      <${r}><slot>Foo</slot></${r}>
    `,[r,t]}),F=Object.fromEntries(O),x=document.createElement("template");x.innerHTML=I;const j={...F,p:x};class c extends l{constructor(t){super(j[t]);a(this,"tag");this.tag=this.root.querySelector(t)}static get observedAttributes(){return["underline","color"]}get underline(){return this.getAttribute("underline")===""}get color(){return this.getAttribute("color")}update(){if(super.update(),this.underline?(this.tag.style.setProperty("--border-width","var(--border-width-underline)"),this.tag.style.setProperty("--padding-bottom","var(--border-width-underline)")):this.tag.style.setProperty("--border-width","0"),this.color){const t=this.color,n=E.includes(t)?`var(--${t}-color)`:t;this.tag.style.setProperty("--font-color",n)}}}class D extends c{constructor(){super("h1")}}class K extends c{constructor(){super("h2")}}class G extends c{constructor(){super("h3")}}class R extends c{constructor(){super("h4")}}class J extends c{constructor(){super("h5"),this.tag.style.setProperty("text-transform","uppercase")}}class Q extends c{constructor(){super("p");a(this,"pNode");this.pNode=this.root.querySelector("p")}get small(){return this.getBoolean("small")}static get observedAttributes(){return["small"]}update(){super.update(),this.small?this.pNode.style.setProperty("--font-size",`${u.small}rem`):this.pNode.style.setProperty("--font-size",`${u.paragraph}rem`)}}const k=document.createElement("style");k.textContent=V;document.head.append(k);customElements.define("wui-a",P);customElements.define("wui-button",z);customElements.define("wui-flex",L);customElements.define("wui-input",q);customElements.define("wui-icon",H);customElements.define("wui-h1",D);customElements.define("wui-h2",K);customElements.define("wui-h3",G);customElements.define("wui-h4",R);customElements.define("wui-h5",J);customElements.define("wui-p",Q);customElements.define("wui-slider",w);
