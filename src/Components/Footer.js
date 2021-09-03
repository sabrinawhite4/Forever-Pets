function Footer() {
  const kofiStyle = {border:"0px", height:"36px"}
    return (
      <footer className="footer">
        <div>
          <p> &copy; Sabrina White 2021</p>
        </div>
        <div className="support-links">
          <a 
            href="https://ko-fi.com/D1D05ZYZR"
            target="_blank"
            rel="noreferrer"
          >
            <img
              height="36"
              style={kofiStyle}
              src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3"
              border="0"
              alt="Money Pwease at ko-fi.com"
            />
          </a>
          <a id="support-email" href="mailto:support@foreverpets.com">support@foreverpets.com</a>
        </div>
        <div className="document-links">
          <a href>Privacy Policy</a>

          <a href>Terms of Use</a>
        </div>
      </footer>
    );
}

export default Footer;