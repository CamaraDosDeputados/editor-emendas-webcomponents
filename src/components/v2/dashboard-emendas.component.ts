import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { dashboardEmendasCSS } from '../../assets/css/components/v2/dashboard-emendas.css';
import './form-busca.component.ts';
import './lista-minhas-emendas.component.ts';
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace';

@customElement('dashboard-emendas')
export class DashboardEmendas extends LitElement {
  static styles = dashboardEmendasCSS;

  render(): TemplateResult {
    {
      return html`
      <div id="app" class="bs-eta">
        <div class="container">
          <form-busca></form-busca>
          <div class="d-md-none">
            <sl-tab-group>
              <sl-tab slot="nav" panel="minhas-emendas">Minhas emendas</sl-tab>
              <sl-tab slot="nav" panel="medidas-provisorias">Medidas provisórias recentes</sl-tab>
              <sl-tab-panel name="minhas-emendas">
                  <lista-minhas-emendas minhasEmendas="true"></lista-minhas-emendas>
              </sl-tab-panel>
              <sl-tab-panel name="medidas-provisorias">
                  <lista-minhas-emendas></lista-minhas-emendas>
              </sl-tab-panel>
            </sl-tab-group>
          </div>
          </div>

          <div class="d-none d-md-block">
            <div class="row">
              <div class="col-md-6 offset-md-0 col-lg-4 offset-lg-2">
                <lista-minhas-emendas minhasEmendas="true">
                  <h5>Minhas emendas <span class="badge bg-primary">5</span></h5>
                </lista-minhas-emendas>
              </div>
              <div class="col-lg-4 col-md-6">
                <lista-minhas-emendas>
                  <h5>Medidas provisórias recentes <span class="badge bg-primary">18</span></h5>
                </lista-minhas-emendas>
              </div>
            </div>
          </div>
        </div>
        </div>
      `;
    }
  }
}
