## klazz (unstable) ##

simple prototypal inheritance conventions for [NodeJS](http://nodejs.org/)

### Installation ###

    npm install klazz

### Example Usage ###

* this section still under construction

### Current Goals ###

1. write vows to describe expected behavior
2. implement behavior
3. write documentation

### Expected Behavior ###

* `Klazz.define(name, params) -> Klazz`

  * function definitions:

      * `public(name, func_def) -> Method.public`
      * `protected(name, func_def) -> Method.protected`
      * `private(name, func_def) -> Method.private`

  * property definitions:

      * `private(name, value) -> Property.private`
      * `public(name, value) -> Property.public`
      * `protected(name, value) -> Property.protected`

* `Klazz.new(params) -> Klazz`

### Further Notes ###

* released under the [MIT License](http://www.opensource.org/licenses/MIT)