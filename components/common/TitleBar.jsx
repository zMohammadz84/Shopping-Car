import React from "react";

const TitleBar = ({ title, isHidden }) => {
  return (
    <section className="flex justify-between lg:px-0">
      <span className="py-5 text-sm text-slate-500 lg:text-base">{title}</span>
      <a
        hidden={isHidden}
        className="py-5 text-xs text-primary-500 lg:text-base"
        href="#"
      >
        View All
      </a>
    </section>
  );
};

export default TitleBar;
