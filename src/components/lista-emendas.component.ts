import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import './form-busca.component.ts';

@customElement('lista-emendas')
export class ListaEmendas extends LitElement {
  render(): TemplateResult {
    {
      return html`
        <div class="container">
          <form-busca></form-busca>
        </div>
      `;
    }
  }
}
