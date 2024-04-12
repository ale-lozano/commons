import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CustomButton from './CustomButton';

const meta = {
  title: 'Ui/Button',
  component: CustomButton,
  args: { onClick: fn() },
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    
  }
}