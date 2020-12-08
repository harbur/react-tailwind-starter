// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import MenuLayout from './MenuLayout';

export default {
  title: 'Layouts/MenuLayout',
  component: MenuLayout,
  argTypes: {
  },
} as Meta;

const Template: Story = (args) => <MenuLayout {...args}>{ }</MenuLayout>;

export const Primary = Template.bind({});
Primary.args = {
};
