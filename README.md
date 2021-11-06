# mobile-flashcards Project

This is an updated read me file for the mobile-flashcards Project. It contains a decription of
the updated application fle structure. It also includes descriptions of the new React
components that were added to the application.

## Installation and launch instructions
Platform: Android

This application can be run on expo installed on an android device

This application was created with create-react-native-app and used the blank expo template
To run the application, execute the following commands in the following order
from the application root directory:

* install all project dependencies with `npm install`
* start the application with `npm start`

## Project structure

This is a directory tree for the application.

```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── actions
│   ├── index.js # action creators
└── components
│   ├── DeckListView.js # home view showing created deecks and no. of cards in each deck
│   ├── IndividualDeckView.js # view for a single deck
│   ├── NewDeckView.js # view to add a new deck to the application
│   ├── NewQuestionView.js #view to create cards for a deck
│   └── Quiz.js # view to take a quiz
── reducers # reducers
│   ├── index.js
── utils
    ├── api.js #handle ansync storage logic for the application
    ├── notifications.js #handle application notifications
