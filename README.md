Part !
Before changes:

After changes:

The changes are primarily in the toast. After submission, the new page would create a toast and redirect users back to homepage. The new webpage also has a redesigned structure, such as stacked fields for ‘start date’ and ‘end date’ on smaller screens. Finally there are some UI changes in placeholder colors to emphasize important information over less important ones.

Part B
Screenshots of After Implementation:

Explanation:
The pictures above implements the following design patterns:

- Navigation: The back button is present to navigate back to the homepage. No breadcrumbs are used because it’s only one level deep. A navigation bar also serves to navigate into the sign-in/sign-out page. Clicking on the logo also bounces the user to the homepage. It’s expected for users to be able to more easily navigate around the website without having to rely on the browser’s back button.
- Input and forms: The page has labels and input fields for each required data. The label is always visible, reducing user confusion. Placeholder is used to guide the user on the expected output. An inline error message is showed when certain fields are omitted. This helps users reduce errors and precisely show the user where the mistake is.
- Feedback and status: Submitting the form creates a toast. This makes the user feel at ease as there is visual confirmation that their data has been saved. Hovering over the submit button also creates a darkening effect to show that this action is allowed. Oppositely, after submitting the form, the submit button is disabled and turn gray to indicate that the button can no longer be pressed.
- Layout and Structure: The form is created with responsive design in mind. The form stretches and shrinks to ensure that it feels similar on all screens. The ‘start date’ and end date’ field is also shifted into a vertical stacked position on smaller screens, ensuring a smooth transition when users change device.
- Data Presentation: Data in the form is presented from top to bottom, requiring the most difficult fields to answer at the bottom to encourage completion rate. This makes filling the form natural as the eyes read from top to bottom and follows human motivation behavior.
  Part C
  No. Summary Test Scenario Pre-requisite Test Case Expected Result Actual Result
  1 User can add fill in a reminder form. Have the form opened. 1. User fills in the form.

| No. | Summary Test Scenario                       | Pre-requisite                       | Test Case                                                                                            | Expected Result                                                                                                 | Actual Result                                                                                                                                                                 |
| --- | ------------------------------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | User can fill in a reminder form.           | Have the form opened.               | 1. User fills in the form.<br>2. User omits required fields.<br>3. User clicks on the submit button. | 1. User can fill in the form.<br>2. User is warned on missing fields.<br>3. Submit button changes when hovered. | 1. User can see the changes in the form as they type.<br>2. An inline error is shown when required fields are omitted.<br>3. The submit button changes to black when hovered. |
| 2   | User can save a reminder form.              | Have the form correctly filled.     | 1. User clicks submit on the form.<br>2. User goes back to homepage.                                 | 1. User can submit the form.<br>2. User can return to homepage intuitively.                                     | 1. Clicking the button changes it to mute and disables all fields.<br>2. A toast pops up and automatically directs user to homepage.                                          |
| 3   | User can understand the layout of the form. | Have the form opened on any screen. | 1. User changes device.<br>2. User scans the form.                                                   | 1. Content dynamically moves with viewport.<br>2. User can understand form flow.                                | 1. Form stretches with the viewport and changes the ‘start date’ and ‘end date’ fields from horizontal to vertical on small screens.<br>2. Form is filled from top to bottom. |
