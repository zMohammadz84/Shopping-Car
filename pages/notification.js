import Head from "next/head";
import React from "react";

const Notification = () => {
  return (
    <>
      <Head>
        <title>Notification</title>
      </Head>
      <div className=" text-2xl gap-5 lg:text-5xl flex flex-col lg:gap-16 justify-center items-center py-10 bg-slate-800 h-screen text-white">
        <p className="thanks">Thank You For Your Time</p>
        <p>😉😉😉</p>
      </div>
    </>
  );
};

export default Notification;
