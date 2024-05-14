
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import "./embla.css"

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide testimonial-section" key={index}>
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
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

      </div>
    </section>
  )
}

export default EmblaCarousel
