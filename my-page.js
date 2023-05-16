import {LitElement, html} from 'lit';

import './my-header.js';
import './my-footer.js';
import './my-element.js';

class MyPage extends LitElement {
  render() {
    return html`
      <my-header></my-header>
      <my-element></my-element>
      <my-footer></my-footer>
    `;
  }
}
customElements.define('my-page', MyPage);