# Initial Setup

## Bootstrapping

To bootstrap a project from scratch do the following:

```sh
npx create-react-app <appName>
```

## Build Tool

We use `npm` as our build tool.

## Proxy

In order for the frontend to be able to communicate with the backend without CORS issues we need to setup a proxy, this can be done on the `package.json`. If our backend runs on port `8080` then we can instruct the frontend to proxy there with the following line:

```json
 {
    "proxy": "http://localhost:8080",
 }
```

## Semantic UI

We use [Semantic UI] JS framework and we integrate it with react using [Semantic UI React].

[Semantic UI]: https://semantic-ui.com/
[Semantic UI React]: https://react.semantic-ui.com/

To setup:

```sh
npm add semantic-ui-react --save
npm add semantic-ui-css --save
```