import React, { useContext } from "react";
import { Popover, Transition } from "@headlessui/react";
import Heart from "@/public/icons/Heart";
import Notification from "@/public/icons/Notification";
import Setting from "@/public/icons/Setting";
import Search from "@/public/icons/Search";
import Filter from "@/public/icons/Filter";
import Link from "next/link";
import Image from "next/image";
import { FavoriteListContext } from "@/context/FavoriteListContext";

const Header = () => {
  const [favoriteList] = useContext(FavoriteListContext);

  return (
    <header className="bg-primary-0 lg:sticky top-0 z-50">
      <div className="container m-auto flex flex-col lg:flex-row p-5 gap-5 lg:px-20">
        <section className="flex justify-between items-center ">
          <Link href="/" className="h-5">
            <Image
              src="/icons/Logo.png"
              width={100}
              height={100}
              alt="logo"
              priority
            />
          </Link>
          <Popover className=" lg:hidden flex relative w-10 h-10">
            {({ open }) => (
              <>
                <Popover.Button className="w-full rounded-full overflow-hidden bg-blue-300 border-0 outline-0">
                  <img src="/image/me.jpg" alt="" />
                </Popover.Button>
                <Popover.Overlay className="fixed inset-0 bg-black opacity-30 z-10" />

                <Transition
                  show={open}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                  className="z-40"
                >
                  <Popover.Panel className="absolute flex justify-between z-50 w-44 top-12 -translate-x-48 bg-primary-0 p-2 px-3 rounded lg">
                    <Link
                      href="/favorite"
                      className="p-2 border hover:border-slate-300 transition rounded-full hover:bg-slate-100 relative"
                    >
                      <Heart />
                      <span className="absolute w-4 h-4 bg-orange-50 -top-1 right-0 rounded-full text-xs flex justify-center items-center text-white">
                        {favoriteList.length}
                      </span>
                    </Link>
                    <Link
                      href="/notification"
                      className=" relative p-2 border hover:border-slate-300 transition rounded-full hover:bg-slate-100"
                    >
                      <Notification />
                      <span className="absolute w-3 h-3 bg-orange-50 -top-0.5 right-0.5 rounded-full ">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-50 opacity-75"></span>
                      </span>
                    </Link>
                    <a
                      href="#"
                      className="p-2 border hover:border-slate-300 transition rounded-full hover:bg-slate-100"
                    >
                      <Setting />
                    </a>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </section>
        <section className=" grow flex gap-5 ">
          <div className="flex justify-between items-center relative grow lg:grow-0 w-[28rem] lg:ml-16 border border-primary-40 lg:rounded-full rounded-10 overflow-hidden">
            <div className="middle pointer-events-none absolute top-1/2 -translate-y-1/2 left-2  lg:left-5">
              <Search />
            </div>
            <input
              className="px-10 py-3 border-0 outline-0 lg:py-2 lg:pl-14 lg:pr-0 w-full border-red-800"
              type="text"
              placeholder="Search something here"
            />
            <Link
              href="/filter"
              className=" !hidden lg:!flex middle cursor-pointer h-full w-14 px-4"
            >
              <Filter />
            </Link>
          </div>
          <Link
            href="/filter"
            className="cursor-pointer middle lg:hidden border border-primary-40 rounded-10 w-20"
          >
            <Filter />
          </Link>
        </section>
        <section
          className="hidden lg:flex items-center justify-center gap-2
          "
        >
          <Link
            href="/favorite"
            className="p-2 border hover:border-slate-300 transition rounded-full hover:bg-slate-100 relative"
          >
            <Heart />
            <span className="absolute w-4 h-4 bg-orange-50 -top-1 right-0 rounded-full text-xs flex justify-center items-center text-white">
              {favoriteList.length}
            </span>
          </Link>
          <Link
            href="/notification"
            className=" relative p-2 border hover:border-slate-300 transition rounded-full hover:bg-slate-100 "
          >
            <Notification />
            <span className="absolute w-3 h-3 bg-orange-50 -top-0.5 right-0.5 rounded-full ">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-50 opacity-75"></span>
            </span>
          </Link>
          <a
            href="#"
            className="p-2 border hover:border-slate-300 transition rounded-full hover:bg-slate-100"
          >
            <Setting />
          </a>
          <div className="w-10 h-10 overflow-hidden rounded-full cursor-pointer">
            <img src="/image/me.jpg" alt="" />
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
