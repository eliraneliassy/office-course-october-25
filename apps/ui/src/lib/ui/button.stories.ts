import type { Meta, StoryObj } from '@storybook/angular';
import { Button } from './button';
import { action } from 'storybook/actions';

const meta: Meta<Button> = {
  component: Button,
  title: 'Button',
};
export default meta;

type Story = StoryObj<Button>;

export const Primary: Story = {
  args: {
    text: 'Add To Cart',
  },
  argTypes: {
    clickhandler: { action: 'clickhandler' },
  },
};


