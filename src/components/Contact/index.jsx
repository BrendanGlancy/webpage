import './style.css';

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49426639.79950548!2d-117.25232703509684!3d40.87708197733739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8836d1644320a7c5%3A0xdcdabf12794e84e3!2sNorth%20Canton%2C%20OH!5e0!3m2!1sen!2sus!4v1620874014307!5m2!1sen!2sus"
            frameBorder="0"
            title="location"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            ></iframe>

            <h4>Email</h4>
            <p><a href="mailto:bglance68@gmail.com">bglance68@gmail.com</a></p>

            <br/>

            <h4>City</h4>
            <p>North Canton</p>
        </div>
    );
};

export default Contact;
