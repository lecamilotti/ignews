import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
    <Head>
      <title>Posts | TechNews </title>
    </Head>
      <main className={styles.container}>
      <div className={styles.posts}>
        <a href="#">
          <time>21 april 2021</time>
          <strong>Creating a Monorepo with Lerna & yarn workspaces</strong>
          <p>In this guide, you will learn to create a Monorepo to manage multiple packages</p>
        </a>
        <a href="#">
          <time>21 april 2021</time>
          <strong>Creating a Monorepo with Lerna & yarn workspaces</strong>
          <p>In this guide, you will learn to create a Monorepo to manage multiple packages</p>
        </a>
        <a href="#">
          <time>21 april 2021</time>
          <strong>Creating a Monorepo with Lerna & yarn workspaces</strong>
          <p>In this guide, you will learn to create a Monorepo to manage multiple packages</p>
        </a>
        <a href="#">
          <time>21 april 2021</time>
          <strong>Creating a Monorepo with Lerna & yarn workspaces</strong>
          <p>In this guide, you will learn to create a Monorepo to manage multiple packages</p>
        </a>
      </div>

      </main>




    </>

  );
}