import type { Meta, StoryObj } from "@storybook/react";

import DsButton from "./Button";

const meta = {
  title: "Ds/Button",
  component: DsButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof DsButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Content primary",
    type: "primary",
  },
};

export const Default: Story = {
  args: {
    children: "Content default",
    type: "default",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Large example",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Small example",
  },
};
