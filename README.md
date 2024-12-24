# Code Challenge:

## Introduction:
Welcome to the React Developer Technical Assessment! This test is designed to evaluate your proficiency in building React applications using a modern stack, including Redux Toolkit, Vite, React Router and TurboRepo. We have prepared a set of tasks and questions that cover a spectrum of skills, ranging from fundamental concepts to more advanced topics.

### Tasks: 
Complete the provided tasks to demonstrate your ability to work with React, Redux Toolkit, Vite, and TurboRepo. Adjust the complexity based on your experience level.

### Questions:
Answer the questions to showcase your understanding of the underlying concepts and best practices associated with the technologies in use.

### Time Limit:
This assessment is designed to take approximately 1 hour to complete. Please manage your time effectively.

### Setup the reporsitory:
Make sure you have pnpm installed<br>
Install dependencies with `pnpm`<br>
Run the project with `turbo run dev` or `pnpm run dev`

### prerequisite:
Start the test by Forking this repository, and complete the following tasks:<br>

## Task 1:
Assignment: Use the `api` found in `App.tsx` to make a request and fetch a list of all Pokémon.<br>
Question 1: How did you manage to fetch the list and what tool did you use?<br>
Answer 1: I used inbuild javascript method "Fetch" to fetch the list. For this I created a custom hook called "useApi", in which we can paas the url of the api to be called (this hook can be reusable and can be called into other components as well).
Question 2: What steps would you take to future improve this?<br>
Answer 2: In the future, I would probably use some library like axios or tanstack query for better error handling and better reusability of api calls.

commit the code as `task-1`<br>

## Task 2:
Assignment: Parse the list to the `<List />` component and ajust the component to show a list of all pokémon names
Feel free to create more components in the `/ui` package or in the app if needed 

commit the code as `task-2`<br>

## Task 3:
Assignment: Style the `<List />` component to display as a grid.

commit the code as `task-3`<br>

## Task 4:
Assignment: Introduce `redux-toolkit` and store the list of pokémon in the redux store.<br>
Question 4: What makes the `createSlice` in redux-toolkit difference then A Reducer in redux?<br>
Answer 4: `createSline` is the new or mordern way of creating reducers and requires less of boilerplate code to initalize reducers. before `create-slice`, we have to manually create actions and use switch statements to handle different types of actions which are often confusing. `create-slice` automatically generate actions based of reducer names, which helps in less error. Also we dont need to write switch statements in redux toolkit, we can directly write render funtions in the reducer object of `create-slice`.
Question 5: Describe the benefits of immutable code.<br>
Answer 5: immutable code has several benefits like the predictability of data - if we know that the data cannout be mutated, it will create less bugs and the code will be more maintainable and the app will not behave unexpectedly. it also makes easier to debug the code since we might know from where the data is being generated or being set and we don't have to traverse through thousands of line of code to find the bug. It also helps in increasing the performance optimization of the app.

commit the code as `task-4`<br>

## Task 5:
Assignment: Create button for each pokémon where an Action will be dispatched to remove the pokémon from the store 
Question 6: How can you verify the action has been dispatched?
Answer 6: We can use several ways to confirm if the action is dispatched like we can use Redux dev tools extension of chrome to see if the action is being dispatched or not and if the state is being changed or not. Other than that we can console.log inside our reducer funtion so that id the dispatch call is being successful, this console.log statement would trigger. Also we can set up custom middleware and use console.log statement or anything in that middleware which helps in verifying that action has been successfully dispatched.  

## Task 6:
Question 7: explain the use of `useEffect` hook in React
Answer 7: `useEffect` is one the main hook in react which helps us achive lifecycle methods in funtional components. It also helps us to run side effects in our components liek fetching data from api, modifing DOM elements and also cleanup funtions. It also takes up dependenct array as a second argument. and whatever the state or dependency we provide in this array, the `useEffect` hook will run everytime that dependency array changes.
Question 8: What is A High Order Component?
Answer 8: HOC is a pattern in react in which we can reuse the component logic. it wraps around the component by adding new props or funtionality like state, mothods, or any kind of logic. By doing this it eleminates the writing the same logic and and again thus improving performance and readibility of code.
Question 9: What use cases would a HOC be usefull?
Answer 9: HOC would be useful in cases in where we need to reuse componenet logic again and again like for example when authenticating a user, we would write our authencation logic in HOC and wrap our components with it. In that HOC, we can check if the user is successfully logged in, we can allow him to proceed futher otherwise we can redirect him to the login page. Or maybe we want the user to show different pages based on specific feature flag or conditions, we can write that logic in our HOC and pass our components in that HOC.
Question 10: What does it indicate when a component is prefixed with `use` and `with`
Answer 10: `use` is often used with hooks in funtional components, wheather they're react in-build hooks are we made our own custom-hooks. `with` is generally used with HOC.
Question 11: What is a Generic type in typescript?
Answer 11: As the name suggests, the generic type is not limited to any specfic type. it can work with different data type while still check type safety. this is helpful if you want to some common reusabe logic that accepts multiple data type like say number, string or any other type.
Question 12: Whats the difference between a controlled and uncontrolled input in React?
Answer 12: the difference is how the data is handled in both situations. In controlled input, the value of teh input is controlled by react and it's hooks and in Uncontrolled input, the value of input is directly controlled and updated by DOM.





