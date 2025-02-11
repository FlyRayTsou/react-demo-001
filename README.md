# Introduction
This is a project which learns from the Udemy Business course. This course is called "Next.js 15 & React - The Complete Guide"'s Optional: React Refresher.

- URL: https://www.udemy.com/course/nextjs-react-the-complete-guide/

# What I learned

## Conventions
1. Component file names should be in uppercase.
2. Component file name’s function should start with an uppercase letter.
3. Convention: put module CSS file next to JSX file.
4. Convention: `const [xxxValue, setxxxValue] = useState('')`.

## React Rules
1. Component with lowercase. e.g. `return <post />` React will see it as a default component and try to find it in default components. Uppercase component will be considered as a custom component.
2. Curly braces `{}` to show variables in JSX.
3. Only one root element; if not a good fit, you can use an empty element `<>` and `</>` or `<React.Fragment>`.
4. React lift state up: using a parent component or some component have two components then pass by props to the component.
5. When updating data that depends on existing data, use function form.
    1. X setPosts([postData, …posts]) 
    2. O setPosts((existing) => [postData, …existingPosts])
6. When fetching data for the initial page, use `useEffect`. Or you will meet an infinite loop for `useState`.
7. `useEffect` execution timing is decided by the second parameter.
8. `Link` component can be used to navigate between pages. It will not reload the page. It will just change the content of the page.
9. Router sets which path to which component. It also has properties like `children`, `action`, `loader`.
10. Loader: executed before the page is loaded. It is a good place to fetch data.
11. Action: executed after some action is done. It is a good place to update data.