# Expo Image Component URI Loading Error

This repository demonstrates a common issue with Expo's Image component where images fail to load from specified URIs.  The `bug.js` file showcases the problematic code.  The solution, which handles potential errors and provides better feedback to the user, is found in `bugSolution.js`.

## Problem:

The `Image` component fails to load an image using a potentially incorrect or inaccessible URI. This results in a broken image display or no image at all.

## Solution:

The `bugSolution.js` offers improved error handling using asynchronous programming and a fallback mechanism to display a placeholder image when loading fails.