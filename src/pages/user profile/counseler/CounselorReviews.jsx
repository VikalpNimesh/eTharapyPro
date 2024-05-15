import "../review/Review.css";                  
import useEmblaCarousel from "embla-carousel-react";
import "../../../utils/embla carausel/embla.css";
const OPTIONS = { align: "start", loop: true };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../../../utils/embla carausel/EmblaCarouselArrowButtons";

const CounselorReviews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <div className=" counselor-reviews">
      <div className="icons-box   mb-4  d-md-flex  justify-content-end ">
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
      <div className="testimonial-main ">
        <section className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {SLIDES.map((index) => (
                <div className="embla__slide testimonial-section" key={index}>
                  <div className="testimonial-boxes">
                    <div className=" d-flex  gap-2  mb-4   align-items-center ">
                      <i className="fa-solid fa-star"></i>
                      <p>5.1</p>
                    </div>
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
      </div>
      <div className=" right  ">
        <div >
          <h2 className="review-therapist">Review Therapist </h2>
          <p className="p16">Your opinion is important to us, and we strive to continuously improve our services to better meet your needs.</p>
        </div>

      <div className="stars-box d-flex  counselor-stars-box">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        <div className="textarea-box  ">
          <textarea name="" rows={6} id="review"></textarea>
          <div className=" d-flex ">
            <input type="checkbox" name="" id="" />
            <p>I am not a robot</p>
          </div>
        </div>
        <button className="start-therapy-btn counselor-btn">
          {" "}
          Post Feedback
        </button>
      </div>
    </div>
  );
};

export default CounselorReviews;
