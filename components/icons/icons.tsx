import { HiOutlineBattery0 } from "react-icons/hi2"
import { HiOutlineComputerDesktop } from "react-icons/hi2"
import { HiOutlineCake } from "react-icons/hi2"
import { PiBowlFood } from "react-icons/pi"

export const iconFormOptions = [
  { value: "battery", label: <HiOutlineBattery0 color={"#000"} /> },
  { value: "desktop", label: <HiOutlineComputerDesktop color={"#000"} /> },
  { value: "cake", label: <HiOutlineCake color={"#000"} /> },
  { value: "pibow", label: <PiBowlFood color={"#000"} /> },
];

export function getIconByString(target: string, size?: number) {
  const allIcons = [
    { key: "battery", jsx: <HiOutlineBattery0 size={size}/> },
    { key: "desktop", jsx: <HiOutlineComputerDesktop size={size}/> },
    { key: "cake", jsx: <HiOutlineCake size={size}/> },
    { key:"pibow", jsx: <PiBowlFood size={size}/> },
  ]

  return allIcons.find(icon => icon.key === target)?.jsx;
}