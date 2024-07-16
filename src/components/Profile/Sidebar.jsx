// Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import dashboardIcon from "../../assets/dashboard.webp";
import invoicesIcon from "../../assets/invoices.webp";
import clients from "../../assets/clients.webp";
import accounts from "../../assets/world.webp";
import analytics from "../../assets/analytics.webp";
import referrals from "../../assets/referrals.webp";
import johndoe from "../../assets/johndoe.webp";

function Sidebar({ tabs, selected, setSelected, value }) {
  const icons = {
    Dashboard: dashboardIcon,
    Invoices: invoicesIcon,
    Clients: clients, // Example, adjust as needed
    ExternalAccounts: accounts, // Example, adjust as needed
    Analytics: analytics, // Example, adjust as needed
    Referrals: referrals, // Example, adjust as needed
    // Add more icons as needed
  };

  return (
    <div className="relative bg-[#FFFFFF03] max-w-[250px] lg:w-[303px] text-[#FFFFFF66] shadow-sm text-md font-semibold hidden sm:block min-h-[100vh]">
      <div className="options text-start flex-col flex items-start mx-6 mt-8">
        {tabs?.map((tab) => (
          <Tab
            key={tab}
            text={tab}
            selected={selected === tab}
            setSelected={setSelected}
            icon={icons[tab]}
          />
        ))}
        <h1 className="flex w-full items-center text-lg gap-3 mt-5 px-4 p-3 bg-[#2f324156] mx-4 rounded-xl text-[#FFFFFF66] font-semibold">
          <img src={johndoe} className="rounded-full"/>
          John doe
        </h1>
      </div>
      <h2 className="absolute bottom-3 pt-3 text-sm font-normal text-[#FFFFFF66] border-t border-[#FFFFFF0D] w-full">
        &nbsp; &nbsp; Product version 1.0.0
      </h2>
    </div>
  );
}

const Tab = ({ text, selected, setSelected, icon }) => {
  return (
    <Link
      to={text === "Dashboard" ? "/dashboard" : `/${text.toLowerCase()}`}
      onClick={() => setSelected(text)}
    >
      <button
        className={`${
          selected ? "bg-[#0C0D18] transition-all " : ""
        } flex items-center gap-3 min-w-[200px] py-4 rounded-lg px-4 mt-3 hover:bg-[#2f324156] active:bg-[#2f324156]`}
      >
        <img src={icon} alt={text} className="w-6 h-6" /> {/* Example using img tag */}
        {text}
      </button>
    </Link>
  );
};

export default Sidebar;
