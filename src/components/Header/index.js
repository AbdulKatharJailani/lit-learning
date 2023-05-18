import { LitElement,html } from "lit";
import { headerStyle } from "./style.js";

class MyHeader extends LitElement{
    static styles = headerStyle;
    static properties = {
        message: { type: String ,attribute: 'my-name'}
      };
    render(){
        return html`
        <div class="container">
        <header>${this.message}</header>
        </div>`;
    }
}
customElements.define('my-header',MyHeader);