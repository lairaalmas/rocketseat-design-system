import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { SignIn } from "./SignIn";

export default {
  title: "Pages/SignIn",
  component: SignIn,
  args: {},
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    userEvent.type(
      canvas.getByPlaceholderText("janedoe@email.com"),
      "laira@email.com"
    );
    userEvent.type(canvas.getByPlaceholderText("********"), "123456");
    userEvent.click(canvas.getByRole("button"));

    await waitFor(() => {
      // aguarda o react terminar a renderização para verificar
      return expect(canvas.getByText("Login realizado!")).toBeInTheDocument();
    });
  },
};
