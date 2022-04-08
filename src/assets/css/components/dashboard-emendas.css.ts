import { css } from 'lit';

export const dashboardEmendasCSS = css`
  :host {
    --etl-blue: #5e98f6;
    --etl-green: #598b4f;
    --etl-dark: black;
    --etl-light: #d7d7d7;
    --etl-light-gray: #f8f9fa;
    --etl-white: #fff;
    --etl-green-light: #e0ecdc;
    --eta-xs: 0;
    --eta-sm: 576px;
    --eta-md: 768px;
    --eta-lg: 992px;
    --eta-xl: 1200px;
    --eta-xxl: 1400px;
    --eta-icon-alarm: url("data:image/svg+xml,<svg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'><path d='M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z'/><path d='M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z'/></svg>");
    --eta-icon-dots-vertical: url("data:image/svg+xml,<svg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'><path d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z'/></svg>");
    --bs-eta-blue: #0d6efd;
    --bs-eta-indigo: #6610f2;
    --bs-eta-purple: #6f42c1;
    --bs-eta-pink: #d63384;
    --bs-eta-red: #dc3545;
    --bs-eta-orange: #fd7e14;
    --bs-eta-yellow: #ffc107;
    --bs-eta-green: #198754;
    --bs-eta-teal: #20c997;
    --bs-eta-cyan: #0dcaf0;
    --bs-eta-white: #fff;
    --bs-eta-gray: #6c757d;
    --bs-eta-gray-dark: #343a40;
    --bs-eta-gray-100: #f8f9fa;
    --bs-eta-gray-200: #e9ecef;
    --bs-eta-gray-300: #dee2e6;
    --bs-eta-gray-400: #ced4da;
    --bs-eta-gray-500: #adb5bd;
    --bs-eta-gray-600: #6c757d;
    --bs-eta-gray-700: #495057;
    --bs-eta-gray-800: #343a40;
    --bs-eta-gray-900: #212529;
    --bs-eta-primary: #0d6efd;
    --bs-eta-secondary: #6c757d;
    --bs-eta-success: #198754;
    --bs-eta-info: #0dcaf0;
    --bs-eta-warning: #ffc107;
    --bs-eta-danger: #dc3545;
    --bs-eta-light: #f8f9fa;
    --bs-eta-dark: #212529;
    --bs-eta-primary-rgb: 13, 110, 253;
    --bs-eta-secondary-rgb: 108, 117, 125;
    --bs-eta-success-rgb: 25, 135, 84;
    --bs-eta-info-rgb: 13, 202, 240;
    --bs-eta-warning-rgb: 255, 193, 7;
    --bs-eta-danger-rgb: 220, 53, 69;
    --bs-eta-light-rgb: 248, 249, 250;
    --bs-eta-dark-rgb: 33, 37, 41;
    --bs-eta-white-rgb: 255, 255, 255;
    --bs-eta-black-rgb: 0, 0, 0;
    --bs-eta-body-color-rgb: 33, 37, 41;
    --bs-eta-body-bg-rgb: 255, 255, 255;
    --bs-eta-font-sans-serif: system-ui, -apple-system, 'Segoe UI', Roboto,
      'Helvetica Neue', 'Noto Sans', 'Liberation Sans', Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
    --bs-eta-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
      'Liberation Mono', 'Courier New', monospace;
    --bs-eta-gradient: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0)
    );
    --bs-eta-body-font-family: var(--bs-eta-font-sans-serif);
    --bs-eta-body-font-size: 1rem;
    --bs-eta-body-font-weight: 400;
    --bs-eta-body-line-height: 1.5;
    --bs-eta-body-color: #212529;
    --bs-eta-body-bg: #fff;
    --bs-eta-border-width: 1px;
    --bs-eta-border-style: solid;
    --bs-eta-border-color: rgba(0, 0, 0, 0.15);
    --bs-eta-border-radius: 0.375rem;
    --bs-eta-border-opacity: 1;
    --bs-eta-border-radius: 0.375rem;
    --bs-eta-border-radius-sm: 0.25rem;
    --bs-eta-border-radius-lg: 0.5rem;
    --bs-eta-border-radius-xl: 1rem;
    --bs-eta-border-radius-2xl: 2rem;
    --bs-eta-border-radius-pill: 50rem;
    --bs-eta-heading-color: ;
    --bs-eta-link-color: #0d6efd;
    --bs-eta-link-hover-color: #0a58ca;
    --bs-eta-code-color: #d63384;
    --bs-eta-highlight-bg: #fff3cd;
  }
  .bs-eta *,
  .bs-eta *::before,
  .bs-eta *::after {
    box-sizing: border-box;
  }
  @media (prefers-reduced-motion: no-preference) {
    .bs-eta :root {
      scroll-behavior: smooth;
    }
  }
  .bs-eta ol,
  .bs-eta ul {
    padding-left: 2rem;
  }
  .bs-eta ol,
  .bs-eta ul,
  .bs-eta dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  .bs-eta ol ol,
  .bs-eta ul ul,
  .bs-eta ol ul,
  .bs-eta ul ol {
    margin-bottom: 0;
  }
  .bs-eta button {
    border-radius: 0;
  }
  .bs-eta button:focus:not(:focus-visible) {
    outline: 0;
  }
  .bs-eta input,
  .bs-eta button,
  .bs-eta select,
  .bs-eta optgroup,
  .bs-eta textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  .bs-eta button,
  .bs-eta select {
    text-transform: none;
  }
  .bs-eta [role='button'] {
    cursor: pointer;
  }
  .bs-eta button,
  .bs-eta [type='button'],
  .bs-eta [type='reset'],
  .bs-eta [type='submit'] {
    -webkit-appearance: button;
  }
  .bs-eta button:not(:disabled),
  .bs-eta [type='button']:not(:disabled),
  .bs-eta [type='reset']:not(:disabled),
  .bs-eta [type='submit']:not(:disabled) {
    cursor: pointer;
  }
  .bs-eta h5,
  .bs-eta .h5 {
    font-size: 1.25rem;
  }
  .bs-eta h5,
  .bs-eta h6 {
    margin-bottom: 0;
  }
  .bs-eta .container,
  .bs-eta .container-fluid,
  .bs-eta .container-xxl,
  .bs-eta .container-xl,
  .bs-eta .container-lg,
  .bs-eta .container-md,
  .bs-eta .container-sm {
    --bs-eta-gutter-x: 1.5rem;
    --bs-eta-gutter-y: 0;
    width: 100%;
    padding-right: calc(var(--bs-eta-gutter-x) * 0.5);
    padding-left: calc(var(--bs-eta-gutter-x) * 0.5);
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 576px) {
    .bs-eta .container-sm,
    .bs-eta .container {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    .bs-eta .container-md,
    .bs-eta .container-sm,
    .bs-eta .container {
      max-width: 720px;
    }
  }
  @media (min-width: 992px) {
    .bs-eta .container-lg,
    .bs-eta .container-md,
    .bs-eta .container-sm,
    .bs-eta .container {
      max-width: 960px;
    }
  }
  @media (min-width: 1200px) {
    .bs-eta .container-xl,
    .bs-eta .container-lg,
    .bs-eta .container-md,
    .bs-eta .container-sm,
    .bs-eta .container {
      max-width: 1140px;
    }
  }
  @media (min-width: 1400px) {
    .bs-eta .container-xxl,
    .bs-eta .container-xl,
    .bs-eta .container-lg,
    .bs-eta .container-md,
    .bs-eta .container-sm,
    .bs-eta .container {
      max-width: 1320px;
    }
  }
  .bs-eta .row {
    --bs-eta-gutter-x: 1.5rem;
    --bs-eta-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-eta-gutter-y));
    margin-right: calc(-0.5 * var(--bs-eta-gutter-x));
    margin-left: calc(-0.5 * var(--bs-eta-gutter-x));
  }
  .bs-eta .row > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-eta-gutter-x) * 0.5);
    padding-left: calc(var(--bs-eta-gutter-x) * 0.5);
    margin-top: var(--bs-eta-gutter-y);
  }
  .bs-eta .d-none {
    display: none !important;
  }
  @media (min-width: 992px) {
    .bs-eta .col-lg-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }
    .bs-eta .offset-lg-2 {
      margin-left: 16.66666667%;
    }
  }
  @media (min-width: 768px) {
    .bs-eta .col-md-6 {
      flex: 0 0 auto;
      width: 41%;
    }
    .bs-eta .d-md-none {
      display: none !important;
    }
    .bs-eta .d-md-block {
      display: block !important;
    }
  }

  .bs-eta .nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  .bs-eta .nav-link {
    display: block;
    padding: 0.5rem 1rem;
    color: #0d6efd;
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .bs-eta .nav-link {
      transition: none;
    }
  }
  .bs-eta .nav-link:hover,
  .bs-eta .nav-link:focus {
    color: #0a58ca;
  }
  .bs-eta .nav-link.disabled {
    color: #6c757d;
    pointer-events: none;
    cursor: default;
  }
  .bs-eta .nav-tabs {
    border-bottom: var(--bs-eta-border-width) solid #dee2e6;
  }
  .bs-eta .nav-tabs .nav-link {
    margin-bottom: calc(var(--bs-eta-border-width) * -1);
    background: none;
    border: var(--bs-eta-border-width) solid transparent;
    border-top-left-radius: var(--bs-eta-border-radius);
    border-top-right-radius: var(--bs-eta-border-radius);
  }
  .bs-eta .nav-tabs .nav-link:hover,
  .bs-eta .nav-tabs .nav-link:focus {
    isolation: isolate;
    border-color: #e9ecef #e9ecef #dee2e6;
  }
  .bs-eta .nav-tabs .nav-link.disabled {
    color: #6c757d;
    background-color: transparent;
    border-color: transparent;
  }
  .bs-eta .nav-tabs .nav-link.active,
  .bs-eta .nav-tabs .nav-item.show .nav-link {
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
  }
  .bs-eta .nav-tabs .dropdown-menu {
    margin-top: calc(var(--bs-eta-border-width) * -1);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .bs-eta .nav-pills .nav-link {
    background: none;
    border: 0;
    border-radius: var(--bs-eta-border-radius);
  }
  .bs-eta .nav-pills .nav-link.active,
  .bs-eta .nav-pills .show > .nav-link {
    color: #fff;
    background-color: #0d6efd;
  }
  .bs-eta .nav-fill > .nav-link,
  .bs-eta .nav-fill .nav-item {
    flex: 1 1 auto;
    text-align: center;
  }
  .bs-eta .nav-justified > .nav-link,
  .bs-eta .nav-justified .nav-item {
    flex-basis: 0;
    flex-grow: 1;
    text-align: center;
  }
  .bs-eta .nav-fill .nav-item .nav-link,
  .bs-eta .nav-justified .nav-item .nav-link {
    width: 100%;
  }
  .bs-eta .tab-content > .tab-pane {
    display: none;
  }
  .bs-eta .tab-content > .active {
    display: block;
  }
  .bs-eta .navbar {
    --bs-eta-navbar-padding-x: 0;
    --bs-eta-navbar-padding-y: 0.5rem;
    --bs-eta-navbar-color: rgba(0, 0, 0, 0.55);
    --bs-eta-navbar-hover-color: rgba(0, 0, 0, 0.7);
    --bs-eta-navbar-disabled-color: rgba(0, 0, 0, 0.3);
    --bs-eta-navbar-active-color: rgba(0, 0, 0, 0.9);
    --bs-eta-navbar-brand-padding-y: 0.3125rem;
    --bs-eta-navbar-brand-margin-end: 1rem;
    --bs-eta-navbar-brand-font-size: 1.25rem;
    --bs-eta-navbar-brand-color: rgba(0, 0, 0, 0.9);
    --bs-eta-navbar-brand-hover-color: rgba(0, 0, 0, 0.9);
    --bs-eta-navbar-nav-link-padding-x: 0.5rem;
    --bs-eta-navbar-toggler-padding-y: 0.25rem;
    --bs-eta-navbar-toggler-padding-x: 0.75rem;
    --bs-eta-navbar-toggler-font-size: 1.25rem;
    --bs-eta-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    --bs-eta-navbar-toggler-border-color: rgba(0, 0, 0, 0.1);
    --bs-eta-navbar-toggler-border-radius: 0.375rem;
    --bs-eta-navbar-toggler-focus-width: 0.25rem;
    --bs-eta-navbar-toggler-transition: box-shadow 0.15s ease-in-out;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: var(--bs-eta-navbar-padding-y) var(--bs-eta-navbar-padding-x);
  }
  .bs-eta .fade {
    transition: opacity 0.15s linear;
  }
  @media (prefers-reduced-motion: reduce) {
    .bs-eta .fade {
      transition: none;
    }
  }
  .bs-eta .fade:not(.show) {
    opacity: 0;
  }

  .bs-eta .badge {
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
  .bs-eta .badge:empty {
    display: none;
  }
  .bs-eta .btn .badge {
    position: relative;
    top: -1px;
  }
  .bs-eta .bg-primary {
    --bs-eta-bg-opacity: 1;
    background-color: rgba(
      var(--bs-eta-primary-rgb),
      var(--bs-eta-bg-opacity)
    ) !important;
  }
`;
