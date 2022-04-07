import { css } from 'lit';

export const cardMedidaProvisoriaCSS = css`
  .prazo-aberto {
    background: var(--bs-eta-gray-200);
  }
  .prazo-aberto .list-group-item-title::after {
    display: inline-block;
    content: '';
    vertical-align: -0.125em;
    background-image: var(--eta-icon-alarm);
    background-repeat: no-repeat;
    background-size: 1rem 1rem;
    margin: 0 6px;
    width: 16px;
    height: 16px;
  }

  .prazo-aberto .list-group-item-data {
    color: var(--bs-eta-gray-600);
  }
`;
