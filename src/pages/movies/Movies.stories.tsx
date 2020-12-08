// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
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

export const Create: Story = (args) => <CreateMovie {...args} />;
Create.args = {
};

export const Edit: Story = (args) => <EditMovie id={1} {...args} />;
Edit.args = {
  id: 1,
};

export const List: Story = (args) => <ListMovies {...args} />;
List.args = {
};


export const View: Story = (args) => <ViewMovie id={1} {...args} />;
View.args = {
  id: 1,
};
