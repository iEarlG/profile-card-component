import React from 'react';

import coverPhoto from '../assets/images/bg-pattern-card.svg';
import profilePhoto from '../assets/images/image-victor.jpg';

const Contents = () => {
  return (
    <main>
      <div className="container">
        <div className="cover__photo-box">
          <img src={coverPhoto} alt="coverPhoto" className="cover-img" />
        </div>

        <div className="profile-photo">
          <img src={profilePhoto} alt="profilePhoto" className="profile-img" />
        </div>

        <div className="profile-info">
          <h1>Victor Crest</h1>
          <p>26</p>
        </div>
        <p className="profile-location">London</p>

        <div></div>

        <div className="profile__stats">
          <div className="followers">
            <h1>80k</h1>
            <p>Followers</p>
          </div>
          <div className="likes">
            <h1>803k</h1>
            <p>Likes</p>
          </div>
          <div className="photos">
            <h1>1.4k</h1>
            <p>Photos</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contents;