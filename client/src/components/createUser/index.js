import React from 'react';

const createNewUser = (props) => {
  

  return (
    <div>
      <form className="form-group mt-5 mb-5">
        <input className="form-control mb-5" name="username" type="username" placeholder="Username" />
        <input className="form-control mb-5" name="password" type="password" placeholder="Password" />
        <button className="btn btn-success mt-3 mb-5" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default createNewUser;