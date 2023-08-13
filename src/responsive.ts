import { css } from 'styled-components';

export const fourHundred = style => {
  return css`
    @media screen and (min-width: 400px) {
      ${style};
    }
  `;
}

export const sixHundred = style => {
  return css`
    @media screen and (min-width: 600px) {
      ${style};
    }
  `;
}

export const sixHundredFiftyFive = style => {
  return css`
    @media screen and (min-width: 655px) {
      ${style};
    }
  `;
}

export const sixHundredFifty = style => {
  return css`
    @media screen and (min-width: 650px) {
      ${style};
    }
  `;
}

export const sevenHundred = style => {
  return css`
    @media screen and (min-width: 700px) {
      ${style};
    }
  `;
}

export const eightHundredNinetyNine = (style: any) => {
  return css`
    @media screen and (max-width: 899px) {
      ${style};
    }
  `;
}

export const nineHundred = style => {
  return css`
    @media screen and (min-width: 900px) {
      ${style};
    }
  `;
}

export const nineHundredFifty = style => {
  return css`
    @media screen and (min-width: 950px) {
      ${style};
    }
  `;
}

export const thousandHundred = style => {
  return css`
    @media screen and (min-width: 1100px) {
      ${style};
    }
  `;
}

export const thousand = style => {
  return css`
    @media screen and (min-width: 1000px) {
      ${style};
    }
  `;
}

export const thousandTwoHundredFifty = style => {
  return css`
    @media screen and (min-width: 1250px) {
      ${style};
    }
  `;
}