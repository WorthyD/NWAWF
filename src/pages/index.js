import * as React from 'react';
import nwawf from '../images/nwawf.jpg';
import Layout from '../layouts/index';
import './index.scss';
// data
// markup
const IndexPage = () => {
  return (
    <Layout>
      <main className="home-screen">
        <div>
          <img src={nwawf} alt="nwawf" />
          <p className="home-screen__info">
            Let's not pull any punches. We of the NWAWF realize we're not top
            performers. We realize we have no athletic ability. We realize that
            in the eyes of most of the other backyard wrestlers, we're a
            disgrace. However, we also realize that we have what's most
            important... and that is a damn good time. Looking for a good laugh
            and a decent story told through bad wrestling? You've come to the
            right place, my friends...
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
