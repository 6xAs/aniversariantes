const FooterCard = ({ name, date }) => (
    <div className="footer-card">
      <div className="footer-circle"></div>
      <div className="footer-info">
        <p>{name}</p>
        <p>{date}</p>
      </div>
    </div>
  );
  
  export default FooterCard;