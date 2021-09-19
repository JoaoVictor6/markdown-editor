/* eslint-disable react/no-children-prop */
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm';
import oembed from '@agentofuser/remark-oembed';
import {
  Container, InputContainer, InputText, MarkdownContainer,
} from './style';

export default function Ide(): JSX.Element {
  const [textInput, setTextInput] = useState('');
  return (
    <Container>
      <InputContainer>
        <InputText onChange={(e) => setTextInput(e.target.value)} />
      </InputContainer>
      <MarkdownContainer>
        <ReactMarkdown
          children={textInput}
          plugins={[remarkGemoji, remarkGfm, oembed]}
        />
      </MarkdownContainer>
    </Container>
  );
}
