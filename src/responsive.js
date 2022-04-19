import { css } from 'styled-components';

export const mobile = style => {
  return css`
    @media screen and (max-width: 600px) {
      ${style};
    }
  `;
}