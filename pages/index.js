import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'

import { FiGlobe, FiPlay, FiBookOpen } from "react-icons/fi";
import {BiRocket} from "react-icons/bi"
import { FaCalculator } from "react-icons/fa"

export default function Home() {
  const trilha = "<NLW />";
  return (
      <Layout>
        <Head>
            <title> { siteTitle }</title>
        </Head>

          {/* Grid */}
        <section className={ styles.grid }>
      
            {/* Cada a é um card */}
            <a href="https://nextlevelweek.com/convite/camiladev" className={ styles.card }>
                <div className={ styles.iconCard }><BiRocket /></div>
                <div className={ styles.contentCard }>
                  <h3>{trilha}</h3>
                  <p>4ª Edição do Next Level Week acontecerá na semana de 22 a 28 de Fevereiro,
                     um evento 100% online e gratuito. Click aqui e garanta a sua vaga! </p>
                </div>

              </a>
              <a href="https://suaidadehoje.netlify.app/" className={ styles.card }>
                <div className={ styles.iconCard }><FaCalculator /></div>
                <div className={ styles.contentCard }>
                  <h3>Sua Idade</h3>
                  <p>Uma calculadora de idade, feita com react.</p>
                </div>

              </a>

              <a href="https://amzn.to/3p6wngL" className={ styles.card }>
                <div className={ styles.iconCard }><FiBookOpen /></div>
                <div className={ styles.contentCard }>
                  <h3>20% Desconto em Materiais Escolares</h3>
                  <p>Seja Prime e ganhe até 20% desconto em materiais escolares, frete grátis e muito mais.</p>
                </div>

              </a>

              <a href="https://digitalinnovation.one/sign-up?ref=LVQ82JPJST" className={ styles.card }>
                <div className={ styles.iconCard }><FiPlay /></div>
                <div className={ styles.contentCard }>
                  <h3>Digital Innovation One</h3>
                  <p>Plataforma de cursos de programação 100% online e grátis, onde tem Bootcamps com possibilidade de contratação!</p>
                </div>
              </a>

              {/* <a href="https://amzn.to/2XITvWt" className={ styles.card }>
                <div className={ styles.iconCard }><FiBookOpen /></div>
                <div className={ styles.contentCard }>
                  <h3>Mega Oferta: até 70% off em eBooks</h3>
                  <p>Válido até 19/01/2021 </p>
                </div>
              </a> */}

              {/* <a href="/" className={ styles.card }>
                <div className={ styles.iconCard }><FiGlobe /></div>
                <div className={ styles.contentCard }>
                  <h3>Link1</h3>
                  <p>Descrição leve</p>
                </div>
              </a> */}
          
        </section>
      </Layout>
  )
}
