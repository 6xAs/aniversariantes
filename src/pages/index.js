import Header from '../components/Header';
import MainCircle from '../components/MainCircle';
import Footer from '../components/Footer';
import styles from '../styles/globals.css'; 

function getMonth() {
  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  return monthNames[new Date().getMonth()];
}

export default function Home() {
  const currentMonth = getMonth();

  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="month-title">ANIVERSARIANTES MÊS: {currentMonth}</h1>
        <MainCircle />
        <Footer />
      </div>
    </div>
  );
}