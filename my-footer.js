import { LitElement,html } from "lit";

class MyFooter extends LitElement{
    render(){
        return html`<footer>Footer</footer>`;
    }
}
customElements.define('my-footer',MyFooter);