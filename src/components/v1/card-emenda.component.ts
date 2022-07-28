import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { cardEmendaCSS } from '../../assets/css/components/v1/card-emenda.css';
import { shoelaceLightThemeStyles } from '../../assets/css/components/v2/shoelace.theme.light.css';

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
      } as Object)
    );
  }

  render(): TemplateResult {
    {
      return html`
      ${shoelaceLightThemeStyles}
        <sl-card class="card-emenda">
          <sl-avatar initials="MPV" label="Medida Provisória"></sl-avatar>
          <div>
            <h3><strong>${this.identificacao}</strong></h3>
            ${this.ementa}
            <br />
            <br />
            <sl-dropdown>
              <sl-button slot="trigger" size="small" pill caret>
              <sl-icon
                  src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.78/dist/assets/icons/journal-code.svg"
                ></sl-icon> Nova emenda
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
