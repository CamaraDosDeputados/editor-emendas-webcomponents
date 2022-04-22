import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { cardCSS } from '../../assets/css/components/v2/card.css';
import './card-menu.component.ts';

@customElement('card-minhas-emendas')
export class CardMinhasEmendas extends LitElement {
  static styles = cardCSS;

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
              <card-menu minhasEmendas="true"></card-menu>
            </div>
          </div>
          <span class="list-group-item-subtitle">MPV 1028/2022</span>
          <span class="list-group-item-data">14/03/2021</span>
          <div class="list-group-item-text">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat.
          </div>
        </a>
      `;
    }
  }
}
