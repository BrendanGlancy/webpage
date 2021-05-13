import "./style.css";

const Footer = () => {
    return (
    <footer>
        <a href="https://github.com/BrendanGlancy" target="_blank" rel="noreferrer">
            <img src={`${process.env.PUBLIC_URL}/Git.jpeg`}
                  alt={`${process.env.PUBLIC_URL}/logo192.png`}/>
        </a>
        <a href="https://www.linkedin.com/in/brendan-glancy/" target="_blank" rel="noreferrer">
            <img
          src="https://github.com/DwinaTech/public-images/blob/main/linkedin-icon.png?raw=true"
          alt="LinkIn-icon"
        />
        </a>
    </footer>
    );
};

export default Footer;
