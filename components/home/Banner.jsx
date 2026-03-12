import React from "react";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
import { BsDashLg } from "react-icons/bs";

const Banner = () => {
  return (
    <div>
      <Image src="" alt="" />
      <Container className={"py-66 flex items-center justify-start"}>
        <div className="inner max-w-196 text-white ">
          <div className="category flex items-center ">
            <BsDashLg /> <p> Glasses</p>
          </div>
          <div className="title">UP TO $60 OFF POLARISED SUNGLASSES</div>
          <div className="btn">
            <Link href={"/"}></Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
