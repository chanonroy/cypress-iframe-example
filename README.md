# Using Cypress with iframes

With limited iframe support from Cypress [[Issue #136](https://github.com/cypress-io/cypress/issues/136)], the following workaround in this repo allowed me to target elements and interact with iframes during tests.

### Explanation

Building off of a snippet by [paulfalgout](https://github.com/cypress-io/cypress/issues/136#issuecomment-342391119), the solution is to create an iframe command that returns a promise upon iframe loading completion. These commands, aliased as `iframe()`, can be chained together to deal with nested iframes.

```
// support/commands.js

Cypress.Commands.add('iframe', { prevSubject: 'element' }, $iframe => {
  return new Cypress.Promise(resolve => {
      $iframe.ready(function() {
        resolve($iframe.contents().find('body'));
      });
  });
});
```

Here is an example of usage:

```
// One iframe
cy.get("#iframe").iframe().find("#target").type("HELLO WORLD");

// Nested iframes
cy.get("#firstFrame").iframe().find("#secondFrame").iframe().find('#target').type('HELLO WORLD');
```

### Installation steps

1. Ensure you have the necessary global dependencies installed.

    - `yarn` package manager - [link](https://yarnpkg.com/en/)
    
    - `node.js` - version 6.x or higher - [link](https://nodejs.org/en/download/)
    
2. Use `yarn install` inside the project root to install local Node dependencies.

### Running the example test

1. Use the command `yarn serve` to run the express server.

2. In a separate window, use the command `yarn test` to run cypress.

3. Click on `iframe.spec.js` to run the example test

The desired effect is to write `HELLO WORLD` in the form input found within `form.html`
