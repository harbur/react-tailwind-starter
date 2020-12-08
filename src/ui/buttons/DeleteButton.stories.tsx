// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import DeleteButton, { DeleteButtonProps } from './DeleteButton';

export default {
  title: 'Buttons/DeleteButton',
  component: DeleteButton,
  argTypes: {
  },
} as Meta;

const Template: Story<DeleteButtonProps> = (args) => <DeleteButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "click me"
};
