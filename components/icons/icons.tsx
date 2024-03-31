import { MdImageNotSupported } from "react-icons/md";
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
  IoLaptopOutline,
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
  { value: "notsupported", label: <MdImageNotSupported color={"#000"} /> },
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
  { value: "game", label: <IoGameControllerOutline color={"#000"} /> },
  { value: "fastfood", label: <IoFastFoodOutline color={"#000"} /> },
  { value: "phone", label: <IoPhonePortraitOutline color={"#000"} /> },
  { value: "key", label: <IoKeyOutline color={"#000"} /> },
  { value: "shirt", label: <IoShirtOutline color={"#000"} /> },
  { value: "document", label: <IoDocumentOutline color={"#000"} /> },
  { value: "bed", label: <IoBedOutline color={"#000"} /> },
  { value: "laptop", label: <IoLaptopOutline color={"#000"} /> },
  { value: "tablet", label: <CiTablets1 color={"#000"} /> },
  { value: "keybord", label: <CiKeyboard color={"#000"} /> },
  { value: "mouse", label: <CiDesktopMouse1 color={"#000"} /> },
  { value: "creditcard", label: <CiCreditCard1 color={"#000"} /> },
  { value: "glass", label: <CiGlass color={"#000"} /> },
  { value: "screentablet", label: <SlScreenTablet color={"#000"} /> },
  { value: "earphones", label: <SlEarphones color={"#000"} /> },
  { value: "eyeglass", label: <SlEyeglass color={"#000"} /> },
  { value: "bowl", label: <CgBowl color={"#000"} /> },
  { value: "display", label: <FaDisplay color={"#000"} /> },
  { value: "washdry", label: <TbWashDry2 color={"#000"} /> },
  { value: "addresscard", label: <FaAddressCard color={"#000"} /> },
  { value: "car", label: <LuCar color={"#000"} /> },
  { value: "refrigerator", label: <LuRefrigerator color={"#000"} /> },
  { value: "baguette", label: <TbBaguette color={"#000"} /> },
  { value: "shoe", label: <TbShoe color={"#000"} /> },
  { value: "backpack", label: <BsBackpack2 color={"#000"} /> },
  { value: "spray", label: <FaSprayCanSparkles color={"#000"} /> },
  { value: "spraycan", label: <LiaSprayCanSolid color={"#000"} /> },
  { value: "pencilruler", label: <RiPencilRuler2Line color={"#000"} /> },
  { value: "blank", label: <VscBlank color={"#000"} /> },
];

export function getIconByString(target: string, size?: number) {
  const allIcons = [
    { key: "notsupported", jsx: <MdImageNotSupported size={size} /> },
    { key: "battery", jsx: <HiOutlineBattery0 size={size} /> },
    { key: "desktop", jsx: <HiOutlineComputerDesktop size={size} /> },
    { key: "cake", jsx: <HiOutlineCake size={size} /> },
    { key: "bowlfood", jsx: <PiBowlFood size={size} /> },
    { key: "bag", jsx: <PiBagLight size={size} /> },
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
    { key: "game", jsx: <IoGameControllerOutline size={size} /> },
    { key: "fastfood", jsx: <IoFastFoodOutline size={size} /> },
    { key: "phone", jsx: <IoPhonePortraitOutline size={size} /> },
    { key: "key", jsx: <IoKeyOutline size={size} /> },
    { key: "shirt", jsx: <IoShirtOutline size={size} /> },
    { key: "document", jsx: <IoDocumentOutline size={size} /> },
    { key: "bed", jsx: <IoBedOutline size={size} /> },
    { key: "laptop", jsx: <IoLaptopOutline size={size} /> },
    { key: "tablet", jsx: <CiTablets1 size={size} /> },
    { key: "keybord", jsx: <CiKeyboard size={size} /> },
    { key: "mouse", jsx: <CiDesktopMouse1 size={size} /> },
    { key: "creditcard", jsx: <CiCreditCard1 size={size} /> },
    { key: "glass", jsx: <CiGlass size={size} /> },
    { key: "screentablet", jsx: <SlScreenTablet size={size} /> },
    { key: "earphones", jsx: <SlEarphones size={size} /> },
    { key: "bowl", jsx: <CgBowl size={size} /> },
    { key: "display", jsx: <FaDisplay size={size} /> },
    { key: "washdry", jsx: <TbWashDry2 size={size} /> },
    { key: "addresscard", jsx: <FaAddressCard size={size} /> },
    { key: "car", jsx: <LuCar size={size} /> },
    { key: "refrigerator", jsx: <LuRefrigerator size={size} /> },
    { key: "baguette", jsx: <TbBaguette size={size} /> },
    { key: "shoe", jsx: <TbShoe size={size} /> },
    { key: "backpack", jsx: <BsBackpack2 size={size} /> },
    { key: "spray", jsx: <FaSprayCanSparkles size={size} /> },
    { key: "spraycan", jsx: <LiaSprayCanSolid size={size} /> },
    { key: "pencilruler", jsx: <RiPencilRuler2Line size={size} /> },
    { key: "blank", jsx: <VscBlank size={size} /> },
    { key: "blanket", jsx: <BiBlanket size={size} /> },
  ];

  return allIcons.find((icon) => icon.key === target)?.jsx;
}
