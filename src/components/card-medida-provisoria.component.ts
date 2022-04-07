import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { cardMinhasEmendasCSS } from '../assets/css/components/card-minhas-emendas.css';
import { cardMedidaProvisoriaCSS } from '../assets/css/components/card-medida-provisoria.css';

@customElement('card-medida-provisoria')
export class cardMedidaProvisoria extends LitElement {
  static styles = [cardMinhasEmendasCSS, cardMedidaProvisoriaCSS];

  render(): TemplateResult {
    {
      return html`
        <a
          href="#"
          class="list-group-item list-group-item-action prazo-aberto"
          aria-current="true"
        >
          <div class="d-flex w-100 justify-content-between">
            <h6 class="list-group-item-title">MPV 1028/2022</h6>
            <div
              w3-include-html="/src/views/dashboard-html/DashboardMenuEmendas.html"
            ></div>
          </div>
          <span class="list-group-item-data">14/03/2021</span>
        </a>
      `;
    }
  }
}
