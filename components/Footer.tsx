const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="copyright-footer">
              <p className="mb-8">{new Date().getFullYear()}, Алматы</p>
              <p>ТОО “Qaz Digital Solutions”</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
