import React, { useState } from 'react';
import "./FeedbackForm.css"

function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [robotChecked, setRobotChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!robotChecked) {
      alert('Please confirm that you are not a robot.');
      return;
    }
    // Here you can submit the feedback data to your backend or perform any other action
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Comment:', comment);
    // Reset form fields
    setName('');
    setEmail('');
    setComment('');
    setRobotChecked(false);
  };

  return (
    <div className='feedback-form-main'>
      {/* <h2>Post Feedback</h2> */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>
        <div className=' checkbox'>
          <input
            type="checkbox"
            id="robotChecked"
            checked={robotChecked}
            onChange={(e) => setRobotChecked(e.target.checked)}
            required
          />
          <label htmlFor="robotChecked">I am not a robot</label>
        </div>
        <button className='start-therapy-btn' type="submit">Post Feedback</button>
      </form>
    </div>
  );
}

export default FeedbackForm;