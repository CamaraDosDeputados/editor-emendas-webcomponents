import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { cardCSS } from '../../assets/css/components/versao-1/card.css';
import { cardMedidaProvisoriaCSS } from '../../assets/css/components/versao-1/card-medida-provisoria.css';
import './card-menu.component.ts';

@customElement('card-medida-provisoria')
export class cardMedidaProvisoria extends LitElement {
  static styles = [cardCSS, cardMedidaProvisoriaCSS];

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
            <div>
              <card-menu></card-menu>
            </div>
          </div>
          <span class="list-group-item-data">14/03/2021</span>
        </a>
      `;
    }
  }
}
