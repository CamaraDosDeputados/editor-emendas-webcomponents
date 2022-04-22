import { css } from 'lit';

export const cardEmendaCSS = css`
  .card-emenda::part(body) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  sl-avatar {
    --size: 6rem;
    margin: 0 12px 0 0;
  }
`;
