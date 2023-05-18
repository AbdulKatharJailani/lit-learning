import { LitElement,html } from "lit";
import {footerStyle} from './style.js';

class MyFooter extends LitElement{
    static styles = footerStyle;
    render(){
        return html
        `<div class="container">
        <footer>Footer</footer>
        </div>`;
    }
}
customElements.define('my-footer',MyFooter);