import React from 'react'
import Hero from './hero section/Hero'
import SecondSection from './second section/SecondSection'
import ProblemSection from './problem section/Problem'
import Feedback from './feedback/Feedback'
import RelatedPost from './related post/RelatedPost'

const Article = () => {
  return (
      <div>
          <Hero/>
          <SecondSection/>
          <ProblemSection/>
          <Feedback/>
          <RelatedPost/>
      </div>
  )
}

export default Article