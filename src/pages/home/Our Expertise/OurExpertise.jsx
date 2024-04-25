import "./OurExpertise.css";
import { Col, FlexboxGrid } from "rsuite";

const OurExpertise = () => {
  return (
    <div className="expertise-main wrapper">
      <h1>Our Expertise</h1>
      <div className="show-grid">
        <FlexboxGrid className="expertise-box" justify="space-around">
          <FlexboxGrid.Item
            className="exprtise-item"
            as={Col}
            colspan={24}
            md={6}
          >
            <div>
              <h2>Relationships</h2>
              <div><i className="fa-solid fa-angle-right"></i></div>
            </div>
            <div>
              <h2>Trauma</h2>
              <div><i className="fa-solid fa-angle-right"></i></div>
            </div>
            <div>
              <h2>Parenting</h2>
              <div><i className="fa-solid fa-angle-right"></i></div>
            </div>
            <div>
              <h2>Communication</h2>
              <div><i className="fa-solid fa-angle-right"></i></div>
            </div>
            <div>
              <h2>Physical Health</h2>
              <div><i className="fa-solid fa-angle-right"></i></div>
            </div>
          </FlexboxGrid.Item>
          
          <FlexboxGrid.Item
            className="exprtise-item"
            as={Col}
            colspan={24}
            md={6}
          >
            <div>
              <h2>Sleeping Habits</h2>
              <div><i className="fa-solid fa-angle-right"></i></div>
            </div>
            <div>
              <h2>Panic Attacks</h2>
              <div><i className="fa-solid fa-angle-right"></i></div>
            </div>
            <div>
              <h2>Motivation</h2>
              <div><i className="fa-solid fa-angle-right"></i></div>
            </div>
            <div>
              <h2>OCD</h2>
              <div><i className="fa-solid fa-angle-right"></i></div>
            </div>
            <div>
              <h2>Gender Identity</h2>
              <div><i className="fa-solid fa-angle-right"></i></div>
            </div>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item
            className="exprtise-item"
            as={Col}
            colspan={24}
            md={6}
          >
            <div>
              <h2>Depression</h2>
              <div><i className="fa-solid fa-angle-right"></i></div>
            </div>
            <div>
              <h2>PTSD</h2>
              <div><i className="fa-solid fa-angle-right"></i></div>
            </div>
            <div>
              <h2>Eating Disorders</h2>
              <div><i className="fa-solid fa-angle-right"></i></div>
            </div>
            <div>
              <h2>Social Life</h2>
              <div><i className="fa-solid fa-angle-right"></i></div>
            </div>
            <div>
              <h2>Abuse</h2>
              <div><i className="fa-solid fa-angle-right"></i></div>
            </div>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item
            className="exprtise-item"
            as={Col}
            colspan={24}
            md={6}
          >
            <div>
              <h2>Self-esteem</h2>
              <div><i className="fa-solid fa-angle-right"></i></div>
            </div>
            <div>
              <h2>Anxiety</h2>
              <div><i className="fa-solid fa-angle-right"></i></div>
            </div>
            <div>
              <h2>Finances</h2>
              <div><i className="fa-solid fa-angle-right"></i></div>
            </div>
            <div>
              <h2>Anger</h2>
              <div><i className="fa-solid fa-angle-right"></i></div>
            </div>
            <div>
              <h2>Stress</h2>
              <div><i className="fa-solid fa-angle-right"></i></div>
            </div>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item
            className="exprtise-item"
            as={Col}
            colspan={24}
            md={6}
          >
<h6 className="show-more  d-block  d-sm-none ">
        Show More
      </h6>
      <h6 className="show-more d-block  d-sm-none ">
        Show Less
      </h6>
          </FlexboxGrid.Item>
        </FlexboxGrid>
        
      </div>
     
    </div>
  );
};

export default OurExpertise;
