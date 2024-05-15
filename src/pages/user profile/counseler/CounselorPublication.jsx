import React from "react";
import post from "../../../assets/images/article/post.png";
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
const CounselorPublication = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <div className=" counselor-publication">
      {/* <div className="post-box-main d-flex row m-0 p-0  g-3  gx-3  ">
        <div className=" post-box col-12 col-md-4 p-0  ">
          <img src={post} alt="" />
          <h1>The Benefits of Getting Online Marriage Counseling</h1>
          <div className="last d-flex flex-wrap gap-2">
            <p>Marriage counseling</p>
            <p>Therapy</p>
          </div>
        </div>
        <div className=" post-box col-12 col-md-4 p-0  ">
          <img src={post} alt="" />
          <h1>The Benefits of Getting Online Marriage Counseling</h1>
          <div className="last d-flex flex-wrap gap-2">
            <p>Marriage counseling</p>
            <p>Therapy</p>
          </div>
        </div>
        <div className=" post-box col-12 col-md-4 p-0  ">
          <img src={post} alt="" />
          <h1>The Benefits of Getting Online Marriage Counseling</h1>
          <div className="last d-flex flex-wrap gap-2">
            <p>Marriage counseling</p>
            <p>Therapy</p>
          </div>
        </div>
        <div className=" post-box col-12 col-md-4 p-0  ">
          <img src={post} alt="" />
          <h1>The Benefits of Getting Online Marriage Counseling</h1>
          <div className="last d-flex flex-wrap gap-2">
            <p>Marriage counseling</p>
            <p>Therapy</p>
            <p>Stress</p>
          </div>
        </div>
        <div className=" post-box col-12 col-md-4 p-0  ">
          <img src={post} alt="" />
          <h1>The Benefits of Getting Online Marriage Counseling</h1>
          <div className="last d-flex flex-wrap gap-2">
            <p>Marriage counseling</p>
            <p>Therapy</p>
            <p>Stress</p>
          </div>
        </div>
        <div className=" post-box col-12 col-md-4 p-0  ">
          <img src={post} alt="" />
          <h1>The Benefits of Getting Online Marriage Counseling</h1>
          <div className="last d-flex flex-wrap gap-2">
            <p>Marriage counseling</p>
            <p>Therapy</p>
            <p>Stress</p>
          </div>
        </div>
      </div> */}
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
      <section className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container post-box-main ">
              {SLIDES.map((index) => (
                <div className="embla__slide  " key={index}>
                <div className=" post-box col-12  p-0  ">
          <img src={post} alt="" />
          <h1>The Benefits of Getting Online Marriage Counseling</h1>
          <div className="last d-flex flex-wrap gap-2">
            <p>Marriage counseling</p>
            <p>Therapy</p>
          </div>
        </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>
  );
};

export default CounselorPublication;
