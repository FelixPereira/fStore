import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--main-color);
  width: 200px;
  height: 320px;
  position: absolute;
  top: 60px;
  right: 0px;
  z-index: 2;
  border-radius: 5px;
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: solid 1px #fff;
`;

export const ItemContainer = styled.div`
  overflow-y: scroll;
  height: 85%;
  margin-bottom: 25px;

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

export const Message = styled.span`
  color: #fff;
  margin: 50px auto;
`;