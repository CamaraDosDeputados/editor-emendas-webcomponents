import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { dashboardEmendasCSS } from '../assets/css/components/dashboard-emendas.css';
import './form-busca.component.ts';
import './lista-minhas-emendas.component.ts';

@customElement('dashboard-emendas')
export class DashboardEmendas extends LitElement {
  static styles = dashboardEmendasCSS;

  render(): TemplateResult {
    {
      return html`
        <div class="container">
          <form-busca></form-busca>
          <div class="d-md-none">
            <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="minhas-emendas-tab" data-bs-toggle="tab" data-bs-target="#minhasEmendas" type="button" role="tab" aria-controls="home" aria-selected="true">
                    Minhas emendas 
                    <!-- <span class="badge bg-secondary">5</span></button> -->
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="medidas-provisorias-tab" data-bs-toggle="tab" data-bs-target="#medidasProvisorias" type="button" role="tab" aria-controls="profile" aria-selected="false">
                    Medidas provisórias recentes 
                    <!-- <span class="badge bg-secondary">18</span></button> -->
              </li>
            </ul>
            <div class="tab-content" id="tabContent">
              <div class="tab-pane fade show active" id="minhasEmendas" role="tabpanel" aria-labelledby="minhas-emendas-tab">
                <lista-minhas-emendas minhasEmendas="true"></lista-minhas-emendas>
              </div>
              <div class="tab-pane fade" id="medidasProvisorias" role="tabpanel" aria-labelledby="medidas-provisorias-tab">
                <lista-minhas-emendas></lista-minhas-emendas>
              </div>
            </div>
          </div>

          <div class="d-none d-md-block">
            <div class="row">
              <div class="col-lg-4 offset-lg-2 col-md-6">

                <lista-minhas-emendas minhasEmendas="true"><h5>Minhas emendas <span class="badge bg-primary">5</span></h5></lista-minhas-emendas>
              
              </div>
              <div class="col-lg-4 col-md-6">

                <lista-minhas-emendas><h5>Medidas provisórias recentes <span class="badge bg-primary">18</span></h5></lista-minhas-emendas>

              </div>
            </div>
          </div>
        </div>
      `;
    }
  }
}
