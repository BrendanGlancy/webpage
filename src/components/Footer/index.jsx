import "./style.css";

const Footer = () => {
    return (
    <footer>
        <a href="https://github.com/BrendanGlancy" target="_blank" rel="noreferrer">
            <img src={`${process.env.PUBLIC_URL}/Git.png`}
            alt="GitHub Icon"/>
        </a>
    </footer>
    );
};

export default Footer;
