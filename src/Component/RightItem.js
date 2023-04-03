import React, { Component } from "react";
import { Link } from "react-router-dom";
import Portofolio from "./Portofolio";

export class RightItem extends Component {
  render() {
    return (
      <div className="flex flex-col gap-y-1">
        <div className="text-xl items-center flex">Welcome</div>
        <div className="text-4xl">to my Personal Portofolio!</div>
        <Link
          to={"/Portofolio"}
          className="flex justify-center mt-5 border-white bg-white border-2 rounded-full w-[40%] "
        >
          Click here to Start!
        </Link>
      </div>
    );
  }
}

export default RightItem;
