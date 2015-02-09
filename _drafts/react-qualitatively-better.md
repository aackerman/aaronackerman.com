---
layout: post
title: React.js, Qualitatively Better
---

React is a pretty great library, it's not a full framework, but it's an extremely coherent view layer for a web application. When React Native is open sourced, it can provide a great view layer for native applications. React has a lot of qualities that make it great. But, many of React's great qualities cannot be understood objectively.

The Virtual DOM is an implementation detail, it allows React to re-render quickly, but this initially differentiating feature may turn into a checkmark if all frameworks and view layer libraries implement updates in this fashion. It doesn't make React special.

Server-side rendering is a feature of React. But server-side and client-side rendering is an extremely tough problem space. React makes it somewhat easier, 'more possible', but it's still extremely tough. And Ember will have server-side rendering as a feature soon as well.

JSX is simple sugar to allow consumers to write code that looks more like HTML than the nested function calls that are output by the compiler.

The API surface area of React is small, in comparison to other libraries it can take much less time to be effective using React. This is a really big deal.

Excluding JSX, which is optional, there is zero special syntax for React. Every `<div>` is transformed into `React.createElement('div')`.

Early warnings are a pretty big deal when it comes to React.

The flexibility of React is understated. The interoperability with existing tools is extremely important.

  * [React with jQuery UI](https://github.com/ryanflorence/reactconf-2015-HYPE/blob/master/demos/04-dom-lib-interop/app.js)
  * [React with Ember](https://gist.github.com/ryanflorence/3c4597c1e95b3fd3c9e1)
  * [React with Backbone](http://www.thomasboyt.com/2013/12/17/using-reactjs-as-a-backbone-view.html)
  * [React with D3](http://nicolashery.com/integrating-d3js-visualizations-in-a-react-app/)
  * [React with Angular](https://github.com/davidchang/ngReact)
  * [React with three.js](https://github.com/Izzimach/react-three)
