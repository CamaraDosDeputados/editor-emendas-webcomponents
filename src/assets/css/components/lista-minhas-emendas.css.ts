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
  // .list-group-item {
  //   position: relative;
  //   display: block;
  //   padding: 0.5rem 1rem;
  //   color: #212529;
  //   text-decoration: none;
  //   background-color: #fff;
  //   border: var(--bs-eta-border-width) solid rgba(0, 0, 0, 0.125);
  // }
  // .list-group-item:first-child {
  //   border-top-left-radius: inherit;
  //   border-top-right-radius: inherit;
  // }
  // .list-group-item:last-child {
  //   border-bottom-right-radius: inherit;
  //   border-bottom-left-radius: inherit;
  // }
  // .list-group-item-action {
  //   width: 100%;
  //   color: #495057;
  //   text-align: inherit;
  // }
  // .list-group-item-action:hover,
  // .list-group-item-action:focus {
  //   z-index: 1;
  //   color: #495057;
  //   text-decoration: none;
  //   background-color: #f8f9fa;
  // }
  // .list-group-item-action:active {
  //   color: #212529;
  //   background-color: #e9ecef;
  // }
  // .h-100 {
  //   height: 100% !important;
  // }
`;
