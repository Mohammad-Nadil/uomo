import React from "react";
import Container from "./Container";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import payment from "@/public/images/payment.png";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const item = [
    {
      title: "company",
      list: ["about us", "career", "affiliate", "blog", "contact us"],
    },
    {
      title: "shop",
      list: ["new arrivals", "accessories", "men", "women", "shop all"],
    },
    {
      title: "help",
      list: [
        "customer service",
        "my account",
        "fing a store",
        "legal & privacy",
        "contact",
        "gift card",
      ],
    },
  ];
  const languages = [
    "United Kingdom | English",
    "United States | English",
    "Bangla | বাংলা",
    "Arabic | العربية",
    "Urdu | اردو",
  ];
  const currencies = ["USD", "EUR", "BDT"];
  return (
    <footer className="bg-[#e4e4e4]">
      <Container className={"grid grid-cols-1 lg:grid-cols-4 gap-16 xl:gap-20 py-20 lg:py-25"}>
        <div className=" col-span-1 flex flex-col gap-y-11">
          <div className="logo">
            <Image src={logo} alt="logo" />
          </div>
          <div className="location capitalize text-sm text-primary">
            <p>1418 River Drive, Suite 35 Cottonhall, CA 9622</p>
            <p>United States</p>
          </div>
          <div className="contact font-medium text-primary">
            <p className="mail">sale@uomo.com</p>
            <p className="number">+1 246-345-0695</p>
          </div>
          <div className="social flex items-center gap-x-10 lg:justify-between xl:gap-11">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map(
              (Icon, index) => (
                <Icon
                  key={index}
                  className="text-xl text-secondary hover:text-primary duration-300"
                />
              ),
            )}
          </div>
        </div>
        <div className=" col-span-1 lg:col-span-2 flex flex-wrap sm:justify-around lg:justify-between gap-20 sm:gap-10">
          {item.map((item, index) => (
            <div key={index} className="text-primary flex flex-col  gap-y-7">
              <p className="text-lg font-medium uppercase ">{item.title}</p>
              <ul className="flex flex-col gap-y-5">
                {item.list.map((list, index) => (
                  <li
                    key={index}
                    className="capitalize text-sm custom-underline"
                  >
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className=" col-span-1 text-primary flex flex-col gap-y-7 ">
          <p className="title text-lg font-medium">subscribe</p>
          <div className="input flex flex-col gap-y-4">
            <p className="text-sm ">
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
            <div className="input-field relative">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Your email address"
                className="w-full bg-white py-4 px-7 text-sm focus:outline-none focus:border-black "
              />
              <button className="text-sm font-medium text-primary absolute top-1/2 right-0 -translate-1/2 uppercase">
                join
              </button>
            </div>
          </div>
          <div className="payment">
            <p className="font-medium text-primary">Secure Payment</p>
            <Image src={payment} alt="payment" width={320} height={100} />
          </div>
        </div>
      </Container>
      <Container>
        <div className="hidden sm:flex items-center justify-between py-5 border-t border-secondary">
          <p className="text-sm text-primary">
            Copyright © 2022 All Rights Reserved
          </p>
          <div className="flex items-center gap-10 ">
            <div className="language flex items-center gap-x-7 capitalize">
              <h2 className="text-sm text-secondary ">language</h2>
              <select
                name="language"
                id="language"
                className="outline-none text-sm text-primary "
              >
                {languages.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="currency capitalize flex items-center gap-x-7">
              <h2>currency</h2>
              <select
                name="currency"
                id="currency"
                className="outline-none text-sm text-primary "
              >
                {currencies.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
