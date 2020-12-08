import { addDecorator } from '@storybook/react';
import React from 'react';
import Layout from './Layout';
import { withQuery } from '@storybook/addon-queryparams';

addDecorator(storyFn => <Layout>{storyFn()}</Layout>);
// addDecorator(withQuery)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

