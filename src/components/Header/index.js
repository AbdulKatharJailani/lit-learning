import { LitElement,html } from "lit";
import { headerStyle } from "./style.js";

class MyHeader extends LitElement{
    static styles = headerStyle;
    render(){
        return html`
        <div class="container">
        <header>Header</header>
        </div>`;
    }
}
customElements.define('my-header',MyHeader);