import {LitElement, html} from 'lit';

import './components/header.js';
import './components/footer.js';
import './components/attribute.js';
import './components/lifecycle.js';

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