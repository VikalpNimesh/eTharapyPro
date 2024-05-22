
import "./CarinTravel.css"
import travel from "./travel.png"
import twoman from "../../../assets/images/aboutus/two-man.png"
import map from "../../../assets/images/aboutus/map.png"

const CarinTravel = () => {
  return (
    <div className="wrapper carin mx-1  text-center  ">
      <div className="row pb-5 d-flex gap-5 upper ">
        <div className="col-lg-6  px-4  text-lg-start  text-md-start">
          <h6 className="head ">
            Cairns are particularly useful over rocky terrain where it can be
            difficult to see a well-worn path on the ground.
          </h6>

          <p>
            They stand out to inform new travelers that someone has taken that
            path before and left a landmark to show the way. The Cairn is a
            guide for life’s journey and that is why it features prominently in
            our logo.
          </p>
        </div>
        <div className="col-lg-6 p-0    carim-img ">
          <img src={twoman} alt="img" />
        </div>
      </div>
      <div className="row pt-5  d-flex gap-5 lower ">
        <div className="col-lg-6   carim-img  p-0 ">
          <img src={map} alt="img" />
        </div>
        <div className="col-lg-6 d-flex justify-content-between flex-column px-4  text-lg-start  text-md-start">
          <h6 className="head ">
            Life really does seem to cross over difficult terrain.
          </h6>
          <p>
            Sometimes it can be nearly impossible to see the way forward. It’s
            no exaggeration to say that a professional licensed therapist can be
            a helpful guide but it may not be entirely apparent why at first.
            <br />
            <br />
          </p>
          <p>
            Yes, they have a formal education and have successfully passed
            licensing processes but that isn’t the most important thing they can
            offer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarinTravel;
