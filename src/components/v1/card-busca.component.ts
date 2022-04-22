import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace';
import searchSVG from '@shoelace-style/shoelace/dist/assets/icons/search.svg';
import { cardBuscaCSS } from '../../assets/css/components/v1/card-busca.css';

@customElement('card-busca')
export class CardBusca extends LitElement {
  static styles = cardBuscaCSS;

  @property({ type: String })
  sigla = 'MPV';
  @property({ type: String })
  numero = null;
  @property({ type: String })
  ano = '2022';

  render(): TemplateResult {
    {
      return html`
        <sl-card class="card-header">
          <div slot="header">
            Pesquisa
            <sl-icon src=${searchSVG} label="pesquisar"></sl-icon>
          </div>
          <form>
            <sl-input
              type="text"
              Placeholder="Sigla"
              value=${this.sigla}
            ></sl-input>
            <br />
            <sl-input
              type="number"
              Placeholder="Número"
              value=${this.numero}
            ></sl-input>
            <br />
            <sl-input
              type="number"
              Placeholder="Ano"
              value=${this.ano}
            ></sl-input>
            <br />
            <sl-button variant="primary">Pesquisar</sl-button>
          </form>
        </sl-card>
      `;
    }
  }
}
