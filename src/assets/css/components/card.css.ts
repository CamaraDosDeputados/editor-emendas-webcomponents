import { css } from 'lit';

export const cardCSS = css`
  .list-group-item {
    position: relative;
    display: block;
    padding: 0.5rem 1rem;
    color: #212529;
    text-decoration: none;
    background-color: #fff;
    border: var(--bs-eta-border-width) solid rgba(0, 0, 0, 0.125);
  }
  .list-group-item:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
  .list-group-item:last-child {
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  .list-group-item-action {
    width: 90%;
    color: #495057;
    text-align: inherit;
  }
  .list-group-item-action:hover,
  .list-group-item-action:focus {
    z-index: 1;
    color: #495057;
    text-decoration: none;
    background-color: #f8f9fa;
  }
  .list-group-item-action:active {
    color: #212529;
    background-color: #e9ecef;
  }
  .h-100 {
    height: 100% !important;
  }
  .d-flex {
    display: flex !important;
  }
  .w-100 {
    width: 100% !important;
  }
  .justify-content-between {
    justify-content: space-between !important;
  }
  .list-group-item-title {
    font-weight: bold !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  h6 {
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 500;
    line-height: 1.2;
    color: var(--bs-eta-heading-color);
    font-size: 1rem;
  }
  .list-group-item-subtitle {
    display: block;
    width: 100%;
  }
  .list-group-item-data {
    color: var(--bs-eta-gray-500);
  }
  a {
    color: var(--bs-eta-link-color);
    text-decoration: underline;
  }
  a:hover {
    color: var(--bs-eta-link-hover-color);
  }
  a:not([href]):not([class]),
  a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none;
  }
`;
