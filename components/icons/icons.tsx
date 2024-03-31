import { HiOutlineBattery0 } from "react-icons/hi2";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { HiOutlineCake } from "react-icons/hi2";
import {
  PiBowlFood,
  PiBagLight,
  PiCarrotLight,
  PiPantsLight,
  PiCoatHangerLight,
} from "react-icons/pi";
import {
  GiClothes,
  GiSaucepan,
  GiWoodenChair,
  GiVacuumCleaner,
  GiMedicines,
  GiTowel,
  GiTable,
} from "react-icons/gi";
import {
  IoGameControllerOutline,
  IoFastFoodOutline,
  IoPhonePortraitOutline,
  IoKeyOutline,
  IoShirtOutline,
  IoDocumentOutline,
  IoBedOutline,
} from "react-icons/io5";
import {
  CiTablets1,
  CiKeyboard,
  CiDesktopMouse1,
  CiCreditCard1,
  CiGlass,
} from "react-icons/ci";
import { SlScreenTablet, SlEarphones, SlEyeglass } from "react-icons/sl";
import { CgBowl } from "react-icons/cg";
import { FaDisplay } from "react-icons/fa6";
import { TbWashDry2 } from "react-icons/tb";
import { FaAddressCard } from "react-icons/fa";
import { LuCar, LuRefrigerator } from "react-icons/lu";
import { TbBaguette, TbShoe } from "react-icons/tb";
import { BsBackpack2 } from "react-icons/bs";
import { FaSprayCanSparkles } from "react-icons/fa6";
import { LiaSprayCanSolid } from "react-icons/lia";
import { RiPencilRuler2Line } from "react-icons/ri";
import { VscBlank } from "react-icons/vsc";
import { BiBlanket } from "react-icons/bi";

export const iconFormOptions = [
  { value: "battery", label: <HiOutlineBattery0 color={"#000"} /> },
  { value: "desktop", label: <HiOutlineComputerDesktop color={"#000"} /> },
  { value: "cake", label: <HiOutlineCake color={"#000"} /> },
  { value: "bowlfood", label: <PiBowlFood color={"#000"} /> },
  { value: "bag", label: <PiBagLight color={"#000"} /> },
  { value: "carrot", label: <PiCarrotLight color={"#000"} /> },
  { value: "pants", label: <PiPantsLight color={"#000"} /> },
  { value: "hanger", label: <PiCoatHangerLight color={"#000"} /> },
  { value: "cloths", label: <GiClothes color={"#000"} /> },
  { value: "saucepan", label: <GiSaucepan color={"#000"} /> },
  { value: "chair", label: <GiWoodenChair color={"#000"} /> },
  { value: "cleaner", label: <GiVacuumCleaner color={"#000"} /> },
  { value: "medicines", label: <GiMedicines color={"#000"} /> },
  { value: "towel", label: <GiTowel color={"#000"} /> },
  { value: "table", label: <GiTable color={"#000"} /> },
];

export function getIconByString(target: string, size?: number) {
  const allIcons = [
    { key: "battery", jsx: <HiOutlineBattery0 size={size} /> },
    { key: "desktop", jsx: <HiOutlineComputerDesktop size={size} /> },
    { key: "cake", jsx: <HiOutlineCake size={size} /> },
    { key: "bag", jsx: <PiBowlFood size={size} /> },
    { key: "carrot", jsx: <PiCarrotLight size={size} /> },
    { key: "pants", jsx: <PiPantsLight size={size} /> },
    { key: "hanger", jsx: <PiCoatHangerLight size={size} /> },
    { key: "cloths", jsx: <GiClothes size={size} /> },
    { key: "saucepan", jsx: <GiSaucepan size={size} /> },
    { key: "chair", jsx: <GiWoodenChair size={size} /> },
    { key: "cleaner", jsx: <GiVacuumCleaner size={size} /> },
    { key: "medicines", jsx: <GiMedicines size={size} /> },
    { key: "towel", jsx: <GiTowel size={size} /> },
    { key: "table", jsx: <GiTable size={size} /> },
  ];

  return allIcons.find((icon) => icon.key === target)?.jsx;
}
