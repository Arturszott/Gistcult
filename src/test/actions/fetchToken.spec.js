import nock from 'nock';
import { expect } from 'chai';
import sinon from 'sinon';

import fetchToken from '../../actions/fetchToken';

describe('fetchToken', function () {
    const code = 'someCode';
    const state = {
        auth: {
            config: {
                clientID: '123',
                clientSecret: '321'
            }
        }
    };

    let getStateStub;
    let dispatchSpy;
    let nextSpy;

    beforeEach(function () {
        getStateStub = sinon.stub().returns(state);
        dispatchSpy = sinon.spy();
        nextSpy = sinon.spy();

        nock.cleanAll();
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
    });

    it('should fetch user gists from github', function () {
        const storageMock = {
            getItem: sinon.stub().withArgs('access_token').returns(null),
            setItem: sinon.spy()
        };
        const callbacks = [
            sinon.stub().returns('callResultN')
        ];

        fetchToken(code, storageMock, callbacks, nextSpy)(dispatchSpy, getStateStub);

        const dispatchedAction = dispatchSpy.firstCall.args[0];

        return dispatchedAction().then(() => {
            expect(nextSpy).to.have.been.calledOnce;
            expect(dispatchSpy).to.have.been.calledWith('callResultN');
            expect(storageMock.setItem).to.have.been.calledWith('access_token', '123');
            expect(storageMock.getItem).to.have.been.calledWith('access_token');
        });
    });

    it('should load token from provided storage and call callbacks', function () {
        const storageMock = {
            getItem: sinon.stub().withArgs('access_token').returns('123')
        };
        const callbacks = [
            sinon.stub().returns('callResult1'),
            sinon.stub().returns('callResult2')
        ];

        fetchToken(code, storageMock, callbacks, nextSpy)(dispatchSpy, getStateStub);

        expect(dispatchSpy).to.have.been.calledWith('callResult1');
        expect(dispatchSpy).to.have.been.calledWith('callResult2');
        expect(dispatchSpy).to.have.been.calledTwice;
        expect(nextSpy).to.have.been.calledOnce;
    });
});
