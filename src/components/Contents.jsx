import React from 'react';

import coverPhoto from '../assets/images/bg-pattern-card.svg';
import profilePhoto from '../assets/images/image-victor.jpg';

const Contents = () => {
  return (
    <main>
      <div className="container">
        <div className="wrapper">
           <img src={coverPhoto} alt="cover-photo" />

          <div className="contents">
            <img src={profilePhoto} alt="profile" />
            <h2>Victor Crest 
              <span>26</span>
            </h2>
            <p className="city">London</p>

            <div className="content">
              <div>
                <h1 className="stats">80k</h1>
                <p>Followers</p>
              </div>

              <div>
                <h1 className="stats">803k</h1>
                <p>Likes</p>
              </div>

              <div>
                <h1 className="stats">1.4k</h1>
                <p>Photos</p>
              </div>
            </div>
          </div>
        </div>
        <div className="attribution">
          Challenge by<a href="https://www.frontendmentor.io?ref=challenge" target="_blank"> Frontend Mentor</a>. 
          Coded by <a href="https://github.com/iEarlG" target="_blank">Earl A. Villapaz</a>.
        </div>
      </div>

    </main>
  );
};

export default Contents;