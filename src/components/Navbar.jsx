import React from "react";
import { links } from "../../data";

const Navbar = () => {
  return (
    <div className="bg-emerald-100">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Rasif<span className="text-emerald-500">Ajowad</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map(({ id, href, text }) => {
            return (
              <a
                className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
                key={id}
                href={href}
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
