import { html, LitElement } from 'lit';

class LifecycleComponent extends LitElement {    
      static get properties() {
        return {
          count: { type: Number },
        };
      }
    
      constructor() {
        super();
        this.count = 0;
        console.log('Constructor called');
      }
    
      connectedCallback() {
        super.connectedCallback();
        console.log('connectedCallback called');
      }
    
      disconnectedCallback() {
        super.disconnectedCallback();
        console.log('disconnectedCallback called');
      }
    
      firstUpdated() {
        super.firstUpdated();
        console.log('firstUpdated called');
      }
    
      updated(changedProperties) {
        super.updated(changedProperties);
        console.log('updated called', changedProperties);
      }

      shouldUpdate(changedProperties) {
        if (changedProperties.has('count')) {
          return this.count % 2 === 0; 
        }
        return true;
      }

      willUpdate(changedProperties) {
        console.log('Component will update', changedProperties);
      }

      requestUpdate(name, oldValue) {
        console.log(`Requested update for property ${name} from ${oldValue} to ${this[name]}`);
        super.requestUpdate(name, oldValue);
      }
    
      increment() {
        this.count += 1;
        this.requestUpdate('count', 0);
      }
    
      render() {
        console.log('render called');
        return html`
          <div>
            <p>Count: ${this.count}</p>
            <button @click=${this.increment}>Increment</button>
          </div>
        `;
      }
    }

customElements.define('lifecycle-component', LifecycleComponent);