import { LitElement,html } from "lit";
import {footerStyle} from './style.js';

class MyFooter extends LitElement{
     static styles = footerStyle;
     static properties = {
        message: { type: String }
      };
    render(){
        return html
        `<div class="container">
        <footer>${this.message}</footer>
        </div>`;
    }
}
customElements.define('my-footer',MyFooter);