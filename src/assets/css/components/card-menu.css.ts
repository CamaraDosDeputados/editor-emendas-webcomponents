import { css } from 'lit';

export const cardMenuCSS = css`
  .dropdown {
    position: relative;
  }
  .dropdown-menu {
    --bs-eta-dropdown-min-width: 10rem;
    --bs-eta-dropdown-padding-x: 0;
    --bs-eta-dropdown-padding-y: 0.5rem;
    --bs-eta-dropdown-spacer: 0.125rem;
    --bs-eta-dropdown-font-size: 1rem;
    --bs-eta-dropdown-color: #212529;
    --bs-eta-dropdown-bg: #fff;
    --bs-eta-dropdown-border-color: rgba(0, 0, 0, 0.15);
    --bs-eta-dropdown-border-radius: var(--bs-eta-border-radius);
    --bs-eta-dropdown-border-width: var(--bs-eta-border-width);
    --bs-eta-dropdown-inner-border-radius: calc(
      var(--bs-eta-border-radius) - (var(--bs-eta-border-width))
    );
    --bs-eta-dropdown-divider-bg: rgba(0, 0, 0, 0.15);
    --bs-eta-dropdown-divider-margin-y: 0.5rem;
    --bs-eta-dropdown-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    --bs-eta-dropdown-link-color: #212529;
    --bs-eta-dropdown-link-hover-color: #1e2125;
    --bs-eta-dropdown-link-hover-bg: #e9ecef;
    --bs-eta-dropdown-link-active-color: #fff;
    --bs-eta-dropdown-link-active-bg: #0d6efd;
    --bs-eta-dropdown-link-disabled-color: #adb5bd;
    --bs-eta-dropdown-item-padding-x: 1rem;
    --bs-eta-dropdown-item-padding-y: 0.25rem;
    --bs-eta-dropdown-header-color: #6c757d;
    --bs-eta-dropdown-header-padding-x: 1rem;
    --bs-eta-dropdown-header-padding-y: 0.5rem;
    position: absolute;
    z-index: 1000;
    display: none;
    min-width: var(--bs-eta-dropdown-min-width);
    padding: var(--bs-eta-dropdown-padding-y) var(--bs-eta-dropdown-padding-x);
    margin: 0;
    font-size: var(--bs-eta-dropdown-font-size);
    color: var(--bs-eta-dropdown-color);
    text-align: left;
    list-style: none;
    background-color: var(--bs-eta-dropdown-bg);
    background-clip: padding-box;
    border: var(--bs-eta-dropdown-border-width) solid
      var(--bs-eta-dropdown-border-color);
    border-radius: var(--bs-eta-dropdown-border-radius);
  }
  .dropdown-menu[data-bs-popper] {
    top: 100%;
    left: 0;
    margin-top: var(--bs-eta-dropdown-spacer);
  }
  .dropdown-menu-start {
    --bs-eta-position: start;
  }
  .dropdown-menu-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-end {
    --bs-eta-position: end;
  }
  .dropdown-menu-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
  @media (min-width: 576px) {
    .dropdown-menu-sm-start {
      --bs-eta-position: start;
    }
    .dropdown-menu-sm-start[data-bs-popper] {
      right: auto;
      left: 0;
    }
    .dropdown-menu-sm-end {
      --bs-eta-position: end;
    }
    .dropdown-menu-sm-end[data-bs-popper] {
      right: 0;
      left: auto;
    }
  }
  @media (min-width: 768px) {
    .dropdown-menu-md-start {
      --bs-eta-position: start;
    }
    .dropdown-menu-md-start[data-bs-popper] {
      right: auto;
      left: 0;
    }
    .dropdown-menu-md-end {
      --bs-eta-position: end;
    }
    .dropdown-menu-md-end[data-bs-popper] {
      right: 0;
      left: auto;
    }
  }
  @media (min-width: 992px) {
    .dropdown-menu-lg-start {
      --bs-eta-position: start;
    }
    .dropdown-menu-lg-start[data-bs-popper] {
      right: auto;
      left: 0;
    }
    .dropdown-menu-lg-end {
      --bs-eta-position: end;
    }
    .dropdown-menu-lg-end[data-bs-popper] {
      right: 0;
      left: auto;
    }
  }
  @media (min-width: 1200px) {
    .dropdown-menu-xl-start {
      --bs-eta-position: start;
    }
    .dropdown-menu-xl-start[data-bs-popper] {
      right: auto;
      left: 0;
    }
    .dropdown-menu-xl-end {
      --bs-eta-position: end;
    }
    .dropdown-menu-xl-end[data-bs-popper] {
      right: 0;
      left: auto;
    }
  }
  @media (min-width: 1400px) {
    .dropdown-menu-xxl-start {
      --bs-eta-position: start;
    }
    .dropdown-menu-xxl-start[data-bs-popper] {
      right: auto;
      left: 0;
    }
    .dropdown-menu-xxl-end {
      --bs-eta-position: end;
    }
    .dropdown-menu-xxl-end[data-bs-popper] {
      right: 0;
      left: auto;
    }
  }

  .dropdown-divider {
    height: 0;
    margin: var(--bs-eta-dropdown-divider-margin-y) 0;
    overflow: hidden;
    border-top: 1px solid var(--bs-eta-dropdown-divider-bg);
    opacity: 1;
  }
  .dropdown-item {
    display: block;
    width: 100%;
    padding: var(--bs-eta-dropdown-item-padding-y)
      var(--bs-eta-dropdown-item-padding-x);
    clear: both;
    font-weight: 400;
    color: var(--bs-eta-dropdown-link-color);
    text-align: inherit;
    text-decoration: none;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
  }
  .dropdown-item:hover,
  .dropdown-item:focus {
    color: var(--bs-eta-dropdown-link-hover-color);
    background-color: var(--bs-eta-dropdown-link-hover-bg);
  }
  .dropdown-item.active,
  .dropdown-item:active {
    color: var(--bs-eta-dropdown-link-active-color);
    text-decoration: none;
    background-color: var(--bs-eta-dropdown-link-active-bg);
  }
  .dropdown-item.disabled,
  .dropdown-item:disabled {
    color: var(--bs-eta-dropdown-link-disabled-color);
    pointer-events: none;
    background-color: transparent;
  }
  .dropdown-menu.show {
    display: block;
  }
  .dropdown-menu {
    margin-top: calc(var(--bs-eta-border-width) * -1);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .context-menu::after {
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
  a {
    --bs-eta-link-color: #0d6efd;
    color: var(--bs-eta-link-color);
    text-decoration: underline;
  }
  a:hover {
    --bs-eta-link-hover-color: #0a58ca;
    color: var(--bs-eta-link-hover-color);
  }
  a:not([href]):not([class]),
  a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none;
  }
  [role='button'] {
    cursor: pointer;
  }
  .dropdown-menu {
    position: fixed !important;
    top: auto;
    right: auto;
    background: var(--etl-light-gray);
  }
  .ps-4 {
    padding-left: 1.5rem !important;
  }
  hr {
    margin: 1rem 0;
    color: inherit;
    border: 0;
    border-top: var(--bs-eta-border-width) solid;
    opacity: 0.25;
  }
`;
