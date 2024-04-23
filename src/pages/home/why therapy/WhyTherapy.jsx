import "./WhyTherapy.css"

const WhyTherapy = () => {
  return (
      <div className="why-therapy-main wrapper column container ">
          
          <div className="row">
          <h1>Why <span className="span-green">Online</span> Therapy?</h1>
          <p>Affordable, effective therapy from the convenience of home.</p>

          <div className="therapy-boxes d-lg-flex    ">
              <div className="online-therapy ">
                  <h2>Online Therapy</h2>
                  <p><span className="span-green">Affordable</span>  —  A fraction of the cost $45 per week</p>
                  <p><span className="span-green">Convenient</span>  —  A fraction of the cost $45 per week</p>
                  <p><span className="span-green">Effective</span>   —  Studies show it works!</p>
              </div>
              <div className="in-person-therapy ">
                  <h2>In-Person Therapy</h2>
                  <p>* $120 Per Hour Average for a Live Session</p>
                  <p>* Have to travel to and from therapists office</p>
                  <p>* Long wait in between visits</p>
              </div>
          </div>
          </div>
    </div>
  )
}

export default WhyTherapy