import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import './card-emenda.component.ts';
import { listEmendasCSS } from '../../assets/css/components/v1/list-emendas.css';
import { shoelaceLightThemeStyles } from '../../assets/css/components/v2/shoelace.theme.light.css';

@customElement('list-emendas')
export class ListEmendas extends LitElement {
  static styles = listEmendasCSS;

  @property({ type: Array }) childComponent = [];
  
  @property({ type: Array }) proposicoes = [];

  render(): TemplateResult {
    {
      return html`
      ${shoelaceLightThemeStyles}
        <div class="title-list">
          <h3>Parametrizada</h3>
          <sl-badge variant="primary" pill> ${this.proposicoes.length} </sl-badge>
        </div>
        ${repeat(
          this.proposicoes,
            emenda => html`
            <card-emenda
              identificacao=${emenda.descricaoIdentificacao}
              ementa=${emenda.ementa}
              .proposicao=${emenda}
            ></card-emenda>
          `
        )}
      `;
    }
  }
}
