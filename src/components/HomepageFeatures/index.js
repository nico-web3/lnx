import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Blockchain Agnostic',
    Img: require('@site/static/img/first.png').default,
    description: (
      <>
        Choose from a range of blockchains for dApp deployment and reduce the blockchain-specific risks and limitations.
      </>
    ),
  },
  {
    title: 'Scalable',
    Img: require('@site/static/img/second.png').default,
    description: (
      <>
        Enhances dApp scalability by deploying on different blockchains. Select the blockchain that best suits your scalability needs, with the option to migrate if requirements change.
      </>
    ),
  },
  {
    title: 'Interoperable',
    Img: require('@site/static/img/third.png').default,
    description: (
      <>
        Cross-chain communication facilitates innovative cross-chain functionality, such as decentralized exchanges operating across multiple blockchains, harnessing the strengths of each network.
      </>
    ),
  },
  {
    title: 'Diverse User Bases',
    Img: require('@site/static/img/fourth.png').default,
    description: (
      <>
        Accessing multiple blockchains allows developers by tapping into diverse user bases, enhancing the potential for widespread adoption.
      </>
    ),
  },
  {
    title: 'Decentralized and Secure',
    Img: require('@site/static/img/fifth.png').default,
    description: (
      <>
        Maintain core blockchain principles, ensuring security and decentralization across multiple networks.
      </>
    ),
  },
  {
    title: 'Risk Mitigating',
    Img: require('@site/static/img/sixth.png').default,
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
