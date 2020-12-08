// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import NavButton, { NavButtonProps } from './NavButton';

export default {
  title: 'Buttons/NavButton',
  component: NavButton,
  argTypes: {
  },
} as Meta;

const Template: Story<NavButtonProps> = (args) => <NavButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  to:"/abcd",
  label: "click me"
};
