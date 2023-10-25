import type { Meta, StoryObj } from "@storybook/react";

import DsInputSearch from "./InputSearch";

const meta = {
  title: "Ds/InputSearch",
  component: DsInputSearch,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onSearch: {},
    allowClear: {
      control: "boolean",
      defaultValue: "true",
      description: "clear option",
    },
    loading: {
      control: "boolean",
      defaultValue: "true",
      description: "show loading",
    },
  },
} satisfies Meta<typeof DsInputSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {},
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};
