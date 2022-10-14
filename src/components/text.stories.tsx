import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./text";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Hello world",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};
export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>testando</p>,
  },
  argTypes: {
    children: {
      table: { disable: true },
    },
  },
};
