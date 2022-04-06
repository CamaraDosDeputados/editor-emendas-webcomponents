import { css } from 'lit';

export const dashboardEmendasCSS = css`
  .d-md-none {
    display: none !important;
  }
  .d-none {
    display: none !important;
  }
  .d-md-block {
    display: block !important;
  }
  .nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  .nav-link {
    display: block;
    padding: 0.5rem 1rem;
    color: #0d6efd;
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .nav-link {
      transition: none;
    }
  }
  .nav-link:hover,
  .nav-link:focus {
    color: #0a58ca;
  }
  .nav-link.disabled {
    color: #6c757d;
    pointer-events: none;
    cursor: default;
  }
  .nav-tabs {
    border-bottom: var(--bs-eta-border-width) solid #dee2e6;
  }
  .nav-tabs .nav-link {
    margin-bottom: calc(var(--bs-eta-border-width) * -1);
    background: none;
    border: var(--bs-eta-border-width) solid transparent;
    border-top-left-radius: var(--bs-eta-border-radius);
    border-top-right-radius: var(--bs-eta-border-radius);
  }
  .nav-tabs .nav-link:hover,
  .nav-tabs .nav-link:focus {
    isolation: isolate;
    border-color: #e9ecef #e9ecef #dee2e6;
  }
  .nav-tabs .nav-link.disabled {
    color: #6c757d;
    background-color: transparent;
    border-color: transparent;
  }
  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
  }
  .nav-justified > .nav-link,
  .nav-justified .nav-item {
    flex-basis: 0;
    flex-grow: 1;
    text-align: center;
  }
  .nav-fill .nav-item .nav-link,
  .nav-justified .nav-item .nav-link {
    width: 100%;
  }
  .tab-content > .tab-pane {
    display: none;
  }
  .tab-content > .active {
    display: block;
  }
  ul {
    padding-left: 2rem;
  }
  button {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  button {
    border-radius: 0;
  }
  button:focus:not(:focus-visible) {
    outline: 0;
  }
  button {
    text-transform: none;
  }
  button,
  [type='button'] {
    -webkit-appearance: button;
  }
  button:not(:disabled),
  [type='button']:not(:disabled) {
    cursor: pointer;
  }
  .fade {
    transition: opacity 0.15s linear;
  }
  @media (prefers-reduced-motion: reduce) {
    fade {
      transition: none;
    }
  }
  fade:not(.show) {
    opacity: 0;
  }
  .row > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-eta-gutter-x) * 0.5);
    padding-left: calc(var(--bs-eta-gutter-x) * 0.5);
    margin-top: var(--bs-eta-gutter-y);
  }
  .col-lg-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .offset-lg-2 {
    margin-left: 16.66666667%;
  }
  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .badge {
    --bs-eta-badge-padding-x: 0.65em;
    --bs-eta-badge-padding-y: 0.35em;
    --bs-eta-badge-font-size: 0.75em;
    --bs-eta-badge-font-weight: 700;
    --bs-eta-badge-color: #fff;
    --bs-eta-badge-border-radius: var(--bs-eta-border-radius);
    display: inline-block;
    padding: var(--bs-eta-badge-padding-y) var(--bs-eta-badge-padding-x);
    font-size: var(--bs-eta-badge-font-size);
    font-weight: var(--bs-eta-badge-font-weight);
    line-height: 1;
    color: var(--bs-eta-badge-color);
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: var(--bs-eta-badge-border-radius, 0);
  }
  .badge:empty {
    display: none;
  }
  .bg-primary {
    --bs-eta-bg-opacity: 1;
    --bs-eta-primary-rgb: 13, 110, 253;
    background-color: rgba(
      var(--bs-eta-primary-rgb),
      var(--bs-eta-bg-opacity)
    ) !important;
  }
  .bg-secondary {
    --bs-eta-bg-opacity: 1;
    --bs-eta-secondary-rgb: 108, 117, 125;
    background-color: rgba(
      var(--bs-eta-secondary-rgb),
      var(--bs-eta-bg-opacity)
    ) !important;
  }
  h5 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    color: var(--bs-eta-heading-color);
    font-size: 1.25rem;
  }
  .container {
    --bs-eta-gutter-x: 1.5rem;
    --bs-eta-gutter-y: 0;
    width: 100%;
    padding-right: calc(var(--bs-eta-gutter-x) * 0.5);
    padding-left: calc(var(--bs-eta-gutter-x) * 0.5);
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }
  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }
  @media (min-width: 1400px) {
    .container {
      max-width: 1320px;
    }
  }
`;
