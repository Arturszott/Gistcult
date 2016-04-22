import { expect } from 'chai';
import { auth, config } from '../../reducers/auth';

describe('Auth reducer:', () => {
    const updateAction = {
        type: 'UPDATE_TOKEN',
        token: 'someToken'
    };
    const initAction = {
        type: 'INIT'
    };

    it('should save token', () => {
        const previousState = {};

        expect(auth(previousState, updateAction)).to.be.deep.equal({ token: updateAction.token })
    });

    it('should provide initialState with config', () => {
        expect(auth(undefined, initAction)).to.be.deep.equal({ token: null, config })
    });
});
