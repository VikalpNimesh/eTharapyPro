import "./Quotes.css";
import pic from "../../../assets/images/quotes-img.png";
import useEmblaCarousel from "embla-carousel-react";
// const OPTIONS = { align: "start" };
import Autoplay from "embla-carousel-autoplay";

const Quotes = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: false, delay: 1000 }),
  ]);

  // const [ emblaApi] = useEmblaCarousel(OPTIONS, [
  //   Autoplay({ playOnInit: false, delay: 3000 })
  // ])

  return (
    <div className="Quotes-main container-fluid  flex-column  ">
      <div className="quotes-top row">
        <div className="left col-lg-6 col-12 ">
          <h1 className=" text-start text-sm-center  ">
            You're <span className="span-green">Not Alone</span>
            <br /> In Your Journey
          </h1>
        </div>
        <div className="right col-lg-6 col-12 text-sm-center text-md-start ">
          <p>
            Knowing others walked the same path before you is like having a
            helping hand.
          </p>
        </div>
      </div>

      <div className="quotes-mid-img">
        <img src={pic} alt="pic" />
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container quotes-lower  d-lg-flex gap-4   pb-3 pe-3 ps-3  ">
          <div className="quote-box-1">
            <p>
              “I feel like I can’t speak my own mind and enjoy the world around
              me”
            </p>
          </div>
          <div className="quote-box-2">
            <p>
              Anxiety feels like a weight on me every time I try to socialize
            </p>
          </div>
          <div className="quote-box-1">
            <p>I just can’t control my anger sometimes.</p>
          </div>
          <div className="quote-box-2">
            <p>
              Anxiety feels like a weight on me every time I try to socialize
            </p>
          </div>
          <div className="quote-box-1">
            <p>I just can’t control my anger sometimes.</p>
          </div>
          <div className="quote-box-2">
            <p>
              Anxiety feels like a weight on me every time I try to socialize
            </p>
          </div>
          <div className="quote-box-1">
            <p>I just can’t control my anger sometimes.</p>
          </div>
          <div className="quote-box-2">
            <p>
              Anxiety feels like a weight on me every time I try to socialize
            </p>
          </div>
          <div className="quote-box-1">
            <p>I just can’t control my anger sometimes.</p>
          </div>
        </div>
      </div>
      
     

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container quotes-lower  d-lg-flex gap-4   pb-3 pe-3 ps-3  ">
          <div className="quote-box-1">
            <p>
              “I feel like I can’t speak my own mind and enjoy the world around
              me”
            </p>
          </div>
          <div className="quote-box-2">
            <p>
              Anxiety feels like a weight on me every time I try to socialize
            </p>
          </div>
          <div className="quote-box-1">
            <p>I just can’t control my anger sometimes.</p>
          </div>
          <div className="quote-box-2">
            <p>
              Anxiety feels like a weight on me every time I try to socialize
            </p>
          </div>
          <div className="quote-box-1">
            <p>I just can’t control my anger sometimes.</p>
          </div>
          <div className="quote-box-2">
            <p>
              Anxiety feels like a weight on me every time I try to socialize
            </p>
          </div>
          <div className="quote-box-1">
            <p>I just can’t control my anger sometimes.</p>
          </div>
          <div className="quote-box-2">
            <p>
              Anxiety feels like a weight on me every time I try to socialize
            </p>
          </div>
          <div className="quote-box-1">
            <p>I just can’t control my anger sometimes.</p>
          </div>
        </div>
      </div>

      {/* <div className="quotes-lower  d-lg-flex gap-4 overflow-hidden  pb-3  ">
        <div className="quote-box-1">
          <p>
            “I feel like I can’t speak my own mind and enjoy the world around
            me”
          </p>
        </div>
        <div className="quote-box-2">
          <p>Anxiety feels like a weight on me every time I try to socialize</p>
        </div>
        <div className="quote-box-1">
          <p>I just can’t control my anger sometimes.</p>
        </div>
      </div> */}
    </div>
  );
};

export default Quotes;
