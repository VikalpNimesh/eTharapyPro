import useEmblaCarousel from "embla-carousel-react";
import "../../../utils/embla carausel/embla.css";
import "./testimonials.css";
import pic from "../../../assets/images/testimonial-icon.png";
const OPTIONS = { align: "start", loop: true };
const SLIDE_COUNT = 8;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../../../utils/embla carausel/EmblaCarouselArrowButtons";

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <div className="testimonial-main   ">
      <div className="wrapper">
        <div className=" testimonial-top ">
          <img className=" d-none d-md-block" src={pic} alt="" />
          <h1>
            See why clients choose
            <span className="span-green">eTherapyPro</span>
          </h1>

          <div className="icons-box d-none  d-md-flex ">
            <PrevButton
              className="next"
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />

            <NextButton
              className="prev"
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>

        <section className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {SLIDES.map((index) => (
                <div className="embla__slide testimonial-section" key={index}>
                  <div className="testimonial-boxes">
                    <p>
                      So grateful for eTherapyPro. Now I know how to identify my
                      anxiety triggers. I’m feeling so much better it’s
                      unbelievable.
                    </p>
                    <div className="user-details">
                      <div className="user-img"></div>
                      <div className="user-name">@Rhianna_M</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="icons-box  d-flex  d-md-none pt-3  justify-content-start  ">
          <div className="next">
            {/* <i className="fa-solid fa-angle-right"></i> */}
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
          </div>
          <div className="prev">
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
        {/* <div className="testimonial-section">
          <div className="testimonial-boxes">
            <p>
              So grateful for eTherapyPro. Now I know how to identify my anxiety
              triggers. I’m feeling so much better it’s unbelievable.
            </p>
            <div className="user-details">
              <div className="user-img"></div>
              <div className="user-name">@Rhianna_M</div>
            </div>
          </div>
          <div className="testimonial-boxes">
            <p>
              So grateful for eTherapyPro. Now I know how to identify my anxiety
              triggers. I’m feeling so much better it’s unbelievable.
            </p>
            <div className="user-details">
              <div className="user-img"></div>
              <div className="user-name">@Rhianna_M</div>
            </div>
          </div>
          <div className="testimonial-boxes">
            <p>
              So grateful for eTherapyPro. Now I know how to identify my anxiety
              triggers. I’m feeling so much better it’s unbelievable.
            </p>
            <div className="user-details">
              <div className="user-img"></div>
              <div className="user-name">@Rhianna_M</div>
            </div>
          </div>
          <div className="testimonial-boxes">
            <p>
              So grateful for eTherapyPro. Now I know how to identify my anxiety
              triggers. I’m feeling so much better it’s unbelievable.
            </p>
            <div className="user-details">
              <div className="user-img"></div>
              <div className="user-name">@Rhianna_M</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Testimonials;
