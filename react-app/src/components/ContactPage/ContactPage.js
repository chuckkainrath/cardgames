import React from "react";
import { NavLink } from "react-router-dom";
import "./ContactPage.css";

function ContactPage() {
  return (
      <div className="container mx-auto my-5 mb-10">
          <div className="flex justify-center font-extrabold text-7xl mb-10 mt-10"><h1>Contact the Developers</h1></div>
      <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
        <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
          <div
            className="img-card absolute inset-0 w-37 h-37 object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom background-blend-mode: multiply;"
            style={{
              backgroundImage:
                "url( https://i.ibb.co/fxRw7NF/Screen-Shot-2021-08-02-at-8-50-12-PM.png&auto=format&fit=crop&w=1350&q=80 )",
            }}
          ></div>

          <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900 m-2">
            <h3 className="w-full font-bold text-2xl text-white leading-tight mb-2">
              Software Engineer
            </h3>
            <h4 className="w-full text-xl text-gray-100 leading-tight m-2">
              Jeb Griffin
            </h4>
          </div>
          <svg
            className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>

        <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
          <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
            <h4 className="hidden md:block text-xl text-gray-400">
              Software Engineer/Full Stack Developer
            </h4>
            <h3 className="hidden md:block font-bold text-2xl text-gray-700">
              Jeb Griffin
            </h3>
            <p className="text-gray-600 text-justify m-2">
              Jeb enjoys React projects and working in both front/back end. With
              a history of being a professional chef, Jeb has a passion for
              creativity and unique designs. Upon graduating from App Academy's
              bootcamp, Jeb has worked on other personal projects such as{" "}
              <a href="https://eatbambu.herokuapp.com/">Bambu</a>
            </p>
            <div className="flex flex-row justify-evenly mt-2">
              <div id="githubLink">
                <a
                  href="https://github.com/JebGriffin85"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fab fa-github-alt"></i>
                </a>
              </div>
              <div id="linkedinLink">
                <a
                  href="https://www.linkedin.com/in/jeb-griffin-120631206/"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <div id="porfolio-link">
                <a
                  href="https://jebgriffin85.github.io/"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fas fa-user-secret"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
        <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
          <div
            className="img-card-2 absolute inset-0 w-37 h-37 object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom background-blend-mode: multiply;"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/R0hQdmc/Screenshot-20200210-125456-copy.png&auto=format&fit=crop&w=1350&q=80 )",
            }}
          ></div>

          <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900 m-2">
            <h3 className="w-full font-bold text-2xl text-white leading-tight mb-2">
              Software Engineer
            </h3>
            <h4 className="w-full text-xl text-gray-100 leading-tight m-2">
              Tristan San Juan
            </h4>
          </div>
          <svg
            className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>

        <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
          <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
            <h4 className="hidden md:block text-xl text-gray-400">
              Software Engineer/Full Stack Developer
            </h4>
            <h3 className="hidden md:block font-bold text-2xl text-gray-700">
              Tristan San Juan
            </h3>
            <p className="text-gray-600 text-justify m-2">
              Tristan is an avid gamer, who fell in love with the worlds being render in
              these game. He love the intricacy of the elements and logic behind
              the creation of these worlds in the game. As a pisces he naturally
              imagines world, but like to bring some of those world into the
              reality. After Covid he took upon this opportunity to become a
              software engineer/developer.
            </p>
            <div className="flex flex-row justify-evenly mt-2">
              <div id="githubLink">
                <a
                  href="https://github.com/tristan-88"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fab fa-github-alt"></i>
                </a>
              </div>
              <div id="linkedinLink">
                <a
                  href="https://www.linkedin.com/in/tristan-san-juan-75337920b/"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <div id="porfolio-link">
                <a
                  href="https://tristan-88.github.io/"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fas fa-user-secret"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
        <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
          <div
            className="img-card-2 absolute inset-0 w-37 h-37 object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom background-blend-mode: multiply;"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/dcnD6FV/DSC-8093-1.jpg&auto=format&fit=crop&w=1350&q=80 )",
            }}
          ></div>

          <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900 m-2">
            <h3 className="w-full font-bold text-2xl text-white leading-tight mb-2">
              Software Engineer
            </h3>
            <h4 className="w-full text-xl text-gray-100 leading-tight m-2">
              Chuck Kainrath
            </h4>
          </div>
          <svg
            className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>

        <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
          <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
            <h4 className="hidden md:block text-xl text-gray-400">
              Software Engineer/Full Stack Developer
            </h4>
            <h3 className="hidden md:block font-bold text-2xl text-gray-700">
              Chuck Kainrath
            </h3>
            <p className="text-gray-600 text-justify m-2">
              Chuck is detail-oriented software engineer who has experience
              building dynamic web applications using React/Redux on the
              frontend and Flask/SQLAlchemy/PostgreSQL on the backend. Whether
              he is working with a team or solo, Who he is loves to write code
              and produce results.
            </p>
            <div className="flex flex-row justify-evenly mt-2">
              <div id="githubLink">
                <a
                  href="https://github.com/chuckkainrath"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fab fa-github-alt"></i>
                </a>
              </div>
              <div id="linkedinLink">
                <a
                  href="https://www.linkedin.com/in/chuck-kainrath-42820b20b/"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <div id="porfolio-link">
                <a
                  href="https://chuckkainrath.github.io"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fas fa-user-secret"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
