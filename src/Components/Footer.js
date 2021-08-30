function Footer() {
  const kofiStyle = {border:"0px", height:"36px"}
    return (
      <footer>
        <p> &copy; Sabrina White 2021</p>
        <a href="mailto:support@foreverpets.com">support@foreverpets.com</a>
        <div className="document-links">
          <a href>Privacy Policy</a>
          <a href="https://ko-fi.com/D1D05ZYZR" target="_blank" rel="noreferrer">
            <img
              height="36"
              style={kofiStyle}
              src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3"
              border="0"
              alt="Money Pwease at ko-fi.com"
            />
          </a>
          <a href>Terms of Use</a>
        </div>
      </footer>
    );
}

export default Footer;