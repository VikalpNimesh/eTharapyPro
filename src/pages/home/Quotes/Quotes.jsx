import { Col, FlexboxGrid } from "rsuite";
import "./Quotes.css"

const Quotes = () => {
  return (
    <div className="Quotes-main wrapper">
      <FlexboxGrid className="quotes-top flex">
        <FlexboxGrid.Item as={Col}
            colspan={24}
            md={12} className="left">
          <h1>
            You're <span className="span-green">Not Alone</span><br /> In Your
            Journey
          </h1>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item as={Col}
            colspan={24}
            md={12} className="right">
          <p>
            Knowing others walked the same path before you is like having a
            helping hand.
          </p>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <div className="quotes-lower"></div>
    </div>
  );
};

export default Quotes;
