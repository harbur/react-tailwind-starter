// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import TopMenuLayout from './TopMenuLayout';

export default {
  title: 'Layouts/TopMenuLayout',
  component: TopMenuLayout,
  argTypes: {
  },
} as Meta;

const Template: Story = (args) => <TopMenuLayout {...args}>{ }</TopMenuLayout>;

export const Primary = Template.bind({});
Primary.args = {
};
