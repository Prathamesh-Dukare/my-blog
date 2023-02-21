import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section className={utilStyles.headingMd}>
        <p>Hey 👋, I'm Prathamesh,
          I write code and love making useful products which solves real world problems. <br />In my free time I read books, watch documentaries and click some pictures🐬.</p>
        <p>
          Connect with me on{' '}
          <a href="https://peerlist.io/prathamesh" target="_blank">Peerlist</a>
        </p>
      </section>
    </Layout>
  );
}