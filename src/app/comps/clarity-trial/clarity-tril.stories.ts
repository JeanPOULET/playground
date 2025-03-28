
import type { Meta, StoryObj } from '@storybook/angular';
import {expect, fn, userEvent, within} from '@storybook/test';

import { ClarityTrialComponent } from './clarity-trial.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ClarityTrialComponent> = {
  title: 'Example/Counter',
  component: ClarityTrialComponent,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<ClarityTrialComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithFive: Story = {
  args: {
    startWith: 5
  },
};

export const WithOne: Story = {
  args: {
    startWith: 1
  },
};

export const WithTen: Story = {
  args: {
    startWith: 10
  },
};

export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 👇 Simulate interactions with the component
    await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');

    await userEvent.type(canvas.getByTestId('password'), 'a-random-password');

    // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'));

    await expect(
      canvas.getByTestId(
        'email'
      )
    ).toHaveValue('email@beurre.com')

    // 👇 Assert DOM structure
    // await expect(
    //   canvas.getByText(
    //     'Everything is perfect. Your account is ready and we should probably get you started!',
    //   ),
    // );
  },
};
