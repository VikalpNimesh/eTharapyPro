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
      <div className="icons-box  mb-4  d-md-flex  justify-content-end ">
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
      <div className="testimonial-main   ">
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
      
    </div>
  );
};

export default CounselorReviews;
