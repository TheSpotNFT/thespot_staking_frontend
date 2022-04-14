import React from "react";

function Footer() {
  return (
    <div className="text-white font-mono mb-3 bg-slate-900 py-20 text-right px-12">
      <p>&copy; {new Date().getFullYear()} TheSpot.wtf</p>
    </div>
  );
}

export default Footer;
