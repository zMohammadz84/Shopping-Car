import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="lg:bg-white mt-auto lg:py-8 xl:py-0">
      <main className="container m-auto lg:px-20 px-5 xl:py-10">
        <section className="flex flex-col gap-y-14 xl:flex-row xl:justify-between">
          <div>
            <Image
              src="/icons/Logo.png"
              width={100}
              height={100}
              alt="logo"
              className="mb-5"
              priority
            />
            <p className="text-slate-400 xl:text-slate-500 xl:w-2/3">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
          <div className="flex flex-wrap gap-y-10 md:justify-between xl:w-1/3 xl:mr-16">
            <ul className="w-1/2 md:w-auto space-y-2  xl:space-y-4">
              <li className="text-lg mb-2">About</li>
              <li className="text-slate-400 xl:text-slate-500">
                <a href="#">How it works</a>
              </li>
              <li className="text-slate-400 xl:text-slate-500">
                <a href="#">Featured</a>
              </li>
              <li className="text-slate-400 xl:text-slate-500">
                <a href="#">Partnership</a>
              </li>
              <li className="text-slate-400 xl:text-slate-500">
                <a href="#">Bussiness Relation</a>
              </li>
            </ul>
            <ul className="w-1/2 md:w-auto space-y-2  xl:space-y-4">
              <li className="text-lg mb-2">Community</li>
              <li className="text-slate-400 xl:text-slate-500">
                <a href="#">Events</a>
              </li>
              <li className="text-slate-400 xl:text-slate-500">
                <a href="#">Blog</a>
              </li>
              <li className="text-slate-400 xl:text-slate-500">
                <a href="#">Podcast</a>
              </li>
              <li className="text-slate-400 xl:text-slate-500">
                <a href="#">Invite a friend</a>
              </li>
            </ul>
            <ul className="space-y-2 xl:space-y-4">
              <li className="text-lg mb-2">Socials</li>
              <li className="text-slate-400 xl:text-slate-500">
                <a href="#">Discord</a>
              </li>
              <li className="text-slate-400 xl:text-slate-500">
                <a href="#">Instagram</a>
              </li>
              <li className="text-slate-400 xl:text-slate-500">
                <a href="#">Twitter</a>
              </li>
              <li className="text-slate-400 xl:text-slate-500">
                <a href="#">Facebook</a>
              </li>
            </ul>
          </div>
        </section>
        <hr className="my-7" />
        <section className="flex flex-col text-sm md:flex-row-reverse md:justify-between ">
          <div className="flex justify-between md:gap-7">
            <span>Terms & Condition</span>
            <span>Privacy & Policy</span>
          </div>
          <p className="py-5 md:p-0">©2022 MORENT. All rights reserved</p>
        </section>
      </main>
    </footer>
  );
};

export default Footer;
