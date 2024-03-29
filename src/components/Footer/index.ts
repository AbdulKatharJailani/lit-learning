import { LitElement,html } from "lit";
import { customElement,property } from "lit/decorators.js";
import { footerStyle } from "./style";

@customElement('footer-element')
export class FooterElement extends LitElement{
    static override styles = footerStyle;
    @property({ 
        type: String,
      }) message = '';

      override render(){
        return html `
        <div class="container">
        <footer>${this.message}</footer>
        </div>
        `
      }    
}
