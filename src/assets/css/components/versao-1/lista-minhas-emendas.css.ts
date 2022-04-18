import { css } from 'lit';

export const listaMinhasEmendasCSS = css`
  .card-dashboard {
    /* border: 1px solid red; */
    background: #ffffff;
    box-shadow: 0px -6px 20px rgba(255, 255, 255, 0.6),
      0px 5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    margin: 10px 0px;
    width: 100%;
    border: 1px solid #d7d7d7;
    text-decoration: none;
    color: black;
    display: block;
    cursor: pointer;
  }
  .card-dashboard--ativo {
    background: #e5e5e5;
  }
  .card-dashboard-body {
    padding: 16px;
  }
  .list-group {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: var(--bs-eta-border-radius);
  }
`;
