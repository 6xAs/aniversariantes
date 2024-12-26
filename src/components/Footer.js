import FooterCard from './FooterCards';

const Footer = () => (
  <div className="footer">
    <h3>Próximos Aniversariantes: Fevereiro  </h3>
    <div className="footer-cards">
      {Array.from({ length: 8 }).map((_, index) => (
        <FooterCard key={index} name="ANDERSON SEIXAS" date="00/00/0000" />
      ))}
    </div>
  </div>
);

export default Footer;