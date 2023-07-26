import { LitElement,html } from "lit";
import { customElement,property } from "lit/decorators.js";
import { headerStyle } from "./style";
@customElement('header-element')
export class HeaderElement extends LitElement{
    static override styles = headerStyle;
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