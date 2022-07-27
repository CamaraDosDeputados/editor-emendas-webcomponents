import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace';
import workspaceSVG from '@https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.78/dist/assets/icons/person-workspace.svg';
import { cardTotalEmendasCSS } from '../../assets/css/components/v1/card-total-emendas.css';

@customElement('card-total-emendas')
export class CardTotalEmendas extends LitElement {
  static styles = cardTotalEmendasCSS;

  @property({ type: String })
  totalEmendas = '0';

  render(): TemplateResult {
    {
      return html`
        <sl-card class="card-dashboard">
            <sl-icon src=${workspaceSVG}></sl-icon>
            <h1><strong>${this.totalEmendas}</strong></h1>
            <h2><strong>Minhas Emendas</strong></h2>
            Acesse as emendas que você está trabalhando
          </div>
        </sl-card>
      `;
    }
  }
}
