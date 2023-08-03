import { Divider, Stack } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

type Props = {
  englishCallback: () => void;
  frenchCallback: () => void;
};

const COLOR = 'rgba(255, 255,255, 0.7)';

const LanguageButton = styled.button`
  color: ${COLOR};
`;

function TranslationPair({ englishCallback, frenchCallback }: Props) {
  return (
    <Stack
      spacing={1}
      divider={
        <Divider
          orientation="vertical"
          flexItem
          variant="inset"
          style={{ borderColor: COLOR }}
        />
      }
      direction="row"
    >
      <LanguageButton onClick={englishCallback}>EN</LanguageButton>
      <LanguageButton onClick={frenchCallback}>FR</LanguageButton>
    </Stack>
  );
}

export default TranslationPair;
