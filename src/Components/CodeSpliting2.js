// Code splitting, 

// // It involves breaking down a large JavaScript bundle into smaller, more manageable chunks, and loading them only when they are needed.

// By splitting the code, you can reduce the initial load time and improve the overall performance of your application.




// React.lazy and Suspense: React provides the React.lazy function along with 
// the Suspense component for easy code splitting. With React.lazy, you can dynamically import components 
// using a function that returns a Promise of the component. 
// The Suspense component allows you to wrap the lazy-loaded component and provide
//  fallback content while the component is being loaded. Here's an example:

import React, { lazy, Suspense } from 'react';

const MyLazyComponent = lazy(() => import('./MyLazyComponent'));

const MyComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MyLazyComponent />
    </Suspense>
  );
};
////////////////////////////////////////////////////////////////////////////////////////////////////////


// Webpack: If you're using Webpack as your build tool, it provides built-in support for code splitting. 
// You can use dynamic import() syntax to split your code into separate chunks. 
// Webpack analyzes your code and creates separate bundles for each dynamically imported module.
//  Here's an example using Webpack:

//    const MyComponent = () => {
//     return (
//       <div>
//         <button onClick={() => import('./MyLazyComponent')}>
//           Load Lazy Component
//         </button>
//       </div>
//     );
//   };


// React Router: If you're using React Router for routing in your application, it also supports code splitting out of the box.
//  You can use 
// the React.lazy function along with React Router's Route component to dynamically load components for specific routes.
//  Here's an example:

import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./Contact'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Suspense>
    </Router>
  );
};

  






