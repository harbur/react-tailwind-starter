// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import PrimaryNavButton, { PrimaryNavButtonProps } from './PrimaryNavButton';

export default {
  title: 'Buttons/PrimaryNavButton',
  component: PrimaryNavButton,
  argTypes: {
  },
} as Meta;

const Template: Story<PrimaryNavButtonProps> = (args) => <PrimaryNavButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  to:"/abcd",
  label: "click me"
};
