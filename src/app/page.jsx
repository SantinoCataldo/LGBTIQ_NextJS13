import Image from 'next/image'
import styles from './page.module.css'
import { bebas, inter, playfair } from './components/fonts'

export default function Home() {
  return (
    <><title>LGBTIQ+</title>
      <div className={styles.container}>
      <div className={styles.item2}>
        <h1>Lgbtiq+</h1>
        <span className={bebas.variable}>Todos necesitamos amor</span>
      </div>
      <div className={styles.item}/>
    </div ></>
  )
}
