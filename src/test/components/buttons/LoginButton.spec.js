import React from 'react';
import nock from 'nock';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import LoginButton from '../../../components/buttons/LoginButton';

describe('LoginButton', function () {
    it('should should have correct github href', function () {
        const button = shallow(<LoginButton clientID='123' />);
        const expectedUrl = 'https://github.com/login/oauth/authorize?client_id=123&scope=gist';

        expect(button.find('a')).to.have.prop('href', expectedUrl);
    });
});

