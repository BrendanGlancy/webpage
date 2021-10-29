import "./style.css";

const Skills = () => {
    return (
        <div className="skills">
            <h1>Skills</h1>
            <div className="content">
                <div>
                    <strong>Languages:</strong>
                    <li>Java</li>
                    <li>Python</li>
                    <li>JavaScript<img src={`${process.env.PUBLIC_URL}/JS.png`}        
                    alt={`${process.env.PUBLIC_URL}/logo192.png`}/></li>
                    <li>HTML5<img src={`${process.env.PUBLIC_URL}/CSS_HTML.png`}
                    alt={`${process.env.PUBLIC_URL}/logo192.png`}/></li>
                    <li>CSS3</li>
                    <li>C++</li>
                    <li>C#</li>
                    <li>PHP<img src={`${process.env.PUBLIC_URL}/php.png`} 
                    alt={`${process.env.PUBLIC_URL}/logo192.png`}/></li>
                    <li>SQL</li>
                </div>
                <div>
                    <strong>Libraries:</strong>
                    <li>React.js</li>
                    <li>Vue.js</li>
                    <li>Three.js</li>
                    <li>Django</li>
                </div>
                <div>
                    <strong>Unit Testing / Other</strong>
                    <li>JUnit</li>
                    <li>WordPress</li>
                    <li>Tomcat</li>
                    <li>JDBC</li>
                    <li>MVC and CRUD</li>
                </div>
            </div>
        </div>

    );
};

export default Skills;

