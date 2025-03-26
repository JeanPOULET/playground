
import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import { ClarityTrialComponent } from './clarity-trial.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ClarityTrialComponent> = {
  title: 'Example/Button',
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
