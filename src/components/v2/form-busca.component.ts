import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { formBuscaCSS } from '../../assets/css/components/v2/form-busca.css';
import { Proposicao, ProposicaoService } from './proposicao.service';
import logo from '../../../src/loading.gif';

@customElement('form-busca')
export class FormBusca extends LitElement {
  static styles = formBuscaCSS;
  proposicoes: Array<Proposicao> = [];

  @property({ type: String })
  sigla = 'MPV';
  @property({ type: String })
  numero = null;
  @property({ type: Number })
  ano = '2022';
  @property({ attribute: 'url' })
  urlServicoPesquisaProposicoes?: string;

  @property({ type: Boolean }) isLoading = false;

  async _pesquisar() {
    try {
      this.isLoading = true;
      const proposicaoService = new ProposicaoService(this.urlServicoPesquisaProposicoes);
      const url = proposicaoService.pesquisarProposicoes(this.sigla, this.numero, this.ano);
      const response = await fetch(url);
      const proposicoes = await response.json();
      const shadow = this.shadowRoot;
      const childComponent = shadow.querySelector('list-emendas');
      childComponent.data = proposicoes;
      this.isLoading = false;
    } catch (error) {
      console.log(error);
    }
  }

  articleTemplate() {
    return this.isLoading ? html`<img src=${logo} alt="loading..." />` : '';
  }

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
            @input=${e => (this.sigla = e.target.value)}
          />
          <input
            type="search"
            class="form-control eta-search-input"
            placeholder="Número"
            aria-label="Número"
            .value=${this.numero}
            @input=${e => (this.numero = e.target.value)}
          />
          <input
            type="number"
            class="form-control eta-search-input"
            placeholder="Ano"
            aria-label="Ano"
            required="required"
            .value=${this.ano}
            @input=${e => (this.ano = e.target.value)}
          />
          <button
            type="button"
            ?disabled=${this.sigla && this.ano ? false : true}
            @click="buscar"
            class="btn btn-primary eta-search-button"
            @click=${this._pesquisar}
          >
            Pesquisar
          </button>
        </form>
        <br />
        ${this.isLoading ? html`<img src=${logo} alt="loading..." />` : ''}

        <list-emendas></list-emendas>
      `;
    }
  }
}
