import { LitElement,html } from "lit";
import { customElement,property } from "lit/decorators.js";
import { headerStyle } from "./style";
@customElement('header-element')
class HeaderElement extends LitElement{
    static styles = headerStyle;
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