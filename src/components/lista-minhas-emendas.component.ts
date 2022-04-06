import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { listaMinhasEmendasCSS } from '../assets/css/components/lista-minhas-emendas.css';
import './card-minhas-emendas.component.ts';

@customElement('lista-minhas-emendas')
export class ListaMinhasEmendas extends LitElement {
  static styles = listaMinhasEmendasCSS;

  render(): TemplateResult {
    {
      return html`
        <div class="card-dashboard">
          <div class="card-dashboard-body">
            <div class="list-group">
              <card-minhas-emendas></card-minhas-emendas>
            </div>
          </div>
        </div>
      `;
    }
  }
}
