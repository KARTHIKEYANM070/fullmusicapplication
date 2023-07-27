import React, { useState } from 'react';
import './css/feed.scss';
function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Feedback:', feedback);
    // You can add your API call or further processing logic here
  };

  return (
    <div className='dfg'>
      <h2 style={{color:'skyblue'}}>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full Name:</label>
          <input className='tr'
            type="text"
            id="name"
            placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br/>
          <br/>
          <br/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder='Enter your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
            <br/>
          <br/>
          <br/>
        </div>
        <div>
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            placeholder='Enter your feednack'
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
