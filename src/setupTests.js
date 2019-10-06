import React from 'react';
import Enzyme, { shallow, render, mount, configure } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

expect.addSnapshotSerializer(
    createSerializer({
        mode: 'deep'
    })
);

configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
