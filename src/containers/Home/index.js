import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

import { TopImage } from 'components/TopImage';

const metaData = {
    title: 'CodeCult Gister',
    description: 'From boilerplate to the app',
    canonical: 'http://example.com/path/to/page',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags,codecult',
        },
    },
};

export class Home extends Component {
    render() {
        // hardcoded client ID, should be passed from external config
        const CLIENT_ID = 'f3a6c9358a522a92fe6b';

        return (
            <section>
                <DocumentMeta {...metaData} />
                <TopImage>
                    <a href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`}>Login via Github</a>
                </TopImage>
            </section>
        );
    }
}
