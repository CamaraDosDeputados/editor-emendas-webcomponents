import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { formBuscaCSS } from '../../assets/css/components/v2/form-busca.css';

@customElement('form-busca')
export class FormBusca extends LitElement {
  static styles = formBuscaCSS;

  @property({ type: String })
  sigla = 'MPV';
  @property({ type: String })
  numero = null;
  @property({ type: String })
  ano = '2022';

  render(): TemplateResult {
    {
      return html`
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
            type="search"
            class="form-control eta-search-input"
            placeholder="Número"
            aria-label="Número"
            .value=${this.numero}
          />
          <input
            type="search"
            class="form-control eta-search-input"
            placeholder="Ano"
            aria-label="Ano"
            required="required"
            .value=${this.ano}
          />
          <button
            type="button"
            :disabled="isDisabled"
            @click="buscar"
            class="btn btn-primary eta-search-button"
          >
            Pesquisar
          </button>
        </form>
      `;
    }
  }
}
