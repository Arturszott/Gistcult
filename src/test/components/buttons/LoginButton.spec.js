import React from 'react';
import nock from 'nock';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import LoginButton from '../../../components/buttons/LoginButton';

describe('LoginButton', function () {
    it('should should have correct github href', function () {
        const button = shallow(<LoginButton />);
        const expectedUrl = '/login';

        expect(button.find('a')).to.have.prop('href', expectedUrl);
    });
});

