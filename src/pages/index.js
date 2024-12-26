import Head from 'next/head';
import styles from '../styles/globals.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aniversariantes</title>
      </Head>
      <div className="container">
        <h1 className="month-title">ANIVERSARIANTES MÊS: JANEIRO</h1>
        <div className="main-circle">
          <div className="circle"></div>
          <h2>PARABÉNS</h2>
          <h1 className="name-title">NOME PESSOA</h1>
          <p className="message">
            Por mais um ano de vida! Sempre com dedicação. Um feliz aniversário!
            Sorte, amor e união! Muito êxito porque hoje quem brilha é você!
            Abraços, tudo de bom.
          </p>
        </div>
        <div className="footer">
          <h3>Próximos Aniversariantes:</h3>
          <div className="footer-cards">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="footer-card">
                <div className="footer-circle"></div>
                <div className="footer-info">
                  <p>ANDERSON SEIXAS</p>
                  <p>00/00/0000</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
