---
layout: post
title: React, Qualitatively Better
categories: []
tags: []
published: True

---

React is a pretty great JavaScript library, it's not a full framework, but it's an extremely coherent view layer for a web application.

The Virtual DOM is an implementation detail, it allows React to re-render quickly, but this initially differentiating feature may turn into a checkmark if/when all frameworks and view layer libraries implement updates in this fashion. It doesn't make React special in terms of the DOM. But in terms of providing an abstraction for rendering, the Virtual DOM is huge, React Native and using React to render into HTML5 canvas prove this completely.

React also feels more like server-side rendering than traditional JavaScript client side rendering. It's a very simple model to reason about, ignore the state of the DOM, keep the state in JavaScript, keeping state to a minimum and let React sort out writing to the DOM. A lot of problems come up when state is kept in the DOM in the form of data attributes and css classes, it forces a lot of manual bookkeeping to deal with updating the DOM, React allows developers to ignore an entire swath of problems.

The API surface area of React is small in comparison to other libraries, it can take much less time to be effective using React. This is a really big deal. The surface area of other well-known JavaScript frameworks is often much larger and more extensive than React. But this smaller API surface doesn't make React less powerful. Fewer features does not mean less powerful, it simply means the features must be pulled in from elsewhere, like utility libraries such as Lodash.

JSX is simple sugar to allow consumers to write code that looks more like an HTML tag tree than the nested function calls that are output by the compiler. Every `<div>` is transformed into `React.createElement('div')`. Functional composability is huge in React, refactoring a component into multiple components is usually very straight forward function extraction.

Early warnings are also a pretty big deal when it comes to React. When I use `class=` on a React component, console warning messages will be logged asking me if I really meant `className=`, and it's right, I did mean `className` because of specific restrictions in React about HTML properties vs attributes. [`react-a11y`](https://github.com/rackt/react-a11y) from [@ryanflorence](https://twitter.com/ryanflorence) provides messages in the same vein as the main React library offering details about accessibility problems with returned spec for the DOM.

React.PropTypes offers development checking around properties passed through components. Warning in development when values passed through components do not match expectations. The checking is intended to be for development only so checking is only informational.

The flexibility of React is understated or not well understood without a good familiarity with React. The interoperability with existing tools is extremely important. React can work with any major library out there, for better or for worse.

  * [React with jQuery UI](https://github.com/ryanflorence/reactconf-2015-HYPE/blob/master/demos/04-dom-lib-interop/app.js)
  * [React with Ember](https://gist.github.com/ryanflorence/3c4597c1e95b3fd3c9e1)
  * [React with Backbone](http://www.thomasboyt.com/2013/12/17/using-reactjs-as-a-backbone-view.html)
  * [React with D3](http://nicolashery.com/integrating-d3js-visualizations-in-a-react-app/)
  * [React with Angular](https://github.com/davidchang/ngReact)
  * [React with three.js](https://github.com/Izzimach/react-three)
  * [React with Canvas](http://engineering.flipboard.com/2015/02/mobile-web/)
  * [React with Native 1](https://www.youtube.com/watch?v=KVZ-P-ZI6W4)
  * [React with Native 2](https://www.youtube.com/watch?v=7rDsRXj9-cU)

The benefits of React are great, it has it's downsides as many frameworks do. Performance for initial render will never be as good as hand writing DOM manipulation.

React is greater than the sum of it's parts. It helps to guide you into the pit of success.
