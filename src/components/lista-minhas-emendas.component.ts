import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { listaMinhasEmendasCSS } from '../assets/css/components/lista-minhas-emendas.css';
import './card-minhas-emendas.component.ts';

@customElement('lista-minhas-emendas')
export class ListaMinhasEmendas extends LitElement {
  static styles = listaMinhasEmendasCSS;

  @property()
  tipoLista?: string;

  render(): TemplateResult {
    {
      return html`
        <slot></slot>
        <div class="card-dashboard">
          <div class="card-dashboard-body">
            <div class="list-group">
              <div>
                ${this.tipoLista === 'minhas-emendas'
                  ? html`
                      <card-minhas-emendas></card-minhas-emendas>
                      <card-minhas-emendas></card-minhas-emendas>
                      <card-minhas-emendas></card-minhas-emendas>
                      <card-minhas-emendas></card-minhas-emendas>
                      <card-minhas-emendas></card-minhas-emendas>
                    `
                  : html`<div></div>`}
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }
}
