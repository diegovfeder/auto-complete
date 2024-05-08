# Q&A - Diego Feder

**1. What is the difference between Component and PureComponent? Give an example where it might break my app.**

- A **`PureComponent`** is a regular **`Component`** with a constraint: it only re-renders when a shallow comparison of props and state detects changes. So, if you're dealing with complex data structures like nested objects or arrays, it might miss changes deeper inside, causing your app to break.

> A shallow comparison, also known as a reference comparison, is a process that checks if two objects point to the same memory location. It's a type of fast comparison in JavaScript that's used to compare objects.

- A regular **`Component`** re-renders whenever **`setState`** is called or when the parent component re-renders, unless you specifically implement **`shouldComponentUpdate`** to control this behavior. You can break your app easily with a setState and the same state check inside an useEffect and an infinite condition.

**2. Context + ShouldComponentUpdate might be dangerous. Why is that?**

- **`shouldComponentUpdate`** isn't great for modern React, but when combined with React Context, it can be especially problematic. This combo can prevent components from re-rendering when their context values change, leading to stale or incorrect data being displayed. The best solution? Convert those components to use functional ones with hooks!

**3. Describe 3 ways to pass information from a component to its PARENT.**

1. **Callbacks / Props (state lift)**: Pass functions from parent to child, and let the child call them with the new data.
2. **Local / Global State (mutual dependency)**: Lift the state up to another function, and let the child just use its state and setters.
3. **Refs**: The parent can access the child's data directly using **`useRef`**.

**4. Give 2 ways to prevent components from re-rendering.**

- You can prevent unnecessary re-renders by l**ocking dependencies**: Use **`React.memo`** or **`useMemo`**/**`useCallback`** to prevent excessive re-renders when the component's dependencies haven't changed.
- Also, ensure state updates are precise and granular. Component patterns, and your whole architecture impacts this.

**5. What is a fragment and why do we need it? Give an example where it might break my app.**

- A fragment allows you to group multiple elements without adding extra DOM nodes. But if your styles or functionality depend on specific parent-child relationships, like grid layouts or transitions, fragments might break your app by not providing a DOM element wrapper.

**6. Give 3 examples of the HOC pattern.**

- **withTheme**: Enhances a component with theming properties.
- **withRouter**: Injects routing-related props into a component.
- **connect** (from Redux): Connects a component to the Redux store, giving it state and dispatch as props.

**7. What's the difference in handling exceptions in promises, callbacks, and async...await?**

- **Promises**: Use **`.catch()`** to handle errors.
- **Callbacks**: Handle errors within the callback, often passed as the first parameter.
- **Async/await**: More readable way to work with promises using **`try/catch`**.

**8. How many arguments does setState take and why is it async?**

- **`setState`** takes two arguments:
    1. The new state value or a function to compute the new state.
    2. A callback function that runs after the state is updated.
- It's async to batch multiple updates together for performance.

**9. List the steps needed to migrate a Class to Function Component.**

- Copy the class code and use an AI generator (asking a good prompt of course) to kickstart the conversion and continue the refactor from there.
- Replace **`state`** and lifecycle methods with hooks like **`useState`** and **`useEffect`**.
- Convert methods to functions inside the component and ensure event handlers are bound correctly.
- Replace `refs` with `useRef` if applicable.

**10. List a few ways styles can be used with components.**

- **CSS/SCSS**: Classic stylesheets, modules or preprocessors.
- **Utility Tools**: Tailwind CSS or other utility-first tools.
- **CSS-in-JS**: Styled Components or Emotion.
- **Inline Styles**: Directly applying styles in JSX.

**11. How to render an HTML string coming from the server.**

- **`dangerouslySetInnerHTML`** works but comes with a big caution sign. Make sure the HTML is sanitized and comes from a trusted source to avoid security issues like XSS.
