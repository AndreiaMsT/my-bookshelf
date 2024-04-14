import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col text-center gap-[10px] font-semibold mt-[20px]">
      <p>Developed by Andreia T.</p>
      <p className="mb-[15px]">Copyright &copy; {year}</p>
    </footer>
  );
};

export default Footer;
