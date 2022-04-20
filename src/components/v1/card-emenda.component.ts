import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace';
import folderSVG from '@shoelace-style/shoelace/dist/assets/icons/folder2-open.svg';
import trashSVG from '@shoelace-style/shoelace/dist/assets/icons/trash3.svg';
import journalSVG from '@shoelace-style/shoelace/dist/assets/icons/journal-code.svg';
import { cardEmendaCSS } from '../../assets/css/components/v1/card-emenda.css';

@customElement('card-emenda')
export class CardEmenda extends LitElement {
  static styles = cardEmendaCSS;

  @property({ type: String })
  identificacao = 'MPV 1096/2022';
  @property({ type: String })
  ementa =
    'Abre crédito extraordinário, em favor do Ministério do Desenvolvimento Regional, no valor de R$ 550.000.000,00, para o fim que especifica.';
  @property({ attribute: 'minha-emenda' })
  minhaEmenda?: boolean;

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
                <sl-menu-item value="padrao"> Padrão </sl-menu-item>
                <sl-menu-item value="ondecouber">
                  Artigo "Onde couber"
                </sl-menu-item>
                <sl-menu-item value="substitutivo" disabled>
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
