import styled from 'styled-components';

export const Container = styled.div`
  height: 40%;
`;

export const Title = styled.h2`
  color: #fff;
  margin-bottom: 1.875rem;
  font-size: 18px;
`;

export const WhishlistItemsContainer = styled.div`
  overflow-y: scroll;
  height: 100%;

  &::-webkit-scrollbar {
    width: 12px;  /* width of the entire scrollbar */
  }
  
  &::-webkit-scrollbar-track {
    background: #fff;  /* color of the tracking area */
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: var(--main-color);    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid #fff;  /* creates padding around scroll thumb */
  }
`;
