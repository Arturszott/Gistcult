import { expect } from 'chai';
import { auth } from '../../reducers/auth';

describe('Auth reducer:', () => {
    const previousState = {};
    const updateAction = {
        type: 'UPDATE_TOKEN',
        token: 'someToken'
    };

    it('should save token', () => {
        expect(auth(previousState, updateAction)).to.be.deep.equal({ token: updateAction.token })
    });
});

