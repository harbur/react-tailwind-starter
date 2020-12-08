// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import ActionButton, { ActionButtonProps } from './ActionButton';

export default {
  title: 'Example/ActionButton',
  component: ActionButton,
  argTypes: {
  },
} as Meta;

const Template: Story<ActionButtonProps> = (args) => <ActionButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "click me"
};
