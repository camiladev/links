import Head from 'next/head' 
import Link from 'next/link'

import { FiInstagram, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'

import styles from './layout.module.css' 
import utilStyles from '../styles/utils.module.css' 


const name = 'Camila Matos'
const arroba = '@mik4t3ch'
export const siteTitle = 'Camila Matos' 

export default function Layout ( { children } ) { 
    return ( 
        < div className = { styles.container } >
            < Head >
                < link rel = " icon " href = " /octocat.png " />
                < meta name = " description " content = " Onde guardo meus links de contato e alguns links que compartilho" />
                < meta property = " og:image " content = { ` https://og-image.now.sh/ ${ encodeURI ( siteTitle ) } .png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg ` } />
                < meta name = " og:title " content = { siteTitle } />
                < meta name = " twitter:card " content = " summary_large_image " />
            </ Head >
            < header className={ styles.headerMae} >

                <div className = { styles.header }>
                    < img src = " /images/profile.jpg " className = { ` ${ styles.headerHomeImage } ${ utilStyles . borderCircle } ` } alt = { name } />
                    < h1 className = { utilStyles.heading2Xl } > { name } </ h1 >
                    <p className = { utilStyles.headingLg }>
                    < Link href = " https://www.instagram.com/mik4t3ch/ " >
                            < a className = { utilStyles.colorInherit } > { arroba } </ a >
                    </ Link >
                    </p>
                </div > 
                <div className={styles.redeSocial}>
                    <a href= "https://www.instagram.com/mik4t3ch/"><div><FiInstagram /></div></a>
                    <a href= "https://www.linkedin.com/in/camila-b1ttencourt/"><div><FiLinkedin /></div></a>
                    <a href= "https://github.com/camiladev"><div><FiGithub /></div></a>
                    <a href= "mailto:camila.bittencourt@outlook.com"><div><FiMail /></div></a>

                </div>
            </ header >

            < main className={ styles.main }> { children } </ main >
            
        </ div > 
  ) 
}