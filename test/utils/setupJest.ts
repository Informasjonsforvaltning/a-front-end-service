import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

enzyme.configure({ adapter: new Adapter() });
React.useLayoutEffect = React.useEffect;
