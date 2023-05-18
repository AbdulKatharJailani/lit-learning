import {LitElement, html} from 'lit';

import './Header/index.js';
import './Footer/index.js';
import './Attribute/index.js';
import './Lifecycle/index.js';

class MyPage extends LitElement {
  render() {
    return html`
      <my-header></my-header>
      <my-element></my-element>
      <lifecycle-component></lifecycle-component>
      <my-footer></my-footer>
   
    `;
  }
}
customElements.define('my-page', MyPage);