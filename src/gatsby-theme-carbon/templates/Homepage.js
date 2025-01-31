import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/carbon.jpg';

const FirstLeftText = () => <p>Goals of the Guide</p>;

const FirstRightText = () => (
  <p>
    <ol>
      <li>1. Comprehensive learning for hybrid cloud and multicloud developers.</li>
      <li>2. An agnostic view of how various clouds are using open source in their offerings.</li>
    </ol>
  </p>
);

const SecondLeftText = () => <p>O'Reilly survey</p>;

const SecondRightText = () => (
  <p>
    <i>Developers who want to develop cloud applications should work on honing their OSS skills (which underly every major cloud platform) instead of only focusing on building skills for a proprietary cloud.</i>
    <a
      className={calloutLink}
      href="https://developer.ibm.com/blogs/oreilly-open-source-skill-survey-blog">
      O'Reilly survey →
    </a>
  </p>
);

const BannerText = () => <h1>Open Source Cloud Guide</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
