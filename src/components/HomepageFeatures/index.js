import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Blockchain Agnostic',
    Img: require('@site/static/img/agnostic.png').default,
    description: (
      <>
        Choose from a range of blockchains for dApp deployment and reduce the blockchain-specific risks and limitations.
      </>
    ),
  },
  {
    title: 'Scalable',
    Img: require('@site/static/img/scalable.png').default,
    description: (
      <>
        Enhance dApp scalability by deploying on different blockchains. Select the blockchain that best suits your scalability needs, with the option to migrate if requirements change.
      </>
    ),
  },
  {
    title: 'Interoperable',
    Img: require('@site/static/img/interoperable.png').default,
    description: (
      <>
        Cross-chain communication facilitates innovative cross-chain functionality, such as decentralized exchanges operating across multiple blockchains, harnessing the strengths of each network.
      </>
    ),
  },
  {
    title: 'Diverse User Bases',
    Img: require('@site/static/img/users.png').default,
    description: (
      <>
        Accessing multiple blockchains allows developers to tap into diverse user bases, enhancing community growth and the potential for widespread adoption of their dApps.
      </>
    ),
  },
  {
    title: 'Decentralized and Secure',
    Img: require('@site/static/img/secure.png').default,
    description: (
      <>
        Maintain core blockchain principles, ensuring security and decentralization across multiple networks.
      </>
    ),
  },
  {
    title: 'Risk Mitigating',
    Img: require('@site/static/img/risk.png').default,
    description: (
      <>
         Deploy on various blockchains and reduce dependence on a single network, mitigating risks associated with technical or governance issues.
      </>
    ),
  },
];

function Feature({Svg, Img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
        {Img && <img src={Img} alt={title} className={styles.featureSvg} />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
