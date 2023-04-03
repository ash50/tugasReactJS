import React, { Component } from "react";
import { Helmet } from "react-helmet";
import aldiFoto from "../assets/foto_aldi.jpg";
import { Link } from "react-router-dom";

export class Portofolio extends Component {
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
              <div className="flex flex-col ">
                <div className="font-bold text-xl">
                  Halo salam kenal, Nama Saya Reynaldi atau biasa dipanggil Aldi
                </div>
                <div>
                  saya saat ini bekerja di bidang non IT, namun saya ingin
                  belajar dan menguasi bidang IT
                </div>
                <div>Saya sudah bekerja selama 4 tahun</div>
                <div>
                  Saya sudah mengikut beberapa project dengan besaran project
                  yaitu :
                </div>
                <div>1. New Core System</div>
                <div>2. Digital After sales Services</div>
                <div>3. Automation Process</div>
                <Link
                  to={"/Contact"}
                  className="flex justify-center mt-5 w-[20%] rounded-full bg-white"
                >
                  Hubungi Saya!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Portofolio;
