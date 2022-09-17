import React from 'react'
import Navbar from '../components/Navbar'

export default function exp()
{
  return (
    <div>
        <Navbar />
        <div className="border border-5 border-info rounded-5 " style={{backgroundColor:"lightskyblue"}}>
        <div className="d-flex">
        <div className="square2 aii ">

        <p className="fw-bold my-5 text-center" style={{color:"saddlebrown" ,fontSize: "80px "}}>Experience</p>
        <div className="row row-cols-3 row-cols-md-2 g-5 mt-2">
            <div className="col zoom ">
                    <div className="card h-100 bg-success mb-3">
                        <img src="/projectc.JPG" height="250" className="card-img-top"></img>
                        <div className="card-body">
                            <h5 className="card-title" style={{color:"khaki"}}>C++ Project</h5>
                            <p className="card-text" style={{color:"wheat"}}> This project was done when I was a 1st year student semester 2 it use all knowledge about C++ since I was learned from the first lesson to lass lesson  </p>
                        </div>
                    </div>
            </div>
            <div className="col zoom  ">
                <div className="card h-100 bg-success mb-3">
                    <img src="/projects.png" height="250" className="card-img-top"></img>
                    <div className="card-body">
                        <h5 className="card-title" style={{color:"khaki"}}>Scratch Project</h5>
                        <p className="card-text" style={{color:"wheat"}}>I like this website because it is properly for beginners computer programming.</p>
                        <a target="_blank" href="https://scratch.mit.edu/projects/559025741/fullscreen/" className="btn btn-primary">Go to Scratch Project</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    </div>
  );
}
