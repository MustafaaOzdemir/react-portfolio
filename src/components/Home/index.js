import React  from 'react';
import {HomeSection,HomeInformation,HometTitle,HomeInfo, HomeDesc,Span,HomeBtn,} from  './style.js'
const Home = () => { 
    return (
      <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HometTitle>Mostafa Rawash</HometTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    < HomeDesc>
                        Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </ HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
              
            </div>
        </HomeSection>
    )

    }




export default Home;