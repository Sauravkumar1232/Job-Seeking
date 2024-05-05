import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobZee Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
                {/* Sign Up: Click on the 'Register' button located at the bottom
                left corner of the homepage. Enter Details: Fill out the
                registration form with your name, email, phone, role , and a
                secure password. */}
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
                {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, culpa. */}
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
                {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, culpa. */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
