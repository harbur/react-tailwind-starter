// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import MenuLayout from 'ui/layouts/MenuLayout';
import Movies from '.';
import CreateMovie from './CreateMovie';
import { EditMovie } from './EditMovie';
import ListMovies from './ListMovies';
import { ViewMovie } from './ViewMovie';

export default {
  title: 'Pages/Movies',
  component: Movies,
  argTypes: {
  },
} as Meta;

export const Create: Story = (args) => <MenuLayout><CreateMovie {...args} /></MenuLayout>;
Create.args = {
};

export const Edit: Story = (args) => <MenuLayout><EditMovie id={1} {...args} /></MenuLayout>;
Edit.args = {
  id: 1,
};

export const List: Story = (args) => <MenuLayout><ListMovies {...args} /></MenuLayout>;
List.args = {
};


export const View: Story = (args) => <MenuLayout><ViewMovie id={1} {...args} /></MenuLayout>;
View.args = {
  id: 1,
};
