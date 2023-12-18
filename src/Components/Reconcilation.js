//Reconciliation in React refers to the process by which React updates the user interface 

//to match the most recent changes in the application's state

// When there are updates to the state or props of a component,
// React needs to determine which parts of the UI need to be updated and efficiently make those changes.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// React's reconciliation algorithm is responsible for efficiently updating the UI 
// by comparing the previous render of a component with its new render.

///////////////////////////////////////////////////////////////////////////////////////////////////

// It performs a diffing process to identify the differences between 
// the two renders and applies only the necessary updates to the DOM.


// 1. Element Creation:React creates a lightweight description of 
// the UI called the Virtual DOM based on the component's render method. 

// 2.Diffing: React performs a diffing process by comparing the new Virtual DOM with the previous one.
//  It identifies the differences between the two trees


// 3.Reconciliation: React reconciles the differences by updating only the necessary parts of the DOM to 
//reflect the new state of the application. 
// It tries to minimize the number of DOM operations for efficiency


// 4.Component Lifecycle: React invokes lifecycle methods like componentDidUpdate and getDerivedStateFromProps 
// to allow components to respond to the changes in their props or state.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// The reconciliation process in React is efficient because it minimizes the number of actual DOM manipulations.

// Instead of re-rendering the entire UI, React updates only the specific components and DOM nodes that have changed. 