import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';

import TopImage from '../../components/TopImage';
import LoginButton from '../../components/buttons/LoginButton';

const metaData = {
    title: 'CodeCult Gister',
    description: 'From boilerplate to the app',
    canonical: 'http://example.com/path/to/page',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags,codecult'
        }
    }
};

@connect(
    (state) => state.auth
)
export class Home extends Component {
    render() {
        return (
            <section>
                <DocumentMeta {...metaData} />
                <TopImage>
                    <LoginButton clientId={this.props.config.clientID} />
                </TopImage>
            </section>
        );
    }
}
