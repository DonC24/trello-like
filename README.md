# Trello-like Application - Front-End assignment

This page contains description and requirements for a Front-End assignment on [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

### What was done

1. Used vanilla HTML, CSS and JS and web components to create a Trello like app.
2. The application consumes data of a fake API powered by [JSON Server](https://github.com/typicode/json-server).
3. Able to display all columns with all cards, create a new column and card, and delete a card.
4. Creation and deletion of cards/columns are saved to the db.json file.



### Duration

The duration of this assessment is **two days**. The scope of the assessment is intentionally large to give you room to show which aspects of development you would prioritize.

### Goal

The goal is to check the applicant is able to:

- Grasp the concept of web components,
- Create an application from scratch using web components,
- Develop a responsive interface,
- Write clean code,
- Use git with readable and descriptive commits,
- Write succint and readable documentation,
- Cover the code with tests.

### Requirements

1. Create a public github repository that you will send to us.
2. You solution should use **only [Web Components](https://www.webcomponents.org/introduction)** aside from vanilla HTML, CSS and JS. No frameworks or external libraries can be used for the application itself. However, external frameworks are allowed for tests.
3. You should consume the data of the fake API provided in this repository (see section 'Materials' below). 
4. Create a single page that lists all columns with their respective cards.
   - Each column is defined by a title and the cards it contains,
   - Each card is defined by a mandatory title, an optional description and the column that it belongs to.
5. The user should be able to:
   - display all columns with all cards,
   - create a new card,
   - modify a card,
   - delete a card,
   - add a column,
   - modify a column,
   - delete a column,
   - search for any keywords presents on one or multiple cards. The view should update without reloading the whole page,
   - drag and drop a card from one column to another,
   - click on a card to see its description. The description should be in the same view and extend the card container. It should not open in another page or popup/modal.
6. Cards and columns should be unique (i.e we should not see 2 cards or 2 columns with the same title).
7. Send the link of your github repository for reviewing to [jlow@maltem.com](mailto:jlow@maltem.com).

### Specification

- The code needs to work after we pull it, `npm install`, `npm test` and `npm start`, with no bugs.
- All code should be self-contained (i.e. there should not be any npm dependencies for serving etc. that are globally installed)
- Each Update must be saved to db.json file using the fake API
- The view should be responsive, user-friendly and clear.
- Use of version control (commits, branches, etc.) should be clear and well-documented, preferably with [semantic commit messages](https://seesparkbox.com/foundry/semantic_commit_messages) or similar.
- Documentation should be clear on how to install the application, as well as the structure of the application as reference for future development. Assume that other developers will continue work on your application with little or no context or knowledge transfer.
- Testing (where applicable) should cover as much of the application as possible. You are free to use any frameworks of choice (e.g. Jest, Mocha, Webdriver, web-component-tester, Cypress, etc.) to test your code. We suggest Jest. Also, consider adding a 'Testing Strategy' section in your README that briefly describes your approach.

##### Remarks

Feel free to add everything you think meaningful to your application as long as the above requirements are met.
In addition, to help you start this assessment:

- Making your application cross-browser is not compulsory.
- You might want to use Chrome for your development as it supports natively web components and their dependencies.

### Materials

- Your application will consume data of a fake API powered by [JSON Server](https://github.com/typicode/json-server). You will find more instructions about how to install it and use it clicking on the previous link.
- You will also find a fake DB file called `db.json` inside the `materials` folder of this repository. This fake DB contains structured data you will have to use for building your application.