import React from "react";
import SettingPopup from "./SettingPopup";
import { Logo } from "./Logo";
import ConnectWallet from "@/components/wallet/ConnectWallet";
import DropDown from "@/components/wallet/DropDown";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import Image from "next/image";
import {
  Fission,
  Fusion,
  TransmuteFromGold,
  TransmuteToGold,
} from "./constant";
import hamburgerIcon from "../public/hamburger.png";
interface IProps {
  activeTab: string;
  setActiveTab: Function;
  socket: Socket<DefaultEventsMap, DefaultEventsMap> | undefined;
}

const Navbar = (props: IProps) => {
  const { activeTab, setActiveTab, socket } = props;
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="flex container items-center justify-between mx-auto px-2 sm:px-3 lg:px-5 py-4 text-black">
        <h1>Gluon Gold on Ergo</h1>

        <div className="flex items-center space-x-3 sm:space-x-4">
          <div
          // style={{
          //   backgroundImage:
          //     "linear-gradient(to right, #C8B209, #FFBF00) !important",
          // }}
          >
            <DropDown />
          </div>

          <div className="hidden sm:block">
            <ConnectWallet socket={socket} />
          </div>
        </div>
      </nav>

      <div className="sm:hidden w-full ">
        <ConnectWallet socket={socket} />
      </div>
      <button className="sm:hidden" onClick={toggleMenu}>
        <div className="flex items-center space-x-2 ">
          <Image src={hamburgerIcon} alt="Logo" width={46} height={46} />
          {activeTab}
        </div>
      </button>

      {/* Hamburger menu content */}
      <div className={`sm:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="primary-gradient py-3 flex flex-col items-center justify-center space-y-4">
          {/* Tab Buttons */}
          <TabButton
            title={"About"}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setIsMenuOpen={setIsMenuOpen}
          />
          <TabButton
            title={Fission}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setIsMenuOpen={setIsMenuOpen}
          />
          <TabButton
            title={Fusion}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setIsMenuOpen={setIsMenuOpen}
          />
          <TabButton
            title={TransmuteToGold}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setIsMenuOpen={setIsMenuOpen}
          />
          <TabButton
            title={TransmuteFromGold}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </div>

      {/* Regular display of tab buttons for larger screens */}
      <div className="hidden sm:flex primary-gradient w-full py-3 text-center items-center space-x-12 sm:space-x-20 justify-center">
        {/* Tab Buttons */}
        <TabButton
          title={"About"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setIsMenuOpen={setIsMenuOpen}
        />
        <TabButton
          title={Fission}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setIsMenuOpen={setIsMenuOpen}
        />
        <TabButton
          title={Fusion}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setIsMenuOpen={setIsMenuOpen}
        />
        <TabButton
          title={TransmuteToGold}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setIsMenuOpen={setIsMenuOpen}
        />
        <TabButton
          title={TransmuteFromGold}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
    </>
  );
};

const TabButton = ({ title, activeTab, setActiveTab, setIsMenuOpen }: any) => (
  <button
    onClick={() => {
      setIsMenuOpen(false);
      setActiveTab(title);
    }}
    className={`text-white font-medium font-inter text-lg uppercase transition-all duration-200 ease-in-out relative after:absolute after:-bottom-[11px] after:left-1/2 after:-translate-x-1/2 after:bg-white after:h-1 ${
      activeTab === title ? "after:w-[130%]" : ""
    }`}
  >
    {title}
  </button>
);

export default Navbar;
