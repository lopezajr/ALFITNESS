import React from 'react';
import './Example.css';

const Example = () => {
  return (
    <div className="example-container">
      <div className="content">
        <h1>TRAINING</h1>
        <p>
          Our certified personal trainers create the perfect programs to help you reach your goals, designed 100% around you. And they’ll be cheering you on when you cross that finish line like a badass, too.
        </p>
      </div>
      <hr />

      <div className="container">
        <div className="image-container">
          <img src='https://tinyurl.com/vhj5skyz' alt='Fitness' />
        </div>
        <div className="text-container">
          <h2>OUR MISSION</h2>
          <p>
            Here at AL Fitness, we focus on bringing you the most powerful workouts to meet your needs: our toolbox includes weighted battle ropes, kettlebells, TRX® suspension straps, MMA equipment, Bulgarian Bags, and the list goes on.

            It may sound like a mouthful, but this world-class functional training equipment helps our trainers provide you with an array of High Intensity Interval Training (HIIT) workouts.

            AL Fitness offers HIITZone, an all-encompassing fitness program including personal training, small group training, and nutrition.
          </p>
        </div>
      </div>

      <hr />

      <div className="container">
        <div className="text-container">
          <h2>PERSONAL TRAINING</h2>
          <p>
            Our experienced trainers develop fun individualized fitness programs that incorporate cutting-edge exercises and nutrition to help you crush your fitness goals. Plus, AL Fitness Spersonal trainers in the HIITZone program use the Combative Training Center to help you reach your fitness goals.

            With specialized certifications that ensure you’re getting an effective workout, our trainers provide limitless motivation for everyone. You don’t need to be a professional athlete or aspiring fitness guru to be part of our programs. And if you’re already a professional athlete, we still want to hang with you.
          </p>
        </div>
        <div className="image-container">
          <img src='https://tinyurl.com/2ajc5f78' alt='Fitness' />
        </div>
      </div>

      <hr />

      <div className="container">
        <div className="image-container">
          <img src='https://tinyurl.com/mr4y5jke' alt='Fitness' />
        </div>
        <div className="text-container">
          <h2>NUTRITION</h2>
          <p>
            Proper nutrition fuels your workouts and helps you get the most out of your time at the club. That’s why our trainers work with you to develop customized nutrition plans through dotFIT that focus on your specific needs, tastes, and dietary restrictions.

            Your plan comes with an amazing online platform to keep you feeling awesome about your weight loss, strength training or rehabilitation journey. With personalized coaching and a diverse community of supportive peers, our partnership with dotFIT makes the hard work of working out just a little easier. HIITZone and Crunch Signature Personal Trainers are dotFIT experts ready to help you get healthy!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Example;
