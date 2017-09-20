# Task "option 1"

```sh
npm install -g create-react-app
npm install
npm start
```

## Overview

UI based on Material-UI.

API made with firebase.

Store made with custom, immutable, event driven, state container (like redux, but faster for development in small projects).

## Getting deeper

Store, services, and alert have only one instance.

The only connection between app components is through store, which sends data and call event listeners.

Component in "Sign up", and "Log in" is the same, configurable component.


## Getting even deeper

Store has references to listener which potentaily unefective/harmful during unmounting - this is why removing them is necessary.

Tabs component from Material-UI keeps references and mounted objects until specific tab is visible - this could require some changes, for example when components under tab are CPU consuming but realtively cheap in creating them with every Tab "focus".

Initial state of store could be in some separated file, the same with services configuration.

Components are spearated into two logical groups:
* top components - which exist only in one instance in whole ap, and are containers for other components
* common components - just minions

