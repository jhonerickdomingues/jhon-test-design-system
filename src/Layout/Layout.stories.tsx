import type { Meta, StoryObj } from "@storybook/react";

import Layout from "./Layout";

const meta = {
  title: "Ds/Layout",
  component: Layout,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onSearch: {},
    routes: {
      control: "array",
    },
    hideHeader: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    hideHeader: false,
    routes: [
      {
        title: "Home",
      },
      {
        title: "Products",
      },
    ],
    children: <h1>rs</h1>,
  },
};
