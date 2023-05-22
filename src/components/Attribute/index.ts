// import {LitElement, html} from 'lit';
// import {customElement, property} from 'lit/decorators.js';
// import { attributeStyle } from './style';
// @customElement('attribute-element')
// class AttributeElement extends LitElement {
//   static styles = attributeStyle;
//   @property({ 
//     type: Number,
//     attribute: 'my-count',
//     reflect: true,
//   }) count = 0;

//   @property({ 
//     type: String,
//     reflect: true,
//   }) message = '';
 
//   @property({ type: Function }) handleClick: any;

//   render() {
//     return html`
//       <div class="container">
//         <p class="text-3xl font-bold">Count: ${this.count}</p>
//         <p>Message: ${this.message}</p>
//         <button @click=${this.increment}>Increment</button>
//         <button @click="${this.handleClick}">Click me</button>
//       </div>
//     `;
//   }

//   increment() {
//     this.count += 1;
//     this.message = `Count: ${this.count}`;
//   }
// }

import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../../tailwindElement/tailwind.element";

import {attributeStyle} from "./style";

@customElement("attribute-element")
export class AttributeElement extends TailwindElement(attributeStyle) {
  @property()
  name?: string = "World";

  render() {
    return html`
      <div class="container">
        Hello,
        <b>${this.name}</b>
        <h1 class="text-3xl font-bold underline">TailWind Configuration</h1>
      </div>
      
    `;
  }
}