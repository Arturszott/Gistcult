import React from 'react';
import nock from 'nock';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { Col } from 'react-bootstrap'

import Gists from '../../../components/Gists/Items';
import Auth from '../../../containers/Auth';

import createMockedStore from '../../createMockedStore';

describe('Auth container', function () {
    it('should should have correct github href', function () {
        const state = {
            auth: {
                token: '123'
            },
            gists: {
                items: []
            }
        };
        const mockedStore = createMockedStore(state);

        const container = mount(<Auth store={mockedStore} />);

        expect(container.find('Items')).to.have.length(1);
        expect(container.find('Items')).to.have.prop('items', state.gists.items);
        expect(container.find(Col)).to.have.length(3);
    });
});

