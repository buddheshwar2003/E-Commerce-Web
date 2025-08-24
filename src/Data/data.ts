import type { IconType } from "react-icons";
import { FiSmartphone } from "react-icons/fi";
import { FaTv } from "react-icons/fa";
import { BsSmartwatch } from "react-icons/bs";
import { AiOutlineLaptop } from "react-icons/ai";
import { GiHeadphones } from "react-icons/gi";
import { BiJoystick } from "react-icons/bi";

interface MenuItem {
  label: string;
  value:string;
  icon: IconType;
}

export const categoryList: MenuItem[] = [
  { label: "Smart Phones", value:'mobile', icon: FiSmartphone },
  { label: "Gaming",value:'gaming', icon: BiJoystick},
  { label: "Laptops",value:'laptop' ,icon: AiOutlineLaptop },
  { label: "Headphones", value:'audio', icon: GiHeadphones },
  { label: "TV", value:'tv', icon: FaTv },
  { label: "Appliances", value:'appliances' , icon: BsSmartwatch },
];
