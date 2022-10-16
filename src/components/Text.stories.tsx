import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputRootProps } from "./Text";
import { Envelope } from "phosphor-react";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Digite seu email" type="email" />,
    ],
  },
  argTypes: {
    children: { table: { disable: true } },
  },
} as Meta<TextInputRootProps>;

export const WithIcon: StoryObj<TextInputRootProps> = {};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: [<TextInput.Input placeholder="Digite seu nome" type="name" />],
  },
};
