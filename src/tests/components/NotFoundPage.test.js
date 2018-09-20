//react-test-renderer
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';

configure( { adapter: new Adapter() } );
test( 'should render NotFoundPage correctly', () => {
		const wrapper = shallow( <NotFoundPage />);
		expect( wrapper ).toMatchSnapshot();


});
