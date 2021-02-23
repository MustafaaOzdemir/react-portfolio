import React  from 'react';
import {HomeSection,HomeInformation,HometTitle,HomeInfo, HomeDesc,Span,HomeBtn,} from  './style.js'
const Home = () => { 
    return (
      <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HometTitle>Mark John</HometTitle>
                    <HomeInfo>UI/UX Designer</HomeInfo>
                    < HomeDesc>
                        Iam a professional <Span>UI/UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </ HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
              
            </div>
        </HomeSection>
    )

    }




export default Home;