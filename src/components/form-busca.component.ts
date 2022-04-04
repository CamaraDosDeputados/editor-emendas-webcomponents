import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { dashboardStyles } from '../assets/css/components/dashboard.css';

@customElement('form-busca')
export class FormBusca extends LitElement {
  static styles = dashboardStyles;

  @property({ type: String })
  sigla = 'MPV';
  @property({ type: Number })
  numero = 930;
  @property({ type: Number })
  ano = 2020;

  render() {
    return html`
      <div class="container">
        <form class="was-validated eta-search-form mt-3 mt-md-5 mb-3 mb-md-5">
          <input
            type="search"
            class="form-control eta-search-input"
            placeholder="Sigla"
            aria-label="Sigla"
            .value=${this.sigla}
            required="required"
          />
          <input
            type="number"
            class="form-control eta-search-input"
            placeholder="Número"
            aria-label="Número"
            .valueAsNumber=${this.numero}
          />
          <input
            type="number"
            class="form-control eta-search-input"
            placeholder="Ano"
            aria-label="Ano"
            required="required"
            .valueAsNumber=${this.ano}
          />
          <button
            type="button"
            :disabled="isDisabled"
            @click="emitirEventoCardClick"
            class="btn btn-primary eta-search-button"
          >
            Pesquisar
          </button>
        </form>
      </div>
    `;
  }
}
