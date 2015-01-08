---
layout: post
title: Understanding NaN Values
categories: []
tags: []
published: True

---

A co-worker recently had issues with `NaN` values in JavaScript. `NaN` values are [IEEE 754 Floating-Point](http://en.wikipedia.org/wiki/IEEE_floating_point) number values. These values result from an undefined or unrepresentable value in floating point calculations. `NaN` values **are** number values despite everything your brain might tell you when you read `NaN` as 'Not a Number'. In the case of `NaN` values it's useful to forget all logic and intuition, and memorize the facts.

JavaScript reports `NaN` values as number types, this is correct per the ECMA-262 and IEEE 754 specs.

{% highlight javascript %}
typeof NaN; // 'number'
Object.prototype.toString.call(NaN); // '[object Number]'
{% endhighlight %}

In JavaScript a `NaN` value is the only type of value that is not reflexive. That's one way to identify a `NaN` value. `x !== x` where `x` is a `NaN` value will evaluate to `true`. The global `isNaN` method can be used to identify `NaN` values. However, the `isNaN` method doesn't handle converting input to a number. It has a set of gotchas.

{% highlight javascript %}
isNaN(NaN);   // true
isNaN(0/0);   // true
isNaN({});    // true
isNaN('NaN'); // true
isNaN('str'); // true
isNaN('1');   // false
isNaN([]);    // false
{% endhighlight %}

When certain inputs are passed to the `isNaN` method the behavior is less than ideal. Several false positives are returned. Both [`Underscore`](http://underscorejs.org/) and [`Lo-Dash`](https://lodash.com/) handle the shortcomings of the `isNaN` method by checking if the value is a number.

{% highlight javascript %}
_.isNaN(NaN);   // true
_.isNaN(0/0);   // true
_.isNaN({});    // false
_.isNaN('NaN'); // false
_.isNaN('str'); // false
_.isNaN('1');   // false
_.isNaN([]);    // false
{% endhighlight %}

As written above `NaN` values are number values so `_.isNumber(NaN)` correctly returns `true` for both [`Underscore`](http://underscorejs.org/) and [`Lo-Dash`](https://lodash.com/). Both libraries have had issues filed for incorrect behavior, but the behavior is correct and the answer is usually to point consumers to the `_.isFinite` method.

Issues also arise when dealing with builtin methods such as `Array.prototype.indexOf`. `NaN` values are unable to be found without special handling.

{% highlight javascript %}
[0,1,NaN,3].indexOf(NaN); // -1
{% endhighlight %}

The [ES6 draft](https://people.mozilla.org/~jorendorff/es6-draft.html) specifies a solution to the global `isNaN` method with a new `Number.isNaN` method. `Number.isNaN` returns the same results [`Underscore`](http://underscorejs.org/) and [`Lo-Dash`](https://lodash.com/) return.

{% highlight javascript %}
Number.isNaN(NaN);   // true
Number.isNaN(0/0);   // true
Number.isNaN({});    // false
Number.isNaN('NaN'); // false
Number.isNaN('str'); // false
Number.isNaN('1');   // false
Number.isNaN([]);    // false
{% endhighlight %}

The [ES6 draft](https://people.mozilla.org/~jorendorff/es6-draft.html) also specifies `Object.is`, offering a better way to determine if two values are equal over the strict equality operator, triple equals. `Object.is` works as the strict equality operator with two exceptions: `NaN` values, and positive and negative zero.

{% highlight javascript %}
Object.is(NaN, NaN); // true
Object.is(-0, +0);   // false
NaN === NaN;         // false
-0 === +0;           // true
{% endhighlight %}

When my co-worker was having issues and asking question about `NaN` values he called 'wat' on JavaScript. I took it upon myself to set the record straight, but realized everyone who encounters `NaN` values must learn about these problems, hence this post. It's important to understand this behavior is **not** specific to JavaScript. It is specific to all languages that use [IEEE 754 Floating-Point](http://en.wikipedia.org/wiki/IEEE_floating_point) number calculations.

Ruby has the following behavior with regards to `NaN` values.

{% highlight ruby %}
Float::NAN.is_a?(Float)  # true
Float::NAN.nan?          # true
(0/0.0).nan?             # true
Float::NAN == Float::NAN # false
(0/0.0) == (0/0.0)       # false
{% endhighlight %}

Java has the following behavior with regards to `NaN` values.

{% highlight java %}
double x = Double.NaN;
Double.isNaN(x);            // true
System.out.println(x != x); // true
System.out.println(x == x); // false
{% endhighlight %}

The behavior across Ruby, Java, and JavaScript is essentially the same. Every single consumer of these languages must eventually learn the rules of `NaN` values. I hope consumers of these languages are now able to understand the issues at hand and deal with them thoughtfully.
