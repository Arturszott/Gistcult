import React, { Component } from 'react';
import LoadingOrderAnimation from 'react-loading-order-with-animation';

/* component styles */
import { styles } from './styles.scss';

export default class TopImage extends Component {

  render() {
    return (
      <section className={`${styles}`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <LoadingOrderAnimation animation="fade-in"
                move="from-bottom-to-top"
                distance={30}
                speed={700}
                wait={700}
              >
                <h1 className="title">
                  Gist editor
                </h1>
              </LoadingOrderAnimation>
              <LoadingOrderAnimation animation="fade-in"
                move="from-bottom-to-top"
                distance={60}
                speed={700}
                wait={900}
              >
                <div>
                  {this.props.children}
                </div>
              </LoadingOrderAnimation>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
