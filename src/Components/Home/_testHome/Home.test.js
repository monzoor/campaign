import React from 'react';
import Home from '../Home';

describe('Name of the group', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Home />);
    });
    it('works', () => {
        expect(wrapper).not.toBeNull();
    });
});
