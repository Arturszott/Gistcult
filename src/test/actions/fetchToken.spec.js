import nock from 'nock';
import { expect } from 'chai';
import sinon from 'sinon';

import fetchToken from '../../../src/actions/fetchToken';

describe('fetchToken', function () {
    const code = 'someCode';

    it('should fetch user gists from github', function () {
        const state = {
            auth: {
                config: {
                    clientID: '123',
                    clientSecret: '321'
                }
            }
        };
        const getStateStub = sinon.stub().returns(state);
        const dispatchSpy = sinon.spy();
        const nextSpy = sinon.spy();

        nock('https://github.com')
            .post('/login/oauth/access_token')
            .query({
                client_id: '123',
                client_secret: '321',
                scope: 'gist',
                code
            })
            .reply(200, {
                access_token: '123'
            });

        fetchToken(code, nextSpy)(dispatchSpy, getStateStub);

        const dispatchedAction = dispatchSpy.getCall(0).args[0];

        return dispatchedAction().then(() => {
            expect(nextSpy).to.have.been.calledOnce;
            expect(dispatchSpy).to.have.been.calledThrice;
        });
    });
});

