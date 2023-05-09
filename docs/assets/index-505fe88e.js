var x=Object.defineProperty;var k=(o,n,t)=>n in o?x(o,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[n]=t;var a=(o,n,t)=>(k(o,typeof n!="symbol"?n+"":n,t),t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const A=`<style>
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
`,N=["text","default","success","primary","secondary","warning","error","background"];class i extends HTMLElement{constructor(t){super();a(this,"root");const r=this.attachShadow({mode:"open"});r.appendChild(t.content.cloneNode(!0)),this.root=r}attributeChangedCallback(t,r,e){r!==e&&this.update()}getBoolean(t){return this.getAttribute(t)===""}forwardAttribute(t,r){const e=this.getAttribute(t);e===null?r.removeAttribute(t):r.setAttribute(t,e)}update(){}}const d=document.createElement("template");d.innerHTML=A;class E extends i{constructor(){super(d);a(this,"anchorNode");this.anchorNode=this.root.querySelector("a")}static get observedAttributes(){return["href"]}update(){this.forwardAttribute("href",this.anchorNode)}}const C=`<style>
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
`,h=document.createElement("template");h.innerHTML=C;class P extends i{constructor(){super(h);a(this,"hasIcon");a(this,"button");a(this,"listeners");this.button=this.root.querySelector("button"),this.listeners=[],this.hasIcon=!1}static get observedAttributes(){return["label","disabled","variant"]}get label(){return this.getAttribute("label")||"Default label"}set label(t){this.setAttribute("label",t)}get variant(){var t;return(t=this.getAttribute("variant"))==null?void 0:t.toLowerCase()}connectedCallback(){const t=this.root.querySelectorAll("slot");this.listeners=[...t].map(r=>{const e=s=>{const c=r.assignedNodes();this.hasIcon=c.length>0,this.update()};return r.addEventListener("slotchange",e),()=>r.removeEventListener("slotchange",e)})}disconnectedCallback(){this.listeners.forEach(t=>t())}update(){this.variant&&(this.button.setAttribute("variant",this.variant),this.button.style.setProperty("--button-background-h",`var(--${this.variant}-color-h)`),this.button.style.setProperty("--button-background-s",`var(--${this.variant}-color-s)`),this.button.style.setProperty("--button-background-l",`var(--${this.variant}-color-l)`)),this.button.querySelector(".label").innerHTML=this.label,this.forwardAttribute("disabled",this.button),this.button.style.setProperty("--button-horizontal-padding",this.hasIcon?"var(--button-horizontal-padding-with-icon)":"var(--button-horizontal-padding-without-icon)")}}const L=`<style>
  :host {
    display: var(--flex-display);
    flex-direction: var(--flex-direction);
    flex-wrap: var(--flex-wrap);
  }
</style>
<slot></slot>
`,b=document.createElement("template");b.innerHTML=L;class z extends i{constructor(){super(b),this.update()}static get observedAttributes(){return["raised","inline","direction","wrap","position"]}get inline(){return this.getBoolean("inline")}get raised(){return this.getBoolean("raised")}get direction(){return this.getAttribute("direction")||"row"}get wrap(){return this.getAttribute("wrap")||"nowrap"}get position(){return this.getAttribute("position")}update(){this.inline?this.style.setProperty("--flex-display","inline-flex"):this.style.setProperty("--flex-display","flex"),this.style.setProperty("--flex-direction",this.direction),this.style.setProperty("--flex-wrap",this.wrap),this.style.setProperty("--position",this.position),this.raised?this.classList.add("__wui-raised"):this.classList.remove("__wui-raised")}}const $=`<style>
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
`,p=document.createElement("template");p.innerHTML=$;class S extends i{constructor(){super(p);a(this,"iconContainer");this.iconContainer=this.root.querySelector("span");const t=getComputedStyle(this).getPropertyValue("--icon-color");this.iconContainer.style.setProperty("--icon-color",t);const r=getComputedStyle(this).fontSize;this.iconContainer.style.setProperty("--font-size-base",r)}static get observedAttributes(){return["grayscale","greyscale"]}get greyscale(){return this.getAttribute("grayscale")===""||this.getAttribute("greyscale")===""}attributeChangedCallback(){this.iconContainer.style.setProperty("--grayscale-percentage",this.greyscale?"100%":"0%")}}const H=`<style>
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
<label> </label>
<input />
<p id="message"></p>
`,v=document.createElement("template");v.innerHTML=H;class g extends i{constructor(){super(v);a(this,"_value");a(this,"internals");a(this,"inputNode");a(this,"labelNode");a(this,"messageNode");a(this,"handleInputEvent",t=>{const r=new Event(t.type,t);this.value=this.inputNode.value,this.dispatchEvent(r)});this.inputNode=this.root.querySelector("input"),this.labelNode=this.root.querySelector("label"),this.messageNode=this.root.querySelector("#message"),this.internals=this.attachInternals(),this.update(),this._value=""}static get observedAttributes(){return["class","label","name","disabled","type","message","readonly"]}connectedCallback(){const t=this.getAttribute("value");t!==null&&this.inputNode.setAttribute("value",t),this.inputNode.addEventListener("change",this.handleInputEvent)}disconnectedCallback(){this.inputNode.removeEventListener("change",this.handleInputEvent)}get label(){return this.getAttribute("label")}get name(){return this.getAttribute("name")}get classes(){var t;return((t=this.getAttribute("class"))==null?void 0:t.split(","))||[]}set value(t){this._value=t,this.inputNode.value=t,this.internals&&this.internals.setFormValue(t)}get value(){return this._value}get type(){return this.localName}get message(){return this.getAttribute("message")}update(){this.classes.forEach(t=>this.inputNode.classList.add(t)),this.labelNode.textContent=this.label,this.name&&(this.labelNode.setAttribute("for",this.name),this.inputNode.setAttribute("name",this.name)),this.forwardAttribute("placeholder",this.inputNode),this.forwardAttribute("disabled",this.inputNode),this.forwardAttribute("readonly",this.inputNode),this.forwardAttribute("type",this.inputNode),this.forwardAttribute("variant",this.inputNode),this.message?this.messageNode.textContent=this.message:this.messageNode.textContent=""}}a(g,"formAssociated",!0);const I=`<style>
  input {
    -webkit-appearance: none;
    flex: 1;
    height: 15px;
    border-radius: 5px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
  }

  input::-webkit-slider-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #04aa6d;
    cursor: pointer;
  }

  input::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #04aa6d;
    cursor: pointer;
  }

  :host {
    display: inline-flex;
    flex-direction: column;
    padding: var(--component-padding);
  }
</style>
<input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
`,m=document.createElement("template");m.innerHTML=I;class y extends i{constructor(){super(m);a(this,"_value");a(this,"internals");a(this,"inputNode");a(this,"labelNode");a(this,"messageNode");a(this,"handleInputEvent",t=>{const r=new Event(t.type,t);this.value=this.inputNode.value,this.dispatchEvent(r)});this.inputNode=this.root.querySelector("input"),this.labelNode=this.root.querySelector("label"),this.messageNode=this.root.querySelector("#message"),this.internals=this.attachInternals(),this.update(),this._value=""}static get observedAttributes(){return["class","label","name","disabled","value","type","message"]}connectedCallback(){const t=this.getAttribute("value");t!==null&&this.inputNode.setAttribute("value",t),this.inputNode.addEventListener("change",this.handleInputEvent)}disconnectedCallback(){this.inputNode.removeEventListener("change",this.handleInputEvent)}get label(){return this.getAttribute("label")}get name(){return this.getAttribute("name")}get disabled(){return this.getBoolean("disabled")}get placeholder(){return this.getAttribute("placeholder")}get classes(){var t;return((t=this.getAttribute("class"))==null?void 0:t.split(","))||[]}set value(t){this._value=t,this.inputNode.value=t,this.internals&&this.internals.setFormValue(t)}get value(){return this._value}get type(){return this.getAttribute("type")||"text"}get variant(){return this.getAttribute("variant")||"default"}get message(){return this.getAttribute("message")}update(){this.classes.forEach(t=>this.inputNode.classList.add(t)),this.labelNode.textContent=this.label,this.name&&(this.labelNode.setAttribute("for",this.name),this.inputNode.setAttribute("name",this.name)),this.forwardAttribute("placeholder",this.inputNode),this.forwardAttribute("disabled",this.inputNode),this.forwardAttribute("type",this.inputNode),this.forwardAttribute("variant",this.inputNode),this.message?this.messageNode.textContent=this.message:this.messageNode.textContent=""}}a(y,"formAssociated",!0);const M=`.__wui-raised {
    padding: var(--content-panel-padding);
    margin: var(--content-panel-margin);
  
    box-shadow: 0 0 0.25rem hsla(0, 0%, 0%, var(--small-shadow-opacity));
    border-radius: var(--border-radius);
    background-color: var(--background-color);
  }`,_=`<style>
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
`,q=(o,n)=>{const t=Math.abs(n-o);return Array.apply(null,Array(t)).map(function(r,e){return o+e})},u={h1:3.125,h2:2.375,h3:1.75,h4:1.31,h5:1,p:1,tooltip:.875,small:.75},T=q(1,6).map(o=>{const n=`h${o}`,t=document.createElement("template"),r=u[n],e=Math.max(1,r*.4).toPrecision(3);return t.innerHTML=`
    <style>
      ${n} {
          --border-width: 0;
          --bottom-padding: 0;
          font-size: ${r}rem;
          margin-top: ${e}rem;
          margin-bottom: ${e}rem;
          border-bottom-style: solid;
          border-width: var(--border-width);
          border-color: var(--primary-color);
          padding-bottom: var(--padding-bottom);
          color: var(--font-color, --text-color);
      }
    </style>
      <${n}><slot>Foo</slot></${n}>
    `,[n,t]}),B=Object.fromEntries(T),f=document.createElement("template");f.innerHTML=_;const O={...B,p:f};class l extends i{constructor(t){super(O[t]);a(this,"tag");this.tag=this.root.querySelector(t)}static get observedAttributes(){return["underline","color"]}get underline(){return this.getAttribute("underline")===""}get color(){return this.getAttribute("color")}update(){if(this.underline?(this.tag.style.setProperty("--border-width","var(--border-width-underline)"),this.tag.style.setProperty("--padding-bottom","var(--border-width-underline)")):this.tag.style.setProperty("--border-width","0"),this.color){const t=this.color,r=N.includes(t)?`var(--${t}-color)`:t;this.tag.style.setProperty("--font-color",r)}}}class F extends l{constructor(){super("h1")}}class V extends l{constructor(){super("h2")}}class j extends l{constructor(){super("h3")}}class D extends l{constructor(){super("h4")}}class K extends l{constructor(){super("h5"),this.tag.style.setProperty("text-transform","uppercase")}}class R extends l{constructor(){super("p");a(this,"pNode");this.pNode=this.root.querySelector("p")}get small(){return this.getBoolean("small")}static get observedAttributes(){return["small"]}update(){this.small?this.pNode.style.setProperty("--font-size",`${u.small}rem`):this.pNode.style.setProperty("--font-size",`${u.paragraph}rem`)}}const w=document.createElement("style");w.textContent=M;document.head.append(w);customElements.define("wui-a",E);customElements.define("wui-button",P);customElements.define("wui-flex",z);customElements.define("wui-input",g);customElements.define("wui-icon",S);customElements.define("wui-h1",F);customElements.define("wui-h2",V);customElements.define("wui-h3",j);customElements.define("wui-h4",D);customElements.define("wui-h5",K);customElements.define("wui-p",R);customElements.define("wui-slider",y);
