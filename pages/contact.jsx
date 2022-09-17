import React from 'react';
import Navbar from '../components/Navbar';


export default function Contact() {
  return (
    <div>
        <Navbar />
        <div className="border border-5 border-info rounded-5 " style={{backgroundColor:"blanchedalmond"}}>
        <div className="square3 aii ">  
            <div className="d-flex justify-content-center me-auto ms-auto mt-4 mx-auto  ">
                <img src="/profile.jpeg"
                width="250" 
                height="250"
                style={{objectFit: "cover"}}
                className="rounded-circle border border-4  border-dark "></img>
            </div>
            <p 
            className="fw-bold my-5 text-center justify-content-center" 
            style= 
            {{ 
                color: "rebeccapurple", 
                fontSize: "80px"
            }}>Contact Me
                <div className="vstack gap-3 mx-auto mt-4 mb-4">
                    <span 
                        className="fw-bold  text-center" 
                        style= 
                        {{
                            color:"darkslateblue" ,
                            fontSize: "30px"
                        }}> 👋🏻 Switch Charuekpoonpol (Au)
                    </span>
                    <span 
                        className="fw-bold  text-center" 
                        style= {{color:"darkslateblue" ,
                        fontSize: "30px"}}> 
                        🩸 Group B
                    </span>
                    <span 
                        className="fw-bold  text-center" 
                        style= {{color:"darkslateblue" ,fontSize: "30px"}}> 
                        🧳 Chiang Mai University
                    </span>
                    <a target="_blank"  className="fw-bold  text-center" 
                        href="https://www.facebook.com/au.switch.7" 
                        style= {{color:"darkslateblue" ,fontSize: "30px"}}
                        rel="noreferrer"> 
                        👉 FB: Au Switch
                    </a>
                    <a target="_blank"  className="fw-bold  text-center" 
                        href="mailto" 
                        style= {{color:"darkslateblue" ,fontSize: "30px"}}>  
                        📮 Sawit_cha@cmu.ac.th
                    </a>
                    <span className="fw-bold  text-center" 
                        style= {{color:"darkslateblue" ,fontSize: "30px"}}> 
                        📱 091-005-2696 
                    </span>
                </div>
            </p>
        </div>
        
    </div>
    </div>
    

  )
}
