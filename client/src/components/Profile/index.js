import React from 'react';

const Profile = (props) => {

  return (
    <div>
      {props.users.map((user, index) => (
        <div className="card my-2" style={{ width: "18rem" }}>
          <img src="" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {user.username} </h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Profile;