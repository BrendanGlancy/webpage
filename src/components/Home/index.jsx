import { Link } from "react-router-dom"
import "./style.css"

const Home = () =>  {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <p>Hi,</p>
                    <p>I'm Brendan.</p>
                    <p>A Computer Science Student at KSU</p>
                </h1>
                <Link to="about">
                    <button>More Info</button>
    
                </Link>
            </div>
            <div className="person">
                <img src={`${process.env.PUBLIC_URL}/me.png`}
                alt={`${process.env.PUBLIC_URL}/logo192.png`}/>
            </div>
        </div>
    )
}

export default Home;
