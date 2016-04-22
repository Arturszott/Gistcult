import nock from 'nock';
import { expect } from 'chai';
import sinon from 'sinon';

import fetchGists from '../../actions/fetchGists';

describe('fetchGists', function () {
    const token = 'someToken';

    it('should fetch user gists from github', function () {
        const dispatchSpy = sinon.spy();
        const nextSpy = sinon.spy();

        nock('https://api.github.com')
            .get('/gists')
            .query({
                access_token: token
            })
            .reply(200, {
                items: [ 1, 2, 3 ]
            });

        fetchGists(token, nextSpy)(dispatchSpy);

        const dispatchedAction = dispatchSpy.getCall(0).args[0];

        return dispatchedAction()
            .then(() => {
                expect(dispatchSpy).to.have.been.calledTwrice;
            });
    });
});

