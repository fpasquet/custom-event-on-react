import * as React from 'react';
import { addDecorator } from '@storybook/react';
import { ChakraProvider, theme } from '@chakra-ui/react';

addDecorator(storyFn => (
  <ChakraProvider theme={theme}>
    {storyFn()}
  </ChakraProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
}
