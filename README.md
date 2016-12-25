# ember-shave

A simple wrapper over DSC's super fast and simple text truncation library called [shave](https://github.com/dollarshaveclub/shave).

## Installation

```
ember install ember-shave
```

## Usage

Code:

```handlebars
{{#em-shave ~}}
  Lorem ipsum dolor sit amet, minim molestie argumentum est at, pri legere torquatos instructior ex. Vis id odio atomorum oportere, quem modo fabellas sit at, dicat semper est ne. Apeirian detraxit pri eu. No solum accusam has. Ius ne harum mundi clita, eu pro tation audiam.
{{/em-shave}}
```

Result:

```
Lorem ipsum dolor sit…
```

_Note: this contrived example assumes a width of 50px_

## Gotchas

- **Whitespace control**: In Handlebars, Ember's templating language, [whitespace control](http://handlebarsjs.com/expressions.html#whitespace-control) is done by appending a `~` to the opening tag of your components

- **Use block-style components**: ember-shave assumes you've written your components using the block style. That is, this does not work: {{ em-shave text="Trim me!" }}

## Other Implementations:

- [react-shave](https://www.npmjs.com/package/react-shave)
- [angular2-shave](https://www.npmjs.com/package/angular2-shave)
