import {LitElement, html} from 'lit';
import { customElement } from 'lit/decorators.js';
import './components/Header/index';
import './components/Footer/index';
import './components/Attribute/index';
@customElement ('page-element')
export class PageElement extends LitElement {
  handleClick() {
    console.log('Button clicked in parent component');
  }
  override render() {
    return html`
      <header-element message="Header-component"></header-element>
      <attribute-element .handleClick=${this.handleClick}></attribute-element>
      <footer-element message="Footer-component"></footer-element>
    `;
  }
}