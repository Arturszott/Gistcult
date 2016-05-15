import React from 'react';
import nock from 'nock';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { Col } from 'react-bootstrap'

import Gists from '../../components/gists/Gists';
import Auth from '../../containers/Auth/index';

import createMockedStore from '../createMockedStore';

describe('Auth container', function () {
    it('should render gists items', function () {
        const state = {
            auth: {
                token: '123'
            },
            gists: {
                items: [],
                gistData: {},
                selectedId: null
            }
        };
        const mockedStore = createMockedStore(state);

        const container = mount(<Auth store={mockedStore} />);

        expect(container.find('Gists')).to.be.present();
        expect(container.find('Gists')).to.have.prop('items', state.gists.items);
        expect(container.find(Col)).to.have.length(3);
    });
});

