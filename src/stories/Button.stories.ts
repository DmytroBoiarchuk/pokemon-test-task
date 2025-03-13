import { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      description: 'Text inside the button',
    },
  }
};
export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonStories: Story = {
  parameters: {
    docs: {
      description: { story: "Buttons allow users to make choices, take actions, and help guide around an interface with a single tap."},
    },
  },
  args: {
    size: 'lg',
    disabled: false,
    appearance: 'primary',
    children: "BUTTON",
  },
};
