// React web apps ==>  actually a collection of independent components that run according to the interactions made with them




// Every React Component has a ==> lifecycle of its own, lifecycle of a component can be defined as the ==> series of methods 


// that are invoked in different stages of the component’s existence. 








////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Every React Component have 4 Satges

// Initialization=> component is consturcted with given => props and stages ==> This is done in the constructor of a Component Class

// Mounting: Mounting is the stage of rendering   ==> the JSX returned by ==> the render method itself.



// Updating: Updating is the stage when the state of a component is updated and the application is repainted


// Unmounting: As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// ////////functions containing “Will” represents before some specific phase and “Did” represents after the completion of that phase. 


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Mouning methods


// componentWillMount() Function: As the name clearly suggests, this function is invoked right before the component 


// is mounted on the DOM i.e. 


// this function gets invoked once before the render() function is executed for the first time


// componentDidMount() Function: Similarly to the previous one this function is invoked right after the component is mounted on the DOM i.e.


// this function gets invoked once after the render() function is executed for the first time




/////////////////////////////

// React is a JS library that helps create Active web pages easily.

//  Now active web pages are specific pages that behave according to their user.




// Updation is the phase where the states and props of a component are updated followed by some user 

// events such as clicking, pressing a key on the keyboard, etc.





// componentWillReceiveProps() Function: This is a Props-exclusive Function and is independent of States.

//  This function is invoked before a mounted component gets its props reassigned.

// The function is passed the new set of Props which may or may not be identical to the original Props. 


componentWillReceiveProps(newProps) 
{ 
    if (this.props !== newProps) { 
        console.log(" New Props have been assigned "); 
        // Use this.setState() to rerender the page. 
    } 
} 


//////////////////////////////////////

// setState() Function: This is not particularly a Lifecycle function and can be invoked explicitly at any instant. 
// This function is used to update the state of a component. You may refer to this article for detailed information


/////////////////////////////////////

//The Function takes the new Props and new State as the arguments and returns whether to re-render or not.

// shouldComponentUpdate() Function => return true or false
// By default, every state or props update re-renders the page but this may not always be the desired outcome, 
// sometimes it is desired that updating the page will not be repainted. 

//shouldComponentUpdate() is invoked before rendering an already mounted component when new props or states are being received.

// If returned false then the subsequent steps of rendering will not be carried out

////////////////////////////////////////////////////////////////////////////



// componentWillUpdate() Function:===> before the component is re-rendered ===> after the updation of State or Props.


// componentDidUpdate() Function: ===>  after the component is re-rendered ====> after the updation of State or Props


///////////////////////////////////////////////////////////////////////////////////

// componentWillUnmount() Function: This function is invoked before the component is finally unmounted from the DOM i.e. 
// this function gets invoked once before the component is removed from the page and this denotes the end of the lifecycle




import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
	


	constructor(props) {
		super(props);
		this.state = { hello: "World!" };
	}

	componentWillMount() {
		console.log("componentWillMount()");
	}

	componentDidMount() {
		console.log("componentDidMount()");
	}

	changeState() {
		this.setState({ hello: "Geek!" });
	}

	render() {
		return (
			<div>
				<h1>GeeksForGeeks.org, Hello{this.state.hello}</h1>
				<h2>
					<a onClick={this.changeState.bind(this)}>Press Here!</a>
				</h2>
			</div>);
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("shouldComponentUpdate()");
		return true;
	}

	componentWillUpdate() {
		console.log("componentWillUpdate()");
	}

	componentDidUpdate() {
		console.log("componentDidUpdate()");
	}
}

ReactDOM.render(
	<Test />,
	document.getElementById('root'));



