import React from "react";
import styled from "styled-components";

export const ChatBot = () => {
  return (
    <Wrapper>
      <TitleBox>
        <div>챗봇</div>
        <button>X</button>
      </TitleBox>
      <ContextBody></ContextBody>
      <InputBox>
        <input textholder="챗봇에게 궁금한 점을 물어보세요!"></input>
        <button>보내기</button>
      </InputBox>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 300px;
  height: 500px;
`;

const TitleBox = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContextBody = styled.div`
  width: 100%;
  height: 80%;
`;

const InputBox = styled.div`
  width: 100%;
  height: 10%;
  justify-content: space-between;
`;
