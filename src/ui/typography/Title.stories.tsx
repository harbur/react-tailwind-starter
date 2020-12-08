// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Title, { TitleProps } from './Title';

export default {
  title: 'Typography/Title',
  component: Title,
  argTypes: {
  },
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Section 1"
};
