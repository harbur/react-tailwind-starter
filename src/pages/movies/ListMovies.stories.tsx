// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import ListMovies from './ListMovies';


export default {
  title: 'Pages/Movies/ListMovies',
  component: ListMovies,
  argTypes: {
  },
} as Meta;

const Template: Story = (args) => <ListMovies {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
