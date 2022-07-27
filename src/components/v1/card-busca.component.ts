import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace';
import searchSVG from '@https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.78/dist/assets/icons/journal-code.svg';
import { cardBuscaCSS } from '../../assets/css/components/v1/card-busca.css';
import { cardEmendaCSS } from '../../assets/css/components/v1/card-emenda.css';

@customElement('card-busca')
export class CardBusca extends LitElement {
  static styles = cardBuscaCSS;
  static stylesECSS = cardEmendaCSS;

  @property({ type: String })
  sigla = 'MPV';
  @property({ type: String })
  numero = null;
  @property({ type: String })
  ano = '2022';

  async _getEmendas(){
    try{
      const response = await
      fetch('https://emendas-api.herokuapp.com/proposicoes?sigla='+this.sigla+'&numero='+this.numero+'&ano='+this.ano+'');
      const responseBody = await response.json();
      console.log(responseBody);
      //const shadow = this.shadowRoot;
      //const childComponent = shadow!.querySelector("card-emenda");
      //childComponent!.data = responseBody.data;
    }
    catch(error){
      console.log(error);
    }
  }

  render(): TemplateResult {
    {
      return html`
        <sl-card class="card-header">
          <div slot="header">
            Pesquisa
            <sl-icon src=${searchSVG} label="pesquisar"></sl-icon>
          </div>
          <form>
            <sl-input
              type="text"
              Placeholder="Sigla"
              @input=${e => this.sigla = e.target.value} 
              value=${this.sigla}
            ></sl-input>
            <br />
            <sl-input
              type="number"
              Placeholder="Número"
              value=${this.numero}
              @input=${e => this.numero = e.target.value} 
            ></sl-input>
            <br />
            <sl-input
              type="number"
              Placeholder="Ano"
              @input=${e => this.ano = e.target.value} 
              value=${this.ano}
            ></sl-input>
            <br />
            <sl-button variant="primary" @click=${this._getEmendas}>Pesquisar</sl-button>
          </form>
        </sl-card>
        <br/>
        <list-emendas minhas-emendas="true"></list-emendas>
      `;
    }
  }
}
