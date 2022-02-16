# Timer Lab 
Create a custom hook called `useTimer` that will be used to display a stopwatch like time in a `Timer` component.  The component should allow a format to be specified.  The default format should be `hh:mm:ss`. The `useTimer` hook should also return functions to `pause`, `start` or `reset` the timer.

## Steps
1. Update `useTimer` hook to set the `time` value every 1s
   - Need function to convert seconds into `{ hours, minutes, seconds }`
2. Update `pause` function in `useTimer` to stop the timer but maintain the current seconds
3. Update `start` function to start the timer (updating `time` every 1s)
4. Update `reset` function to stop the timer and reset the seconds back to 0
5. Add buttons to the timer component to control the timer (start, pause, reset)
   - start and pause buttons should be conditional rendered based off of whether the timer is active
6. Update the `formatTime` function within the `Timer` component to render the time using the given `displayFormat` property
   - a singe character doesn't pad the number, but 2 characters always pads the number
   - ex: `hh:mm:ss` would display `05:03:09` while `h-m-s` would display: `5-3-9`
