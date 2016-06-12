import { expect } from 'chai';
import { gists } from '../../reducers/gists';

describe('Gist reducer:', () => {
  const updateAction = {
    type: 'UPDATE_GISTS',
    items: ['gist1', 'gist2'],
  };
  const initAction = {
    type: 'INIT',
  };

  it('should save received gists', () => {
    const previousState = {};

    expect(gists(previousState, updateAction)).to.be.deep.equal({ items: updateAction.items });
  });

  it('should provide initialState with config', () => {
    expect(gists(undefined, initAction)).to.be.deep.equal({ items: [], selectedId: null });
  });
});
