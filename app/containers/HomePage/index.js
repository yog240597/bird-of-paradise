/*
 * by - @OneDotSolutions
 * @author - @amanmandloi, @yogeshpatel
 * @date   - @ Jul 18, 2020
 * @component -  @HomePage
 *
 *
 */

// <h1>
//   <FormattedMessage {...messages.header} />
// </h1>

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Navbar from '../../components/Navbar/index';
import Footer from '../../components/Footer/index';
import FontAwesome from 'react-fontawesome'
// import faStyles from 'font-awesome/css/font-awesome.css'

// css
import '../../assets/css/home_page.css';

// image
import LOGO from '../../assets/image/logo/logo.png';
import BOP from '../../assets/image/BOP chest freezer 2.jpg';


export default function HomePage() {
  return (
    <div>
      <section>
        <div className="main-header-background">
          <Navbar />
          <div className="header-title-text">
            <div className="header-title-sub-part-one">
              <img
                className="bsd-logo-main"
                src={LOGO}
                alt="Logo | Bird of Paradise"
              />
            </div>

            <div className="header-title-sub-part-two">
              <div>
                <h3>
                  We delight in creating gelato of the finest quality, inspired
                  by the botanical flavours of nature.
                </h3>
                <button className="header-btn">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="main-body-img">
            <div className="col-md-6">
	            <h1 className="main-body-h1">Share the love</h1>
	            <p className="main-body-p">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter.</p>
	            <p className="main-body-p">In the 15th century who is thought to have scrambled parts of Cicero De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                <button className="header-btn main-body-btn">
                Shop Now
                <FontAwesome
			        className="super-crazy-colors"
			        name="apple"
			        
			        size="2x"
			        spin
			        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
			      />
                </button>
            </div>
            <div className="col-md-6">
              <img
                className="img-right-side"
                src={BOP}
                alt="Logo | Bird of Paradise"
              />
              
            </div>
        </div>
        <div className="main-body-img">
            <div className="col-md-6">
              <h1 className="main-body-h1">Birds of Paradise delights in
              creating gelato of the finest
              quality, inspired by the botanical
              flavours of nature.</h1>
              <p className="main-body-p">We take long trips with our imagination to create our very own
                range of signature flavours, made from premium ingredients as
                far as possible. We flavour our gelato using natural and botani-
                cal ingredients: fruits, flowers, pods, herbs, and spices.
              </p>
              <button className="header-btn main-body-btn">
                Shop Now
                <FontAwesome
              className="super-crazy-colors"
              name="apple"
              
              size="2x"
              spin
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
                </button>
            </div>
            <div className="col-md-6">
              <img
                className="img-right-side"
                src={BOP}
                alt="Logo | Bird of Paradise"
              />
              
            </div>
        </div>
        <div className="main-body-img">
          <div className="col-md-4 img-center">
            <h1 className="main-body-h1">Delight & Paradise Set</h1>
              <p className="main-body-p">Enjoy our best-sellers all in one Lorem ipsum dolor sit
amet, consectetuer adipiscing elit, sed diam nonummy
nibh euismod tincidunt ut laoreet dolore.
              </p>
              <button className="header-btn main-body-btn">
                Shop Now
                <FontAwesome
              className="super-crazy-colors"
              name="apple"
              
              size="2x"
              spin
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
                </button>
          </div>
          <div className="col-md-4 img-center">
             <img
                className="bsd-logo-main"
                src={LOGO}
                alt="Logo | Bird of Paradise"
              />
              <h4 className="main-body-h4">Delight & Paradise Set</h4>
              <p className="main-body-p-h4">Enjoy our best-sellers all in one Lorem ipsum dolor sit
amet, consectetuer adipiscing elit, sed diam nonummy
nibh euismod tincidunt ut laoreet dolore.
              </p>
          </div>
          <div className="col-md-4 img-center">
             <img
                className="bsd-logo-main"
                src={LOGO}
                alt="Logo | Bird of Paradise"
              />
              <h4 className="main-body-h4">Delight & Paradise Set</h4>
              <p className="main-body-p-h4">Enjoy our best-sellers all in one Lorem ipsum dolor sit
amet, consectetuer adipiscing elit, sed diam nonummy
nibh euismod tincidunt ut laoreet dolore.
              </p>
          </div>
        </div>
        <div>
         <Footer/>
        </div>
      </section>
    </div>
  );
}
