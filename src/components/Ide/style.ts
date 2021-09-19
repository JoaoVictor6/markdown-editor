import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 16px;
  flex: 1;
  height: 100%;
  & > * {
    flex: 1;
  }
  & > div {
    border: none;
    font-size: 16px;
    padding: 24px 16px;
    min-height: 480px;
    margin-bottom: 32px;

    h1, h2, h3 {
      font-family: 'Roboto';
      font-weight: 400;
      & > * {
        font-family: 'Roboto';
      }
    }
    h1 {
      margin-bottom: 24px;
    }
    h2 {
      margin-bottom: 20px;
    }
    h3 {
      margin-bottom: 16px;
    }

    p {
      font-size: 16px;
      margin-bottom: 16px;
    }

    a {
      color: #1F6D99;
      line-height: 150%;
      font-weight: 600;
      transition: color .2s;

      &:hover {
        color: #175070;
      }
    }

    ul {
      padding-left: 24px;
      margin-bottom: 16px;
    }
  }
`;

export const InputContainer = styled.div`
  background: rgba(255,255,255, 0.17);
  font-size: 16px;
  padding: 18px 16px;
  outline: none;
`;

export const MarkdownContainer = styled.div`
  background: rgba(255,255,255, 0.02);
  word-wrap: anywhere;

`;

export const InputText = styled.textarea`
  background: transparent;
  border: none;
  font-size: 16px;
  outline: none;
  width: 100%;
  height: 100%;
  resize: none;
`;
