import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../../tailwindElement/tailwind.element";
import {attributeStyle} from "./style";

@customElement("attribute-element")
export class AttributeElement extends TailwindElement(attributeStyle) {
  @property()
  name?: string = "World";

  override render() {
    return html`
      <div class="container">
        Hello,
        <b>${this.name}</b>
        <h1 class="text-3xl font-bold">TailWind Configuration</h1>
      </div>
      
    `;
  }
}