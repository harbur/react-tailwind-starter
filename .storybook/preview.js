import { addDecorator } from '@storybook/react';
import React from 'react';
import Layout from './Layout';

addDecorator(storyFn => <Layout>{storyFn()}</Layout>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

