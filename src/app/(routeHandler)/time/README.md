# Caching Behaviour

Route handlers are cached by default when using the GET method with the Response object in Next.js

```javascript
export async function GET() {
  return Response.json({
    time: new Date().toLocaleTimeString(),
  });
}
```

Every time you refresh the browser u see the time is updating in development mode but in build mode (production) you see time is not updating --> `caching` behaviour.

## How to opt out of caching?

- dynamic mode in `Segment Config Option`
- using the Request object with the `GET` method
- employing dynamic functions like `headers()` and `cookies()`
- dusing any HTTP method other than `GET` 

```javascript
export const dynamic = "force-dynamic"; // By default "auto"
```

- `auto` behaviour attempts caches as much as possible.
- `force-dynamic` ensuring the handler is executed for each user request
