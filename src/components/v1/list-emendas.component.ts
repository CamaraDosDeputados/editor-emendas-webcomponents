import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace';
import './card-emenda.component.ts';
import { listEmendasCSS } from '../../assets/css/components/v1/list-emendas.css';
import folderSVG from '@shoelace-style/shoelace/dist/assets/icons/folder2-open.svg';

@customElement('list-emendas')
export class ListEmendas extends LitElement {
  static styles = listEmendasCSS;

  @property({ type: Array })
  emendas = [
    {
      identificacao: 'MPV 1096/2022',
      ementa:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non',
    },
    {
      identificacao: 'MPV 1097/2022',
      ementa:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non',
    },
  ];
  @property({ attribute: 'minhas-emendas' })
  minhasEmendas?: boolean;

  render(): TemplateResult {
    {
      return html`
        <div class="title-list">
          ${this.minhasEmendas
            ? html`<h3>Minhas Emendas</h3>
                <sl-badge variant="primary" pill>
                  ${this.emendas.length}
                </sl-badge>
                <sl-button size="small" pill>
                  <sl-icon src="${folderSVG}"></sl-icon> Abrir emenda do disco
                </sl-button>`
            : html`<h3>Parametrizada</h3>
                <sl-badge variant="primary" pill>
                  {this.emendas.length}
                </sl-badge>`}
        </div>
        ${repeat(
          this.emendas,
          emenda => html`
            <card-emenda
              identificacao=${emenda.identificacao}
              ementa=${emenda.ementa}
              minha-emenda=${this.minhasEmendas}
            ></card-emenda>
          `
        )}
      `;
    }
  }
}
