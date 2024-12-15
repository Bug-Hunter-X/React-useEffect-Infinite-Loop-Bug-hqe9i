# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications involving the `useEffect` hook: creating an infinite loop.  The `bug.js` file shows the erroneous code, while `bugSolution.js` provides the correct implementation.

## Problem:

The `useEffect` hook in `bug.js` attempts to update the `count` state within its own callback. This causes the component to constantly re-render, resulting in an infinite loop and a crash.

## Solution:

The `bugSolution.js` file fixes this by correctly managing the dependency array of `useEffect`. By removing `count` from the dependency array, the effect runs only once after the initial render.