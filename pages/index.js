import Navbar from "../components/Navbar";


export default function Home() 
{
  return (
  <div>
    <Navbar />
    <div className="square aii ">
    <div className="d-flex ">
      <div style={{backgroundColor:"lightsalmon"}}>
          <div className="d-flex justify-content-center me-auto ms-auto mt-4  ">
            <u className="ms-auto me-auto" style={{fontSize: "50px" , color:"darkblue"}}>Welcome to Switch Website </u> 
          </div>
        <div>
          <img src="/inumaki.jpeg"
          width="150" 
          height="150"
          style={{objectFit: "cover"}}
          className="rounded-circle d-flex justify-content-center me-auto ms-auto mt-3 "></img>
        </div>

      <div className="vstack">
        <span className="fw-bold ms-auto me-auto " style={{color:"darkolivegreen", fontSize:"50px", alignItems: "center"}}>Au Switch</span>
        <span className="ms-auto me-auto"style={{fontSize: "25px"}} >Hi, My name is Switch. </span>
        <span className="ms-auto me-auto" style={{fontSize: "23px"}} > I graduated from Samut Sakhon Wittayalai School. I hate Sunday because tomorrow will be Monday. </span>
        <span className="ms-auto me-auto fw-bold mt-3 " style={{fontSize: "30px", color:"mediumvioletred"}}>My Skills</span>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
        <div className="col zoom  ">
          <div className="card h-100 bg-success mb-3  ">
            <img src="/korean.jpeg" height="250" className="card-img-top"></img>
              <div className="card-body ">
                <h5 className="card-title" style={{color:"khaki"}}>Korean Language</h5>
                <p className="card-text" style={{color:"wheat"}}>because I like to watch Korean dramas series very much, so I learned Korean Language.</p>
              </div>
            </div>
          </div>
          <div className="col zoom">
            <div className="card h-100 bg-danger mb-3">
              <img src="/cc.png" height="250"  className="card-img-top" ></img>
              <div className="card-body">
                <h5 className="card-title" style={{color: "whitesmoke"}}>C++ Language Programming</h5>
                <p className="card-text" style={{color:"azure"}}>I can tell you a short word about C++ language that is very difficult language. since I was born in the world.</p>
              </div>
            </div>
          </div>
          <div className="col zoom">
            <div className="card h-100 bg-info mb-3">
              <img src="/java.png" height="250" className="card-img-top" ></img>
              <div className="card-body">
                <h5 className="card-title" style={{color:"saddlebrown"}}>Java Language Programming</h5>
                <p className="card-text" style={{color:"midnightblue"}}>I learning this language in Data Structure Subject, I hope it easier than C++ language.</p>
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
