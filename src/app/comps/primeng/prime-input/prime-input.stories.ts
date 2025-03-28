
import type { Meta, StoryObj } from '@storybook/angular';
import {fn, userEvent, within} from '@storybook/test';
import {PrimeInputComponent} from './prime-input.component';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<PrimeInputComponent> = {
  title: 'Example/Prime counter',
  component: PrimeInputComponent,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<PrimeInputComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithFive: Story = {
  args: {
    startWith: 'Five guys one girl'
  },
};

export const WithOne: Story = {
  args: {
    startWith: 'Antonio del uno'
  },
};

export const WithTen: Story = {
  args: {
    startWith: 'Thibault et les 10 ninjas'
  },
};
