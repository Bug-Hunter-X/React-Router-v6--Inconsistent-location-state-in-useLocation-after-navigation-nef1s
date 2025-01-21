# React Router v6: Inconsistent location.state in useLocation after navigation

This repository demonstrates a bug in React Router v6 where accessing `location.state` from `useLocation()` can return `null` unexpectedly, even when state was passed during navigation. The problem is particularly noticeable when the component is rendered after the navigation has finished.

## Bug Description

When navigating to a component with `useNavigate({ state: { ... } })`, `location.state` might be `null` if the component mounts after the transition completes. This is inconsistent and can lead to unexpected application behavior.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the development server.
4. Navigate between routes, and observe the console logs to see the inconsistent behavior of `location.state`.

## Solution

The solution involves using `useEffect` hook to check for `location.state` after the component has mounted and potentially using the `useParams` hook to get parameters from the URL. The example provided in the `bugSolution.js` illustrates this approach.