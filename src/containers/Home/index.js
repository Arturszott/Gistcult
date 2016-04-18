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
    return (
      <section>
        <DocumentMeta {...metaData} />
        <TopImage />
      </section>
    );
  }
}