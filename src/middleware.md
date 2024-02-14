# Middleware
Middleware in Next.js is a powerful feature that offers a robust way to intercept and contol the flow of requests and responses within our applications.

It does this at a global level significantly enhancing features like redirection, URL rewrites, authentication, headers and cookies management and more.

Middleware allows us to specify paths where it will be active.
- Custom matcher config.
- Conditional statements.

```javascript
import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.redirect(new URL("/", request.url));
}
export const config = {
  matcher: "/time",
};
```

## rewrite
``` javascript
return NextResponse.rewrite(new URL("/", request.url))
```
- `rewrite` helps `SEO` and url will be the `base url` but response will differ. In this case `Home` page response will be shown.

## Use of cookies in middleware

``` javascript
import { NextResponse } from "next/server";

export function middleware(request) {
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }
  return response;
}
```