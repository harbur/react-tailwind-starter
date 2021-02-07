// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import TopMenuLayout from 'ui/layouts/TopMenuLayout';
import Home from './Home';


export default {
  title: 'Pages/Home',
  component: Home,
  argTypes: {
  },
} as Meta;

const Template: Story = (args) => <TopMenuLayout><Home {...args} /></TopMenuLayout>;

export const Primary = Template.bind({});
Primary.args = {
};
