import React, { Component } from "react";
import { Helmet } from "react-helmet";
import aldiFoto from "../assets/foto_aldi.jpg";
import { Link } from "react-router-dom";
import iconWa from "../assets/icons8-whatsapp-144.png";
import iconIg from "../assets/icons8-instagram-144.png";
import iconLinkedin from "../assets/icons8-linkedin-144.png";

export class Contact extends Component {
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
            <div className="w-1/2 my-10 p-10 flex flex-col justify-center items-center  relative">
              <div className="flex w-full justify-between">
                <Link to="https://wa.me/6287874574409" target="newtab">
                  <img src={iconWa} alt="" className="w-[72px] h-[72px]" />
                </Link>
                <Link
                  to="https://instagram.com/aldi_iman?igshid=Mzc1MmZhNjY="
                  target="newtab"
                >
                  <img src={iconIg} alt="" className="w-[72px] h-[72px]" />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/reynaldiiman"
                  target="newtab"
                >
                  <img
                    src={iconLinkedin}
                    alt=""
                    className="w-[72px] h-[72px]"
                  />
                </Link>
              </div>
              <div className="flex w-full justify-between">
                <div>Whatsapp</div>
                <div>Instagram : @aldi_iman</div>
                <div>Linkedin</div>
              </div>
              <Link
                to={"/"}
                className="flex  justify-center mt-5 w-full rounded-full bg-white"
              >
                Kembali
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
