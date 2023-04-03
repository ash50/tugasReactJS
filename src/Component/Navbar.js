import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Navbar extends Component {
  render() {
    return (
      <div className="text-3xl bg-slate-400 text-white">
        <div className="container mx-auto ">
          <div className="flex gap-x-60 font-bold justify-center p-3">
            <Link to={"/"}>Home</Link>
            <Link to={"/Portofolio"}>Portofolio</Link>
            <Link to={"/Contact"}>Contact</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
