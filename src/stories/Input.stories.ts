import { Meta, StoryObj } from "@storybook/react";
import Input from "../components/Input";


const meta: Meta<typeof Input> = {
    title: "Input",
    component: Input,
    tags: ["autodocs"],
    argTypes: {
        register: { table: { disable: true } },
        name: { table: { disable: true } },
        error: {
            control: { type: "select" },
            options: ["No Error", "Show Error"],
            mapping: {
                "Show Error": "Some error message",
                "No Error": undefined,
            },
            description: 'If Validation failed',
        }
    }
};
export default meta;

type Story = StoryObj<typeof Input>;

export const InputStories: Story = {
    parameters: {
        docs: {
            description: { story: "Input allow users to write data to interact with web application."},
        },
    },
    args: {
        label: 'Input',
    },
};
