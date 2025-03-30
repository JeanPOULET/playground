# Storybook

Install pour la CI
- npx playwright install
- npx playwright install-deps chromium
- npx playwright install --with-deps --only-shell | Only headless chrome




https://storybook.js.org/docs/writing-tests/test-runner#set-up-ci-to-run-tests

# 2. | Storybook
To run the end to end tests, you will use this command (present in [package.json](package.json))</br>
```npm run e2e```</br>
We will use Storybook stories to do unitary test on components and pages </br>
You should create a story within the folder of the component

`Example : multi-input.component.ts -> multi-input.stories.ts`


## 2.1 | Behavior/visual test
You will write in your stories some scenaries of how your component will be used.</br>
This is to ensure the behavior on the base input given.
This will ensure also the visual aspect of the component.

## 2.2 | Unit test
You will write in your stories play functions.</br>
A play function is a test case. It should describe a scenario and assert that all expected data is showed in the component.</br>
This will represent an interaction from the user.</br>
Example : 

```
export const FilledForm: Story = {
    play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');

    await userEvent.type(canvas.getByTestId('password'), 'a-random-password');

    await userEvent.click(canvas.getByRole('button'));

    await expect(
      canvas.getByTestId(
        'email'
      )
    ).toHaveValue('email@provider.com')
}};
```
This example is to fill a login form, we put data in both fields some input. <br/>
And we expect to have a value filled in the email as expected.

# 3. End-to-end tests
To run the end to end tests, you will use this command (present in [package.json](package.json))</br>
```npm run e2e```</br>
For end-to-end tests we will use playright in this repository. <br/>
This will simplify the visibility of endpoints used, pages etc..

## 3.1 | Playwright
To write a scenario
