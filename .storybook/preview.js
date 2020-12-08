import React from 'react';
import { addDecorator } from '@storybook/react';
import Layout from './Layout';
import { MemoryRouter } from 'react-router-dom';

addDecorator(storyFn => <Layout>{storyFn()}</Layout>);
addDecorator(story => <MemoryRouter initialIndex="" initialEntries={['/']}>{story()}</MemoryRouter>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

