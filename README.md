stellar.js Parallax Scrolling directives for AngularJS
=================

## About

This directive is based on [stellar.js].

[stellar.js]: http://markdalgleish.com/projects/stellar.js/

## Requirements

- AngularJS
- jQuery

Tested on AngularJS 1.0.6, jQuery 1.9.1.

## Installation

```js
var app = angular.module('site', ['stellar.directives']);
```

## Usage

### in app.js
```js
app.controller('yourCtrl', function($scope, stellar) {
    // The first step is to run .stellar() against the element:
    stellar.against(window);
    // ,
    // stellar.window();
    // or
    // stellar.against('body, .planet, .sun');
})
```

### html directives
```html
<body stellar-background="0.8">
    <div class="planet" stellar="0.8" stellar-hor="0"></div>
    <div class="sun" stellar="1.2" stellar-vert="0"></div>
</body>
```