import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace';
import './card-emenda.component.ts';
import { listEmendasCSS } from '../../assets/css/components/v1/list-emendas.css';
import folderSVG from '@shoelace-style/shoelace/dist/assets/icons/folder2-open.svg';
import { Proposicao } from '../v2/proposicao.service';

@customElement('list-emendas')
export class ListEmendas extends LitElement {
  static styles = listEmendasCSS;

  @property({ attribute: 'minhas-emendas' })
  minhasEmendas?: boolean;

  static get properties() {
    return {
      data: { type: Object },
    };
  }

  render(): TemplateResult {
    {
      return html`
        <div class="title-list">
          <h3>Parametrizada</h3>
          <sl-badge variant="primary" pill> ${this.data.length} </sl-badge>
        </div>
        ${repeat(
          this.data,
          emenda => html`
            <card-emenda
              identificacao=${emenda.descricaoIdentificacao}
              ementa=${emenda.ementa}
              minha-emenda=${this.minhasEmendas}
              .proposicao=${emenda}
            ></card-emenda>
          `
        )}
      `;
    }
  }
}
