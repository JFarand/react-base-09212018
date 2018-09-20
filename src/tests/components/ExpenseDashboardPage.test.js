//react-test-renderer
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

configure( { adapter: new Adapter() } );
test( 'should render ExpenseDashboardPage correctly', () => {
		const wrapper = shallow( <ExpenseDashboardPage />);
		expect( wrapper ).toMatchSnapshot();


});
