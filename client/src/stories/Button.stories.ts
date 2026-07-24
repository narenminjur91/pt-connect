import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@/components/ui/button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { 
      options : ["default", "outline", "secondary", "ghost", "destructive", "link"]  
    },
    size: { 
      options : ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"] 
    },
  },
  args: { },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  args: {
    variant: "default",
    size: "default"
  },
};
