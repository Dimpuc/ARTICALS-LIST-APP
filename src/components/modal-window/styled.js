import styled from "styled-components";

export const SModalWindowWr = styled.div``;

export const SModalWindowFon = styled.div`
  overflow-y: hidden;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${(props) => props.vue};
  transition: 0.5s;
  pointer-events: ${(props) => props.pointer};
  overflow-y: hidden;
`;

export const SModalWindow = styled.div`
  opacity: 1;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 400px;
  transition: 0.4s all;
  transform: scale(${(props) => props.trans});
  border-radius: 5px;
`;

export const SModalWindowTitle = styled.h3`
  font-size: 20px;
`;

export const SModalBtn = styled.button`
  width: 200px;
  margin-top: 15px;
  height: 40px;
  border-radius: 5px;
  border: none;
  font-size: 15px;
  font-weight: 550;
  cursor: pointer;
  background-color: #0d86ff;
  color: white;
`;
