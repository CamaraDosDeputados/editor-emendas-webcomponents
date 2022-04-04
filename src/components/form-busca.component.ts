import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('form-busca')
export class FormBusca extends LitElement {
  @property({ type: String })
  sigla = 'MPV';
  @property({ type: Number })
  numero = 930;
  @property({ type: Number })
  ano = 2020;

  createRenderRoot(): LitElement {
    return this;
  }

  render(): TemplateResult {
    {
      return html`
        <style>
          .bs-eta {
            overflow: hidden;
          }
          .eta-search-form {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0px;
            background: #ffffff;
            border: 1px solid #d2d2d2;
            box-shadow: 0px -10px 20px rgba(255, 255, 255, 0.7),
              0px 10px 20px rgba(0, 0, 0, 0.05);
            border-radius: 20px;
            max-width: var(--eta-sm);
            margin: 0 auto;
          }

          .bs-eta .eta-search-input {
            border-radius: 0;
            border: 0;
            margin-right: 4px;
            padding: 0.375rem 0 0.375rem 16px;
          }

          .bs-eta .eta-search-input:nth-child(1) {
            border-radius: 20px 0px 0px 20px;
          }

          .bs-eta .eta-search-button {
            border-radius: 0px 20px 20px 0px;
            background-color: var(--etl-green);
          }
        </style>
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
