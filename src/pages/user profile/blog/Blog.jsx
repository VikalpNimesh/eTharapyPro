import "./Blog.css";


import post from "../../../assets/images/article/post.png";
// import "../../questionaire/questions/Questionaire.css";import post from "../../../assets/images/article/post.png";
import useEmblaCarousel from "embla-carousel-react";
import "../../../utils/embla carausel/embla.css";
const OPTIONS = { align: "start", loop: true };
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../../../utils/embla carausel/EmblaCarouselArrowButtons";
const Blog = ({handleToggle,sidebar}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <div className=" blog-main counselor-publication">
      <div className="message-heading d-flex  justify-content-between   ">
        <h2 className=" h32">Blog</h2>
        <div className=" right d-flex  align-items-center">
          <p className=" d-none  d-md-block ">Credits available: 0</p>
          <i className="fa-solid fa-bars d-md-none flex " onClick={()=>{
            handleToggle(sidebar)
          }}></i>
        </div>
      </div>

      <div className=" landing-banner therapist-main   text-center d-flex mx-auto   justify-content-center align-items-center flex-column main  ">
        <p className="p22">
          Here you will find all the useful information for your body, mind and
          soul. Discover a wealth of resources to support your{" "}
          <span className=" span-green">mental and emotional health.</span>
        </p>
      </div>

      <div className=" top-categories my-5 ">
        <div className=" d-flex    d-md-none   justify-content-between ">
          <p className="  p20">Top categories</p>
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
        </div>
        <section className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container post-box-main ">
              {SLIDES.map((index) => (
                <div className="embla__slide  " key={index}>
                  <div className="  justify-content-between catogory d-flex  gap-4 ">
                    <img className="  col-6" src={post} alt="" />
                    <div className=" col-6  justify-content-justify-content-evenly    d-flex   flex-column  ">
                      <p className="p2 pb-2"> Sleep</p>
                      <p className=" sec-p">12 article</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* <div className=" d-flex  justify-content-between ">
          <div className="  catogory d-flex  gap-4 ">
            <img className="  col-6" src={post} alt="" />
            <div className=" col-6  justify-content-justify-content-evenly    d-flex   flex-column  ">
              <p className="pb-2"> Sleep</p>
              <p className=" sec-p">12 article</p>
            </div>
          </div>
          <div className="  catogory d-flex  gap-4 ">
            <img className="  col-6" src={post} alt="" />
            <div className=" col-6  justify-content-justify-content-evenly    d-flex   flex-column  ">
              <p className="pb-2"> Sleep</p>
              <p className=" sec-p">12 article</p>
            </div>
          </div>
          <div className="  catogory d-flex  gap-4 ">
            <img className="  col-6" src={post} alt="" />
            <div className=" col-6  justify-content-justify-content-evenly    d-flex   flex-column  ">
              <p className="pb-2"> Sleep</p>
              <p className=" sec-p">12 article</p>
            </div>
          </div>
        </div> */}
      </div>

      <div>
        <div className=" d-flex  justify-content-between  align-items-center   ">
          <h2 className=" p20 p-0 ">Articles</h2>
          <div className=" ">
            <select
              name="age"
              className="custom-select"
              // value={selectedOptions}
              // onChange={handleSelectChange}
            >
              <option value="default">Sort by most recent</option>
              <option value="Most popular">Most popular</option>
              <option value="Written by my therapist">
                Written by my therapist
              </option>
              <option value="From newest to oldest">
                From newest to oldest
              </option>
              {/* Other age options */}
            </select>
          </div>
          
        </div>
        <div className=" d-flex  mt-3   d-md-none  justify-content-between ">
            <p className="  p20"></p>
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

        <p className=" p20 text-center  mt-4">Show More</p>
      </div>
    </div>
  );
};

export default Blog;
