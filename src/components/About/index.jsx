import "./style.css";
import { Link } from "react-router-dom";

const About = () => {
     return (
         <div className="about">
            <h1>Bio</h1>
             <p>
                 I'm currently working at the <b>Canton Regional Chamber of Commerce</b>,
                 as an Information Technology professional and web developer. Currently 
                 looking to start contract work as a web developer. Contact me to build your 
                 website.

             </p>
             <br/>
             <p>
                 Problem and puzzle solver, I got my start in algorithms speed cubing
                 in elementry school. Recently I've starting participating in competitive
                 programming. Check out my profile and badges on 
                 <a href="https://www.hackerrank.com/Bglance68" target="_blank" rel="noreferrer">
                 <b> HackerRank.</b> </a> 
                 I also have an interest in CyberSecurity 
                 <a href="https://www.hackthebox.eu/profile/414640" target="_blank" rel="noreferrer">
                 <b> Hack The Box. </b></a>
                 Besides nerd stuff, I play basketball, golf, and love fitness.
            </p>
             <br/>
            <p>
                Interest in everything from the frontend spectrum to Machine learning and High
                Frequency Trading Algorithms. Looking to work with ambitious people on 
                ambitious projects.
            </p>

             <br/>

            <p><Link to="/contact">Let's make something special.</Link></p>
         </div>
     );
 };

export default About;
