import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import CategoryGrid from '@site/src/components/CategoryGrid';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className="container">
        <ThemedImage
          className={styles.logo}
          alt="Logo Portal Dev"
          sources={{
            light: useBaseUrl('/img/logo.png'),
            dark: useBaseUrl('/img/logo-white.png'),
          }}
        />
        <Heading as="h1" className={styles.title}>
          Portal <span className={styles.accent}>Dev</span>
        </Heading>
        <p className={styles.subtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Começar a ler
          </Link>
          <Link className="button button--outline button--secondary button--lg" to="/docs/guia-de-estilo">
            Guia de estilo
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Início"
      description="Portal Dev: caderno de estudos com documentação técnica organizada por categorias.">
      <HomepageHeader />
      <main className="container margin-vert--xl">
        <Heading as="h2" className={styles.sectionTitle}>
          Base de estudos e aprendizado contínuo
        </Heading>
        <CategoryGrid />
      </main>
    </Layout>
  );
}
