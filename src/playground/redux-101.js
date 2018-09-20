import { createStore  } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
		type: 'INCREMENT',
		incrementBy
	});

const decrementCount = ({ decrementBy = 1} = {}) => ({
	type: 'DECREMENT',
	decrementBy
});

const setCount = ({ setTo = 0  } = {}) => ({
	type: 'SET',
	setTo
});

const resetCount = () => ({
	type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0  }, action) => {
	
	switch (action.type){
		case 'INCREMENT':
			return {
				case: 'increment',	
				count: state.count + action.incrementBy
			};
		case 'DECREMENT':
			
			return {
				case: 'decrement',
				count: state.count - action.decrementBy
			};
		case 'SET':
			return {
				case: 'set',
				count: action.setTo
			};
		case 'RESET':
			return {
				case: 'reset',
				count: 0
			};
		default: 
			return state;
	}
};

const store = createStore( countReducer  );

const unsubscribe = store.subscribe(() => {
	console.log("Subscribe state: ",store.getState());
});



// Actions - nothing more than an object that gets sent to the store


// I'd like to increment the count
//store.dispatch({
//	type: 'INCREMENT',
//	incrementBy: 5
//});

store.dispatch(incrementCount({ incrementBy: 3  }));

store.dispatch(incrementCount());

//I'd like to decrement the count
store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 100}));

store.dispatch(decrementCount({decrementBy: 'test'}));

store.dispatch(setCount({ setTo: 76  }));
//store.dispatch({
//	type: 'SET',
//	count: 76
//});


//I'd like to reset count to zero

store.dispatch(resetCount());

//store.dispatch({
//	type: 'RESET'
//});



