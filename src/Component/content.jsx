import React, { Component, Fragment } from 'react';
import "../css/index.css"

export default class Content extends Component {
  render() {
    return (
      <Fragment>
          <header className='header-classes'>
            <h1>TRY GLASSES APP ONLINE</h1>
          </header>
          <section className='content'>
            <div className="item container">
              <div className="item-img">
                  <img src="/img/model.jpg" alt="img" />
                  <img className="img-classes-onface" src='/img/v8.png' alt='img'/>
              </div>
              <div className="item-img">
                  <img src="/img/model.jpg" alt="img" />
              </div>
            </div>
            <div className="list-classes container">
                <div className="row">
                  <div className="col-2">
                    <img src="/img/v9.png" alt="" />
                  </div>
                  <div className="col-2">
                    <img src="/img/v2.png" alt="" />
                  </div>
                  <div className="col-2">
                    <img src="/img/v3.png" alt="" />
                  </div>
                  <div className="col-2">
                    <img src="/img/v4.png" alt="" />
                  </div>
                  <div className="col-2">
                    <img src="/img/v5.png" alt="" />
                  </div>
                  <div className="col-2">
                    <img src="/img/v6.png" alt="" />
                  </div>
                  <div className="col-2">
                    <img src="/img/v7.png" alt="" />
                  </div>
                  
                </div>
            </div>
          </section>
      </Fragment>
    )
  }
}
