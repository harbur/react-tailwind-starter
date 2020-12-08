// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import SubmitButton, { SubmitButtonProps } from './SubmitButton';


export default {
  title: 'Buttons/SubmitButton',
  component: SubmitButton,
  argTypes: {
  },
} as Meta;

const Template: Story<SubmitButtonProps> = (args) => <>
  <SubmitButton {...args} loading={false} />
  <SubmitButton {...args} loading={true} />
  <SubmitButton {...args} loading={false} disabled={true} />
  <SubmitButton {...args} loading={true} disabled={true} />
</>

export const Primary = Template.bind({});
Primary.args = {
  text: "click me",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "click me",
  type:"secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  text: "click me",
  type: "tertiary",
};

export const Danger = Template.bind({});
Danger.args = {
  text: "click me",
  type: "danger",
};
