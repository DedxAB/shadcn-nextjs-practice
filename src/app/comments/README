# Understanding the `_req` Parameter

## Overview

In our server-side functions, you may notice a parameter named `_req`. This parameter represents the HTTP request object that the server receives when a client sends a request.

## Why the underscore?

The underscore (`_`) before `req` is a convention used in JavaScript and many other programming languages. It's used to indicate that a variable is intentionally not being used in the function. In our case, `_req` is a placeholder for the request object that the function would receive if it were part of a real server-side application.

## When is `_req` used?

Even though `_req` is not being used in some of our functions, it's still typically included as a parameter out of convention and for potential future use. For example, you might need to use the `_req` parameter in a `GET` function to access data sent in the request, such as query parameters or headers, to customize the response.

## Example

Here's an example of a function where `_req` is not used:

```javascript
export async function GET(_req) {
  return Response.json(comments);
}
