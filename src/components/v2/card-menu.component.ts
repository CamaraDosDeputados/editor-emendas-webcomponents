import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { cardMenuCSS } from '../../assets/css/components/v2/card-menu.css';
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/components/button/button';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown';
import '@shoelace-style/shoelace/dist/components/icon/icon';
import '@shoelace-style/shoelace/dist/components/divider/divider';
import '@shoelace-style/shoelace/dist/components/menu/menu';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item';
import { Proposicao } from './proposicao.service';

@customElement('card-menu')
export class CardMenu extends LitElement {
  static styles = cardMenuCSS;

  @property()
  minhasEmendas?: boolean;

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
        <sl-dropdown>
          <sl-button slot="trigger" caret>
            <span class="context-menu"></span>
          </sl-button>
          <sl-menu>
            ${this.minhasEmendas
              ? html` <sl-menu-item>Editar</sl-menu-item>
                  <sl-menu-item>Excluir</sl-menu-item>
                  <sl-menu-item>Encaminhar</sl-menu-item>
                  <sl-divider></sl-divider>`
              : ''}
            <sl-menu-item disabled>Nova emenda</sl-menu-item>
            <sl-menu-item @click=${() => this._criarEmenda('padrao')}
              >Padrão</sl-menu-item
            >
            <sl-menu-item @click=${() => this._criarEmenda('ondeCouber')}
              >Onde couber</sl-menu-item
            >
            <sl-menu-item @click=${() => this._criarEmenda('substitutivo')}
              >Substitutivo</sl-menu-item
            >
            <sl-divider></sl-divider>
            <sl-menu-item>Quadro de emendas</sl-menu-item>
          </sl-menu>
        </sl-dropdown>
      `;
    }
  }
}
