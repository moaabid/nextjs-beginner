import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mohammed Aabid</title>
      </Head>

      <h1 className={styles.title}>Hello world</h1>
    </div>
  )
}
