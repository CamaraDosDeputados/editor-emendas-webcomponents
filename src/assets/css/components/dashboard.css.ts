import { css } from 'lit';
export const dashboardStyles = css`
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
    cursor: auto;
  }

  .bs-eta .list-group {
    padding: 0px;
    overflow: hidden;
    overflow-y: auto;
    max-height: calc(100vh - 325px);
  }

  .list-group-pesquisa {
    padding: 0px;
    overflow: hidden;
    overflow-y: auto;
    max-height: calc(100vh - 250px);
  }

  .card-dashboard-body {
    padding: 16px;
  }

  .card-dashboard-title {
    /* border: 1px solid blue; */
  }

  .card-dashboard-subtitle {
  }

  .bs-eta h5,
  .bs-eta h6 {
    margin-bottom: 0;
  }

  .bs-eta .dropdown-menu {
    position: fixed !important;
    top: auto;
    right: auto;
    background: var(--etl-light-gray);
  }

  .bs-eta .list-group-item {
    background: none;
  }

  .bs-eta .prazo-aberto {
    background: var(--bs-eta-gray-200);
  }

  .list-group-item-title {
    font-weight: bold !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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

  .bs-eta .context-menu::after {
    display: inline-block;
    content: '';
    vertical-align: -0.125em;
    background-image: var(--eta-icon-dots-vertical);
    background-repeat: no-repeat;
    background-size: 1rem 1rem;
    margin: 0;
    width: 16px;
    height: 16px;
  }

  .list-group-item-subtitle {
    display: block;
    width: 100%;
  }

  .list-group-item-data {
    color: var(--bs-eta-gray-500);
  }

  .bs-eta .list-group-item-menu,
  .bs-eta .list-group-item-icon {
    width: 16px;
    height: 16px;
  }

  .list-group-item-icon {
    margin: 0 5px;
  }

  @media screen and (max-width: 768px) {
    .bs-eta .list-group {
      max-height: calc(100vh - 210px);
    }
    .bs-eta .list-group-pesquisa {
      max-height: calc(100vh - 150px);
    }
  }
`;
