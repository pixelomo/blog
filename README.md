# Telnyx starter kit
> Boilerplate web application for Telnyx take-home code challenge

## Getting started

### Requirements

* [Node.js](https://nodejs.org/en/) v6 or higher

### What's included

This starter kit provides the basics needed to quickly bootstrap your web application in the framework of your choice.  We provide the following, managed through [npm](https://www.npmjs.com/) packages:

* React 15 + React Router 3
* Module bundler ([Webpack](https://webpack.js.org/))
* Development server ([Webpack Dev Server](https://github.com/webpack/webpack-dev-server))
* ES6/7 compiler ([Babel](https://babeljs.io/))
* TypeScript transpiler ([TypeScript](https://www.typescriptlang.org/) + [TypeScript loader](https://github.com/TypeStrong/ts-loader))
* CSS preprocessor and UI utilities ([SASS](http://sass-lang.com/) and [Bootstrap 4](https://getbootstrap.com/))
* Test framework ([Karma](https://karma-runner.github.io/1.0/index.html) + [Jasmine](https://jasmine.github.io/2.8/introduction))

As long as requirements for the challenge are met, feel free to add additional npm packages and modify files in the starter kit as you see fit.

A barebones web application with routing, seed data, and stubbed out REST API is also included to get you started.  See [Using the REST API](#using-the-rest-api) once you're up and running for more information.

### Quick start

#### 1. Run `npm install`

This will install all dependencies (listed in `package.json`) necessary to get you up and running.  Feel free to add additional npm packages as you progress.

#### 2. Run `npm start`

This will run two scripts concurrently:
1. `npm run api` will start [json-server](https://github.com/typicode/json-server) to provide a stubbed out REST API through `localhost:9001`.
2. `npm run serve` will start [webpack-dev-server](https://github.com/webpack/webpack-dev-server) to serve up your application.  You should see your default browser open up a window pointing to `localhost:9000`.

#### 3. Navigate to `http://localhost:9000/`

You should see "Welcome!", and a barebones web application with navigational links to "Home" and "About".

### Testing

To run tests:
```shell
$ npm test
```

[Karma](https://karma-runner.github.io/1.0/index.html) will look for all files matching a `*.spec.(js|jsx|ts)` glob in `/src`.  You may add new tests by creating files under `/src` that follow the `*.spec.*` pattern.  If you prefer to change the spec file pattern, or use another testing framework than [Jasmine](https://jasmine.github.io/2.5/introduction), you may modify configuration options in `karma.config.js`.

## Using the REST API

> Note: Ensure that you've started the API server with `npm start` or `npm run api`.

A REST API is provided with seed data for blog posts and comments.  The REST API returns and accepts JSON.  Changes made to the "database" will persist as long as the API is running on `localhost:9001`.

**Base path:** http://localhost:9001

**GET** `/posts` *List all blog posts*<br>
**GET** `/posts/{id}` *View single blog post*<br>
**GET** `/posts/{id}/comments` *List all comments for single blog post*<br>
**POST** `/posts/{id}/comments` *Add comment to single blog post*<br>
**PUT** `/comments/{id}` *Update single comment*<br>

```javascript
interface Post {
  "id": Number;
  "title": String;
  "author": String;
  "publish_date": String; // Date that post was published in YYYY-MM-DD format
  "slug": String;         // Readable URL to use for individual posts
  "description": String;  // Short description for blog post listing
  "content": String;      // Full blog post content -- may contain markup
}

```

```javascript
interface Comment {
  "id": Number;
  "postId": Number;
  "parent_id": Number|null; // Parent comment for replies, is `null` if top-level comment
  "user": String;           // Name of commenter
  "date": String;           // Date of comment in YYYY-MM-DD format
  "content": String;        // Comment content
}
```

## Delivering to Telnyx

You may create a Git repo, or zip up this entire directly and deliver the source code to Telnyx.  Ensure that extraneous folders, eg. `/node_modules`, are not included in the zip file.  If you've initialized Git in this directory locally, you may use [git clean](https://git-scm.com/docs/git-clean) to remove uncommitted and ignored files before compressing the project.  Including version control is strongly encouraged.

**Thank you, and have fun!**