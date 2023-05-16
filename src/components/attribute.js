import {LitElement, html, css} from 'lit';

class MyElement extends LitElement {
  static get properties() {
    return {
      count: { 
        type: Number,
        attribute: 'my-count',
        reflect: true,
        hasChanged(newVal, oldVal) {
          return newVal !== oldVal && newVal % 2 === 0;
        }
      },
      message: { 
        type: String,
        reflect: true,
        converter: (value) => value.toUpperCase(),
        hasChanged(newVal, oldVal) {
          return newVal !== oldVal && newVal.includes('LIT');
        }
      },
    };
  }

  constructor() {
    super();
    this.count = 0;
    this.message = 'Hello, Lit!';
  }

  render() {
    return html`
      <div>
        <p>Count: ${this.count}</p>
        <p>Message: ${this.message}</p>
        <button @click=${this.increment}>Increment</button>
      </div>
    `;
  }

  increment() {
    this.count += 1;
    this.message = `Count: ${this.count}`;
  }
}
customElements.define('my-element', MyElement);