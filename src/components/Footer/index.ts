import { LitElement,html } from "lit";
import { customElement,property } from "lit/decorators.js";
import { footerStyle } from "./style";

@customElement('footer-element')
class FooterElement extends LitElement{
    static styles = footerStyle;
    @property({ 
        type: String,
      }) message = '';

      render(){
        return html `
        <div class="container">
        <footer>${this.message}</footer>
        </div>
        `
      }    
}
