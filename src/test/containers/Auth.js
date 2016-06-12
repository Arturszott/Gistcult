import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Auth from '../../containers/Auth/index';

import createMockedStore from '../createMockedStore';

describe('Auth container', () => {
  it('should render gists items', () => {
    const state = {
      auth: {
        token: '123',
      },
      gists: {
        items: [],
        selectedId: null,
      },
    };
    const mockedStore = createMockedStore(state);

    const container = mount(<Auth store={mockedStore} />);

    expect(container.find('Gists')).to.be.present();
    expect(container.find('Gists')).to.have.prop('items', state.gists.items);
  });
});
