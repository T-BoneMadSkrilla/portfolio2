import React,{Component} from 'react';
import './About.css'
import Competencies from '../data/Competencies';
import Hobbies from '../data/Hobbies';

class About extends Component{
    render(){
        return(
            <div className="aboutFlex">
                <div className="indexZero">
                    I graduated in 2015 from Sam Houston State University with a degree in Geography and a certificate in GIS. I thoroughly enjoyed taking large sets of data and making sense of it with maps. 
                    <br></br>
                    There weren't many jobs in GIS when I graduated, but I was lucky enough to land my first real job in business development at a small software company. I loved having a difficult job but it wasn't long before I realized I wanted to do more technical work. That's when I started to dabble with coding.   
                </div>
                <br></br>
               
                <div className="firstParagraph">
                     My development journey started in 2016 when I started learning HTML and CSS through online courses after work. I enjoyed spending time learning and turning ideas into a site. This new knowledge helped me understand the products I was working with better.
                </div>
               
               <br></br>
                <div className="secondParagraph">
                    In 2017, I started an eCommerce site with Shopify. Unfortunately, sales dried up and my marketing budget was nearly zero. It was an incredible learning experience; I learned that I really enjoyed building sites and I was curious about the code behind all the cool things I could do with Shopify and WordPress.   
                </div>
                   
                
                <br></br>
                <div className="secondParagraph">
                   It took me a few months but I decided to go to a coding bootcamp to sharpen my skills. After a lot of early mornings and late nights, I graduated from DevMountain in December 2018. A few months later I started working at Craftable as a Tier II support engineer. By October I was working on Frontend Data visualizations and at the start of the new year I was moved into a full stack engineer role. I learned Java during this time  
                
                   
                </div>
                <br></br>
                <div className="cardAroundGraph">
                <div className="competenciesLegend">
                <div className="firstColorCompetencies"></div>
                <div className="fontStylingLegend">React</div>
                <div className="secondColorCompetencies"></div>
                <div className='fontStylingLegend'>Redux</div>
                <div className="thirdColorCompetencies"></div>
                <div className="fontStylingLegend"> Node.js</div>
                </div>
                <Competencies/>                
                </div>
            </div>
        )
    }
}

export default About;
