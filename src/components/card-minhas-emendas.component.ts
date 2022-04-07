import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { cardMinhasEmendasCSS } from '../assets/css/components/card-minhas-emendas.css';
import './menu-minhas-emendas.component.ts';

@customElement('card-minhas-emendas')
export class CardMinhasEmendas extends LitElement {
  static styles = cardMinhasEmendasCSS;

  render(): TemplateResult {
    {
      return html`
        <a
          href="#"
          class="list-group-item list-group-item-action h-100"
          aria-current="true"
        >
          <div class="d-flex w-100 justify-content-between">
            <h6 class="list-group-item-title">Título da emenda longa 01</h6>
            <div>
              <!-- <menu-minhas-emendas></menu-minhas-emendas> -->
            </div>
          </div>
          <span class="list-group-item-subtitle">MPV 1028/2022</span>
          <span class="list-group-item-data">14/03/2021</span>
        </a>
      `;
    }
  }
}
