import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { cardMenuCSS } from '../assets/css/components/card-menu.css';

@customElement('card-menu')
export class CardMenu extends LitElement {
  static styles = cardMenuCSS;

  @property()
  minhasEmendas?: boolean;

  showMenu(event: Event): void {
    event.target?.parentElement.nextElementSibling.classList.add('show');
  }

  hideMenu(): void {
    const nodeList = this.shadowRoot?.querySelectorAll('.dropdown-menu.show');
    nodeList?.forEach(node => {
      node.classList.remove('show');
    });
  }

  render(): TemplateResult {
    {
      return html`
        <div class="dropdown" @mouseleave="${this.hideMenu}">
          <a
            class=""
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            title="Menu de ações"
            @click=${this.showMenu}
          >
            <span class="context-menu"></span>
          </a>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            ${this.minhasEmendas
              ? html` <li><a class="dropdown-item" href="#">Editar</a></li>
                  <li><a class="dropdown-item" href="#">Excluir</a></li>
                  <li><a class="dropdown-item" href="#">Encaminhar</a></li>
                  <li><hr class="dropdown-divider" /></li>`
              : ''}
            <li>
              <a class="dropdown-item disabled" href="#">Nova emenda</a>
            </li>
            <li><a class="dropdown-item ps-4" href="#">Padrão</a></li>
            <li>
              <a class="dropdown-item ps-4" href="#">Onde couber</a>
            </li>
            <li>
              <a class="dropdown-item ps-4" href="#">Substitutivo</a>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" href="#">Quadro de emendas</a>
            </li>
          </ul>
        </div>
      `;
    }
  }
}
