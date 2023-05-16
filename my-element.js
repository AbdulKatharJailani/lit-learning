import {LitElement, html, css} from 'lit';

class MyElement extends LitElement {
  static properties = {
    active: {type: Boolean, reflect: true},
  };

  static styles = css`
    :host {
      display: inline-block;
    }

    :host([active]) {
      border: 1px solid red;
    }`;

  constructor() {
    super();
    this.active = false;
  }

  render() {
    return html`
      <span>Active: ${this.active}</span>
      <button @click="${() =>
        (this.active = !this.active)}">Toggle active</button>
    `;
  }
}
customElements.define('my-element', MyElement);