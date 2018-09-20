import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

configure( { adapter: new Adapter() } );

test( 'should render ExpenseListItem correctly', () => {
	const wrapper = shallow( <ExpenseListItem { ...expenses[0] } />);
	expect( wrapper ).toMatchSnapshot();
});
