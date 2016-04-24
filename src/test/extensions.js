import chai from 'chai';
import nock from 'nock';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';
import chaiAsPromised from 'chai-as-promised';

import './prepareWindow';


require.extensions['.css'] = () => {
    return null;
};

chai.use(sinonChai);
chai.use(chaiEnzyme());
chai.use(chaiAsPromised);

//nock.recorder.rec();
nock.disableNetConnect();
