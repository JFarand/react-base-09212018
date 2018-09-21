import React from 'react';
import ReactDOM from 'react-dom';
import { Provider  } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import {  setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

//store.dispatch( addExpense( { description: 'Water bill', amount: 4500 } ) );
//store.dispatch( addExpense( { description: 'Gas bill', createdAt: 1000 } ) );
//store.dispatch( addExpense( { description: 'Rent', amount: 109500 } ) );

//const state = store.getState();
//const visibleExpenses = getVisibleExpenses( state.expenses, state.filters );

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx , document.getElementById('app'));

//const store = configureStore();

//console.log(store.getState());


//store.subscribe(() => {
//	const state = store.getState();
//	const visibleExpenses = getVisibleExpenses( state.expenses, state.filters );
//	console.log( visibleExpenses );
//});

//const expenseOne = store.dispatch( addExpense( { description: 'Water bill', amount: 100, createdAt:21000  }  )  );

//const expenseTwo = store.dispatch( addExpense( { description: 'Gas bill', amount: 300, createdAt: -1000  }  )  );

//const expenseThree = store.dispatch( addExpense( { description: 'Rent', amount: 5555, createdAt: 4444 } ));

//store.dispatch( removeExpense( { id: expenseOne.expense.id  }  )  );
//
//store.dispatch( editExpense( expenseTwo.expense.id, { amount: 500 } )  );
//
//store.dispatch( setTextFilter('bill') );
//store.dispatch( setTextFilter('water') );
//
//store.dispatch( sortByAmount() ); //amount
//store.dispatch( sortByDate() ); //date

//store.dispatch( setStartDate(125) );
//store.dispatch( setStartDate() );
//store.dispatch( setEndDate(1250) );






