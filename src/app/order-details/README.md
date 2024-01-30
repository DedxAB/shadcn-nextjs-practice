# useRouter in Next.js

`useRouter` is a hook provided by Next.js that allows you to programmatically change routes inside client components. It returns a router object that can be used to perform navigation.

In the context of your code, `useRouter` is being used to create a `router` object:

```jsx
const router = useRouter();
```

This router object is then used within the handelButton function to navigate to the home page `(“/”)` when the button is clicked:

```jsx
const handelButton = () => {
  console.log("Button Clicked");
  router.push("/");
  // router.back();
};
```

The `router.back()` line, which is commented out, would navigate back to the previous page if it were uncommented and executed.
