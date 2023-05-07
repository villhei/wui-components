var m=Object.defineProperty;var f=(r,e,t)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var a=(r,e,t)=>(f(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const y=`<style>
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
`;class i extends HTMLElement{constructor(t){super();a(this,"root");const o=this.attachShadow({mode:"open"});o.appendChild(t.content.cloneNode(!0)),this.root=o}attributeChangedCallback(){this.update()}getBoolean(t){return this.getAttribute(t)===""}forwardAttribute(t,o){const n=this.getAttribute(t);n===null?o.removeAttribute(t):o.setAttribute(t,n)}update(){}}const d=document.createElement("template");d.innerHTML=y;class x extends i{constructor(){super(d);a(this,"anchorNode");this.anchorNode=this.root.querySelector("a")}static get observedAttributes(){return["href"]}update(){this.forwardAttribute("href",this.anchorNode)}}const w=`<style>
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
`,b=document.createElement("template");b.innerHTML=w;class k extends i{constructor(){super(b);a(this,"hasIcon");a(this,"button");a(this,"listeners");this.button=this.root.querySelector("button"),this.listeners=[],this.hasIcon=!1}static get observedAttributes(){return["label","disabled","variant"]}get label(){return this.getAttribute("label")||"Default label"}set label(t){this.setAttribute("label",t)}get variant(){var t;return(t=this.getAttribute("variant"))==null?void 0:t.toLowerCase()}connectedCallback(){const t=this.root.querySelectorAll("slot");this.listeners=[...t].map(o=>{const n=s=>{const c=o.assignedNodes();this.hasIcon=c.length>0,this.update()};return o.addEventListener("slotchange",n),()=>o.removeEventListener("slotchange",n)})}disconnectedCallback(){this.listeners.forEach(t=>t())}update(){this.variant&&(this.button.setAttribute("variant",this.variant),this.button.style.setProperty("--button-background-h",`var(--${this.variant}-color-h)`),this.button.style.setProperty("--button-background-s",`var(--${this.variant}-color-s)`),this.button.style.setProperty("--button-background-l",`var(--${this.variant}-color-l)`)),this.button.querySelector(".label").innerHTML=this.label,this.forwardAttribute("disabled",this.button),this.button.style.setProperty("--button-horizontal-padding",this.hasIcon?"var(--button-horizontal-padding-with-icon)":"var(--button-horizontal-padding-without-icon)")}}const A=`<style>
  .flex {
    display: flex;
    flex-direction: var(--flex-direction);
    flex-wrap: var(--flex-wrap);
  }

  .inline-flex {
    display: inline-flex;
    flex-direction: var(--flex-direction);
    flex-wrap: var(--flex-wrap);
  }

  .raised {
    padding: var(--content-panel-padding);
    margin: var(--content-panel-margin);

    box-shadow: 0 0 0.25rem hsla(0, 0%, 0%, var(--small-shadow-opacity));
    border-radius: var(--border-radius);
    background-color: var(--background-color);
  }
</style>
<div><slot></slot></div>
`,h=document.createElement("template");h.innerHTML=A;class N extends i{constructor(){super(h);a(this,"rootNode");this.rootNode=this.root.querySelector("div"),this.update()}static get observedAttributes(){return["class","raised","inline","direction","wrap"]}get inline(){return this.getBoolean("inline")}get raised(){return this.getBoolean("raised")}get classes(){var t;return((t=this.getAttribute("class"))==null?void 0:t.split(","))||[]}get direction(){return this.getAttribute("direction")||"row"}get wrap(){return this.getAttribute("wrap")||"nowrap"}update(){this.rootNode.style.setProperty("--flex-direction",this.direction),this.rootNode.style.setProperty("--flex-wrap",this.wrap),this.raised?this.rootNode.classList.add("raised"):this.rootNode.classList.remove("raised"),this.inline?(this.rootNode.classList.add("inline-flex"),this.rootNode.classList.remove("flex")):(this.rootNode.classList.remove("inline-flex"),this.rootNode.classList.add("flex")),this.classes.forEach(t=>this.rootNode.classList.add(t))}}const C=`<style>
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
`,p=document.createElement("template");p.innerHTML=C;class E extends i{constructor(){super(p);a(this,"iconContainer");this.iconContainer=this.root.querySelector("span");const t=getComputedStyle(this).getPropertyValue("--icon-color");this.iconContainer.style.setProperty("--icon-color",t);const o=getComputedStyle(this).fontSize;this.iconContainer.style.setProperty("--font-size-base",o)}static get observedAttributes(){return["grayscale","greyscale"]}get greyscale(){return this.getAttribute("grayscale")===""||this.getAttribute("greyscale")===""}attributeChangedCallback(){this.iconContainer.style.setProperty("--grayscale-percentage",this.greyscale?"100%":"0%")}}const L=`<style>
  input {
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

  div {
    display: inline-flex;
    flex-direction: column;
    margin: var(--component-margin);
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
    outline-color: var(--input-focused-border-color);
    outline-offset: 0;
  }

  input::placeholder {
    color: var(--input-placeholder-color);
  }

  input:disabled {
    cursor: not-allowed;
    background-color: var(--grey-shade-5);
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
<div>
  <label> </label>
  <input />
  <p id="message"></p>
</div>
`,v=document.createElement("template");v.innerHTML=L;class z extends i{constructor(){super(v);a(this,"inputNode");a(this,"labelNode");a(this,"messageNode");this.inputNode=this.root.querySelector("input"),this.labelNode=this.root.querySelector("label"),this.messageNode=this.root.querySelector("#message"),this.update()}static get observedAttributes(){return["class","label","name","disabled","value","type","message"]}get label(){return this.getAttribute("label")}get name(){return this.getAttribute("name")}get disabled(){return this.getBoolean("disabled")}get placeholder(){return this.getAttribute("placeholder")}get classes(){var t;return((t=this.getAttribute("class"))==null?void 0:t.split(","))||[]}get value(){return this.getAttribute("value")||""}get type(){return this.getAttribute("type")||"text"}get variant(){return this.getAttribute("variant")||"default"}get message(){return this.getAttribute("message")}connectedCallback(){this.value&&this.inputNode.setAttribute("value",this.value)}update(){this.classes.forEach(t=>this.inputNode.classList.add(t)),this.labelNode.textContent=this.label,this.name&&(this.labelNode.setAttribute("for",this.name),this.inputNode.setAttribute("name",this.name)),this.forwardAttribute("placeholder",this.inputNode),this.forwardAttribute("disabled",this.inputNode),this.forwardAttribute("type",this.inputNode),this.forwardAttribute("variant",this.inputNode),this.message?this.messageNode.textContent=this.message:this.messageNode.textContent=""}}const P=`<style>
  p {
    --font-size: 1rem;
    font-size: var(--font-size);
    line-height: 1.33rem;
    color: var(--text-color);
    margin-block-start: 0.75rem;
    margin-block-end: 0.75rem;
  }
</style>

<p>
  <slot></slot>
</p>
`,$=(r,e)=>{const t=Math.abs(e-r);return Array.apply(null,Array(t)).map(function(o,n){return r+n})},u={h1:3.125,h2:2.375,h3:1.75,h4:1.31,h5:1,p:1,tooltip:.875,small:.75},S=$(1,6).map(r=>{const e=`h${r}`,t=document.createElement("template"),o=u[e],n=Math.max(1,o*.4).toPrecision(3);return t.innerHTML=`
    <style>
      ${e} {
          --border-width: 0;
          --bottom-padding: 0;
          font-size: ${o}rem;
          margin-top: ${n}rem;
          margin-bottom: ${n}rem;
          border-bottom-style: solid;
          border-width: var(--border-width);
          border-color: var(--primary-color);
          padding-bottom: var(--padding-bottom);
          color: var(--text-color);
      }
    </style>
      <${e}><slot>Foo</slot></${e}>
    `,[e,t]}),H=Object.fromEntries(S),g=document.createElement("template");g.innerHTML=P;const M={...H,p:g};class l extends i{constructor(t){super(M[t]);a(this,"tag");this.tag=this.root.querySelector(t)}static get observedAttributes(){return["underline"]}get underline(){return this.getAttribute("underline")===""}update(){this.underline?(this.tag.style.setProperty("--border-width","var(--border-width-underline)"),this.tag.style.setProperty("--padding-bottom","var(--border-width-underline)")):this.tag.style.setProperty("--border-width","0")}}class q extends l{constructor(){super("h1")}}class T extends l{constructor(){super("h2")}}class I extends l{constructor(){super("h3")}}class B extends l{constructor(){super("h4")}}class O extends l{constructor(){super("h5"),this.tag.style.setProperty("text-transform","uppercase")}}class F extends l{constructor(){super("p");a(this,"pNode");this.pNode=this.root.querySelector("p")}get small(){return this.getBoolean("small")}static get observedAttributes(){return["small"]}update(){this.small?this.pNode.style.setProperty("--font-size",`${u.small}rem`):this.pNode.style.setProperty("--font-size",`${u.paragraph}rem`)}}customElements.define("wui-a",x);customElements.define("wui-button",k);customElements.define("wui-flex",N);customElements.define("wui-input",z);customElements.define("wui-icon",E);customElements.define("wui-h1",q);customElements.define("wui-h2",T);customElements.define("wui-h3",I);customElements.define("wui-h4",B);customElements.define("wui-h5",O);customElements.define("wui-p",F);
