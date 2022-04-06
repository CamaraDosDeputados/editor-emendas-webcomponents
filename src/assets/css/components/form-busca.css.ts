import { css } from 'lit';

export const formBuscaCSS = css`
  .mt-3 {
    margin-top: 1rem !important;
  }
  .mt-md-5 {
    margin-top: 3rem !important;
  }
  .mb-3 {
    margin-bottom: 1rem !important;
  }
  .mb-md-5 {
    margin-bottom: 3rem !important;
  }
  .was-validated .form-control:valid,
  .form-control.is-valid {
    border-color: #198754;
    padding-right: calc(1.5em + 0.75rem);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }
  .was-validated .form-control:valid:focus,
  .form-control.is-valid:focus {
    border-color: #198754;
    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
  }
  .was-validated .form-control:invalid,
  .form-control.is-invalid {
    border-color: #dc3545;
    padding-right: calc(1.5em + 0.75rem);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }
  .was-validated .form-control:invalid:focus,
  .form-control.is-invalid:focus {
    border-color: #dc3545;
    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
  }
  .form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.375rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .form-control {
      transition: none;
    }
  }
  .form-control:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  .form-control::-moz-placeholder {
    color: #6c757d;
    opacity: 1;
  }
  .form-control::placeholder {
    color: #6c757d;
    opacity: 1;
  }
  .form-control:disabled,
  .form-control[readonly] {
    background-color: #e9ecef;
    opacity: 1;
  }
  input,
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
type=button] {
    -webkit-appearance: button;
  }
  button:not(:disabled),
  [type='button']:not(:disabled) {
    cursor: pointer;
  }
  .btn {
    --bs-eta-btn-padding-x: 0.75rem;
    --bs-eta-btn-padding-y: 0.375rem;
    --bs-eta-btn-font-family: ;
    --bs-eta-btn-font-size: 1rem;
    --bs-eta-btn-font-weight: 400;
    --bs-eta-btn-line-height: 1.5;
    --bs-eta-btn-color: #212529;
    --bs-eta-btn-bg: transparent;
    --bs-eta-btn-border-width: 1px;
    --bs-eta-btn-border-color: transparent;
    --bs-eta-btn-border-radius: 0.375rem;
    --bs-eta-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
      0 1px 1px rgba(0, 0, 0, 0.075);
    --bs-eta-btn-disabled-opacity: 0.65;
    --bs-eta-btn-focus-box-shadow: 0 0 0 0.25rem
      rgba(var(--bs-eta-btn-focus-shadow-rgb), 0.5);
    display: inline-block;
    padding: var(--bs-eta-btn-padding-y) var(--bs-eta-btn-padding-x);
    font-family: var(--bs-eta-btn-font-family);
    font-size: var(--bs-eta-btn-font-size);
    font-weight: var(--bs-eta-btn-font-weight);
    line-height: var(--bs-eta-btn-line-height);
    color: var(--bs-eta-btn-color);
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    border: var(--bs-eta-btn-border-width) solid var(--bs-eta-btn-border-color);
    border-radius: var(--bs-eta-btn-border-radius);
    background-color: var(--bs-eta-btn-bg);
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .btn {
      transition: none;
    }
  }
  .btn:hover {
    color: var(--bs-eta-btn-hover-color);
    background-color: var(--bs-eta-btn-hover-bg);
    border-color: var(--bs-eta-btn-hover-border-color);
  }
  .btn:disabled,
  .btn.disabled,
  fieldset:disabled .btn {
    color: var(--bs-eta-btn-disabled-color);
    pointer-events: none;
    background-color: var(--bs-eta-btn-disabled-bg);
    border-color: var(--bs-eta-btn-disabled-border-color);
    opacity: var(--bs-eta-btn-disabled-opacity);
  }
  .btn-primary {
    --bs-eta-btn-color: #fff;
    --bs-eta-btn-bg: #0d6efd;
    --bs-eta-btn-border-color: #0d6efd;
    --bs-eta-btn-hover-color: #fff;
    --bs-eta-btn-hover-bg: #0b5ed7;
    --bs-eta-btn-hover-border-color: #0a58ca;
    --bs-eta-btn-focus-shadow-rgb: 49, 132, 253;
    --bs-eta-btn-active-color: #fff;
    --bs-eta-btn-active-bg: #0a58ca;
    --bs-eta-btn-active-border-color: #0a53be;
    --bs-eta-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-eta-btn-disabled-color: #fff;
    --bs-eta-btn-disabled-bg: #0d6efd;
    --bs-eta-btn-disabled-border-color: #0d6efd;
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
  .eta-search-input {
    border-radius: 0;
    border: 0;
    margin-right: 4px;
    padding: 0.375rem 0 0.375rem 16px;
  }

  .eta-search-input:nth-child(1) {
    border-radius: 20px 0px 0px 20px;
  }

  .eta-search-button {
    border-radius: 0px 20px 20px 0px;
    background-color: var(--etl-green);
  }
`;
