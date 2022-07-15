import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace';
import journalSVG from '@shoelace-style/shoelace/dist/assets/icons/journal-code.svg';
import { cardEmendaCSS } from '../../assets/css/components/v1/card-emenda.css';
import { Proposicao } from '../v2/proposicao.service';

@customElement('card-emenda')
export class CardEmenda extends LitElement {
  static styles = cardEmendaCSS;

  @property({ type: String })
  identificacao = '';
  @property({ type: String })
  ementa = '';

  @property({ type: Object }) proposicao = {};

  private _criarEmenda(tipoEmenda: string): void {
    this.dispatchEvent(
      new CustomEvent('proposicao', {
        tipoEmenda: tipoEmenda,
        proposicao: this.proposicao,
      })
    );
  }

  render(): TemplateResult {
    {
      return html`
        <sl-card class="card-emenda">
          <sl-avatar initials="MPV" label="Medida Provisória"></sl-avatar>
          <div>
            <h3><strong>${this.identificacao}</strong></h3>
            ${this.ementa}
            <br />
            <br />
            ${this.minhaEmenda
              ? html`
                  <sl-button size="small" pill>
                    <sl-icon src="${folderSVG}"></sl-icon> Abrir
                  </sl-button>
                  <sl-button size="small" pill>
                    <sl-icon src="${trashSVG}"></sl-icon> Remover da lista
                  </sl-button>
                `
              : ''}
            <sl-dropdown>
              <sl-button slot="trigger" size="small" pill caret>
                <sl-icon src="${journalSVG}"></sl-icon> Nova emenda
              </sl-button>
              <sl-menu>
                <sl-menu-item @click=${() => this._criarEmenda('padrao')}>
                  Padrão
                </sl-menu-item>
                <sl-menu-item @click=${() => this._criarEmenda('ondeCouber')}>
                  Artigo "Onde couber"
                </sl-menu-item>
                <sl-menu-item
                  @click=${() => this._criarEmenda('substitutivo')}
                  disabled
                >
                  Substitutivo
                </sl-menu-item>
              </sl-menu>
            </sl-dropdown>
          </div>
        </sl-card>
      `;
    }
  }
}
