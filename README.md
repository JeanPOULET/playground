# Storybook
npm create storybook@latest


npm add -D storybook
npx init @storybook


Install pour la CI
- npx playwright install
- npx playwright install-deps chromium
- npx playwright install --with-deps --only-shell | Only headless chrome






https://storybook.js.org/docs/writing-tests/test-runner#set-up-ci-to-run-tests

# 2. | Storybook
To run the stories programmaticaly, you will run both commands (present in [package.json](package.json))</br>
```npm run storybook```</br>
```npm run test-storybook```</br>
Storybook will be accessible with first command at [Storybook](http://localhost:6006) </br>
We will use Storybook stories to do test on components and pages </br>
You should create a story within the folder of the component

`Example : multi-input.component.ts -> multi-input.stories.ts`


## 2.1 | Behavior/visual test
You will write in your stories some scenaries of how your component will be used.</br>
This is to ensure the behavior on the base input given.
This will ensure also the visual aspect of the component.</br>

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

## 2.2 | Unit test
Will be run with : ```npm run test```</br>
You will write .spec files for pipes, utils or anything supposed to have complex interactions.</br>
The stories written with storybook should be enough for most cases for component interaction.</br>
But if you want to ensure a specific method in your component feel free to write a unit test for it.

# 3. End-to-end tests
To run the end to end tests, you will use this command (present in [package.json](package.json))</br>
```npm run e2e```</br>
For end-to-end tests we will use playright in this repository. <br/>
This will simplify the visibility of endpoints used, pages etc..

## 3.1 | Playwright
To write a scenario, you will add it in the e2e folder present at the root of this project.</br>
You should divide as much as possible the scenarios in the arborescnce to have distinguishable elements. </br> 
