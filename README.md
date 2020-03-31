# github-viewer
An exercise in using the react-redux methodology.  This app allows a user to search for a github user and display their public info and repos.  Redux-thunk is used to resolve fetches to the external github api.  

GitHub api documentation: https://developer.github.com/v3/

## Application Architecture

* React/Redux
* Action, reducer, selector pattern
* Redux-thunk for services
* loading spinner
* snapshot tests for all components
* unit tests for all actions, reducers, and selectors

## Application Features

Users can search any GitHub username.  For matches, the following is displayed:

* username
* follower count
* following count
* link to user's GitHub profile
* a list of the users' first 20 repositories, in alphabetical order
