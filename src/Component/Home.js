import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./Home.css";
import aldiFoto from "../assets/foto_aldi.jpg";
import RightItem from "./RightItem";

export class Home extends Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Rey Porto</title>
          <meta name="description" content="Helmet application" />
        </Helmet>

        <div className="doubleColor">
          <div className="container mx-auto flex">
            {/* Left item */}
            <div className="my-10 w-1/2 flex justify-center ">
              <div className=" p-10 ">
                <img
                  src={aldiFoto}
                  alt="foto_aldi.jpg"
                  className="object-cover border-2 w-full h-full rounded-full "
                />
              </div>
            </div>
            {/* Right item */}
            <div className="w-1/2 my-10 p-10 flex items-center relative">
              <RightItem />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
