import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: (props: import("./InputSearch").IInputSearchComponent) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        onSearch: {};
        allowClear: {
            control: string;
            defaultValue: string;
            description: string;
        };
        loading: {
            control: string;
            defaultValue: string;
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Large: Story;
export declare const Small: Story;
