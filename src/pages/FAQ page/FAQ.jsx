import "./FAQ.css";
import { Accordion } from "rsuite";
import CtaBanner from "./cta banner/CtaBanner";

const FAQ = () => {
  return (
    <div className="faq-questions ">
      <div className="top column">
        <h1>
          Frequently <span className="span-green">Asked</span> Questions{" "}
        </h1>
        <p>
          Find answers to common questions about online therapy. Learn more how
          online therapy works, and how it can benefit your mental health.
        </p>
        <div className="search-bar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Seach" />
        </div>
        <div className="search-bar-result">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Seach" />
        </div>
        <div className="search-bar-result">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Seach" />
        </div>
      </div>
      <div className="faq-questions-box ">
        <Accordion>
          <Accordion.Panel
            className="faq-questions-box"
            header="How can I learn to manage my social anxiety?"
            // defaultExpanded
          >
            <p className="answer">
              Working with a professional counselor is important to address your
              specific needs. However, in general, it’s important to think about
              your anxiety over time. You didn’t start out life with social
              anxiety. It developed slowly over years until it reached the point
              you are in now. That means it is possible to intentionally develop
              a new way of processing - and a lot faster. Your counselor can
              help you make this change.
              <br />
              <br />
              <span className="span-green">Start a consultation</span>
              with one of our counselors and they can help you put together a
              plan to address social anxiety
            </p>
          </Accordion.Panel>
          <Accordion.Panel
            className="faq-questions-box"
            header="How can I cope with my depression?"
            // defaultExpanded
          >
            <p className="answer">
              It’s important to discuss the specifics of your situation with a
              professional counselor but there are a few general things to
              consider. Depression is a lot like having your car stuck in the
              mud. You press down on the gas and you don’t go anywhere. A lot of
              people will try to set huge goals for themselves such as,
              “Starting tomorrow I am going to go to the gym every day.” That’s
              like stepping on the gas pedal. It’s a good goal but when you are
              depressed that’s going to be so difficult to pull off. So, try to
              set some really small and simple goals - ones you know you can
              easily achieve. 4 areas to focus in are diet, sleep, exercise, and
              access to nature. Anything you can do to make small and simples
              steps forward in these areas will help you get some positive
              momentum going. It’s like trying to slowly move your car inch by
              inch…once you are out of the mud then you can really start
              cruising.
              <br />
              <br />
              <span className="span-green">Start a consultation</span> with one
              of our counselors and they can help you put together a plan to
              address social anxiety
            </p>
          </Accordion.Panel>
          <Accordion.Panel
            className="faq-questions-box"
            header="Do I really need therapy?"
            // defaultExpanded
          >
            <p className="answer">
              Lot’s of people ask this question. Whether or not anyone needs
              therapy is a really personal decision so the short answer is it
              sort of depends on what you are going through and how you feel
              about it. We make it easy to do a 3 day consultation so you can
              discuss your options with a counselor.
              <br />
              <br />
              Here are some of the benefits of going to therapy with a
              professional counselor:
              <br />
              1.They have training and education. <br />
              2.They have experience and expertise. <br />
              3.No judgment and a safe space to share.
              <br />
              <br />
              This means that your counselor can take all of their interactions
              working with previous clients who had circumstances similar to
              yours and use it to help you navigate your situation.
              <br />
              <br />
              <span className="span-green">Start a consultation</span>
              with one of our counselors and they can help you put together a
              plan to address social anxiety
            </p>
          </Accordion.Panel>
          <Accordion.Panel
            className="faq-questions-box"
            header="Can I schedule live sessions?"
            // defaultExpanded
          >
            <p className="answer">
              Live sessions aren’t included in the consultation or the
              subscription. Some online counseling sites include “free” sessions
              with their subscription but they actually build the cost in and
              are priced considerably higher. But most people don’t actually use
              them. So instead of charging everyone for what only a few will
              use, we allow clients to purchase sessions separately at a
              competitive rate for live counseling. You can schedule a session
              right from your inbox!
            </p>
          </Accordion.Panel>
          <Accordion.Panel
            className="faq-questions-box"
            header="How can a therapist help me improve my self-esteem?"
            // defaultExpanded
          >
            <p className="answer">
              The fact that you are here looking for answers to that question is
              a really good sign. It means that you are taking action to reach
              this goal. A good therapist can help you explore the challenges
              you are facing in your self-esteem and then present you with a
              plan to improve it. Growing up, we all form loads of self-images,
              most of them are positive and helpful but some are very unhelpful.
              A therapist will help you identify those unhelpful beliefs about
              yourself and their source. Then they will help you through the
              process of challenging them and changing them for the better.
              <br />
              <br />
              <span className="span-green">Start a consultation</span>
              with one of our counselors and they can help you put together a
              plan to address social anxiety
            </p>
          </Accordion.Panel>
          <Accordion.Panel
            className="faq-questions-box"
            header="How can counseling help with panic attacks?"
            // defaultExpanded
          >
            <p className="answer">
              There are lots of different ways that counseling can help with
              panic attacks. It’s important to discuss the unique nature of your
              circumstances with a counselor. You can do this by starting a
              consultation. The reason why this is important is that there are a
              lot of different ways people can experience panic attacks so it’s
              important for you to share a few detailed examples of your
              experience.
              <br />
              <br />
              In general, it’s important to remember that panic attacks are
              something that build up gradually over time. They are a sure sign
              that something in your perceptions is misaligned. For example, you
              may perceive danger where there is none or an imminent health
              crisis when you have been cleared by doctors. The patterns that
              contributed and lead to your development of panic attacks is
              something that needs to be identified. Then your counselor can
              help you see things from a different angle and modify your
              response to anxiety - this should help you get different results.
              It will take some time but it is totally possible to overcome
              panic attacks.
              <br />
              <br />
              <span className="span-green">Start a consultation</span>
              with one of our counselors and they can help you put together a
              plan to address social anxiety
            </p>
          </Accordion.Panel>
          <Accordion.Panel
            className="faq-questions-box"
            header="What is the best type of therapy for gender dysphoria?"
            // defaultExpanded
          >
            <p className="answer">
              If we have learned anything about gender over the last 20 years it
              is that one (or two) sizes do not fit all.The same is true for
              treatment. Each person’s journey in life is unique and their
              preferences for treatment might be different.
              <br />
              <br />
              The important thing is to find a good fit with a therapist -
              someone who is willing to explore the therapeutic method that
              works best for you. Talk to your therapist about your situation
              and your goals then share your communication preferences and
              style. This will help the two of you discuss different therapeutic
              options and help you feel out which might be the best fit for you.
              <br />
              <br />
              <span className="span-green">Start a consultation</span>
              with one of our counselors and they can help you put together a
              plan to address social anxiety
            </p>
          </Accordion.Panel>
          <Accordion.Panel
            className="faq-questions-box"
            header="How can I stop feeling worthless?"
            // defaultExpanded
          >
            <p className="answer">
              First, so sorry you are feeling this way about yourself. You might
              be surprised to know that a lot of people feel worthless. It’s one
              of the most common negative self-images that people experience.
              <br />
              <br />
              It’s best to discuss this with your counselor who will help you
              identify when and where this belief began and then help you
              challenge and change it.
              <br />
              <br />
              <span className="span-green">Start a consultation</span>
              with one of our counselors and they can help you put together a
              plan to address social anxiety
            </p>
          </Accordion.Panel>
        </Accordion>
        <button className="faq-btn">See All</button>
      </div>

      <CtaBanner/>
    </div>
  );
};

export default FAQ;
