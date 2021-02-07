// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import TopMenuLayout from 'ui/layouts/TopMenuLayout';
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

export const Create: Story = (args) => <TopMenuLayout><CreateMovie {...args} /></TopMenuLayout>;
Create.args = {
};

export const Edit: Story = (args) => <TopMenuLayout><EditMovie id={1} {...args} /></TopMenuLayout>;
Edit.args = {
  id: 1,
};

export const List: Story = (args) => <TopMenuLayout><ListMovies {...args} /></TopMenuLayout>;
List.args = {
};


export const View: Story = (args) => <TopMenuLayout><ViewMovie id={1} {...args} /></TopMenuLayout>;
View.args = {
  id: 1,
};
