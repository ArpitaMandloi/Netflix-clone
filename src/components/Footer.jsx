function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-logo">
          NETFLIX
        </div>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Movies</a>
          <a href="#">TV Shows</a>
          <a href="#">Trending</a>
          <a href="#">My List</a>
        </div>

        <div className="footer-social">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Netflix Clone. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;