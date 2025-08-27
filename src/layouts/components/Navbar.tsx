import { IoNotifications } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="flex flex-row gap-x-5">
      <IoNotifications size={19} className="cursor-pointer" />
      <FaRegUserCircle size={19} className="cursor-pointer" />
    </div>
  );
};
