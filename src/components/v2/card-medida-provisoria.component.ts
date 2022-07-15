import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { cardCSS } from '../../assets/css/components/v2/card.css';
import { cardMedidaProvisoriaCSS } from '../../assets/css/components/v2/card-medida-provisoria.css';
import './card-menu.component.ts';
import { Proposicao } from './proposicao.service';

@customElement('card-medida-provisoria')
export class cardMedidaProvisoria extends LitElement {
  static styles = [cardCSS, cardMedidaProvisoriaCSS];

  @property({ type: Object })
  proposicao = {} as Proposicao;

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
              <card-menu .proposicao="${this.proposicao}"></card-menu>
            </div>
          </div>
          <span class="list-group-item-data">14/03/2021</span>
        </a>
      `;
    }
  }
}
