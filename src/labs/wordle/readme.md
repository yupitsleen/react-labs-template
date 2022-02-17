# Worldle Lab 
The following lab will focus on using theReact Context API and the `react-query` lib to manage state and actions for a Wordle like game.  A game in which a user will get 6 attempts to guess a random 5-letter word that is selected from a given data source.

## Summary
The `WordleLab` will function similar to Wordle without the custom keyboard.  Instead there will be a textfield that a user types their guess into.  The word entered will be validated to make sure the word is 5 characters long and matches one of the words in the word data source.  If the word is invalid an error message will inform the user that the word is invalid.  If it is a valid attempt the word will be checked against the current selected word and the result will be displayed in the row of boxes that are associated with their current attempt.  Each box will contain a letter of the guessed word and will show whether the letter was a match (green box), was somewhere else in the word (yellow box) or not in the word (gray box).

When the user guesses the correct word they will be shown a success message with a button to play again.  Otherwise, if the user goes through all of their attempts without guessing the word, the user will be shown a failure message with a button to try again.

If a user decides to play (or try) again the game will be reset and a new random word will be chosen.

## Criteria
- Use `react-query` to load the list of possible words.  The words can come from a local file or from an external data source.
  - Words available here: [https://ostreactlabs.blob.core.windows.net/ostreactlabscdn/wordle/words.json]()
- The game state and actions should be manage using a `WordleGameProvider` that acts as a wrapper for a `GameStateContext` and a `GameDispatchContext`.
  - The `GameStateContext` is used to store the current state of the game
  - The `GameDispatchContext` is used to dispatch actions to the `wordleGameReducer`.
- Custom hooks will be used to interact with the state and dispatch context.
  - ex. `useWordleState` and `useWordleDispatch`
- Attempted words should be validated using a custom hook that returns a word validator
  - ex. `useWordValidator`
- The game state should contain the current word and each attempt (along with result)
- The following actions should be supported
  - START_GAME
  - ATTEMPT_WORD
  - RESET_GAME
