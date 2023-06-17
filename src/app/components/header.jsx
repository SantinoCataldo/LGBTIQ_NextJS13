import Link from 'next/link'
import styles from './header.module.css'

const Links = [{
  label: 'Mas Informacion',
  route: '/informacion'
}, {
  label: 'Heterosexualidad',
  route: '/heterosexualidad'
}, {
  label: 'Homosexualidad',
  route: '/homosexualidad'
}, {
  label: 'Asexualidad',
  route: '/asexualidad'
}, {
  label: 'Intersexualidad',
  route: '/intersexualidad'
}, {
  label: 'Transexualidad',
  route: '/transexualidad'
}, {
  label: 'Otros Generos',
  route: '/about'
}]

export function Header() {
  return (
    <header>
      <nav className={styles.container}>
        <Link href='/' className={styles.logo}>
          LGBTIQ+
        </Link>
        <div className={styles.links}>
          {Links.map(({ label, route }) => (
            <ul key={route} >
                <Link href={route} className={styles.link}>
              <li>{label}</li>
            </Link>
            </ul>
            
          ))}
      </div>
    </nav>
    </header >
  )
}