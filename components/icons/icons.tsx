import { HiOutlineBattery0 } from "react-icons/hi2"
import { HiOutlineComputerDesktop } from "react-icons/hi2"
import { HiOutlineCake } from "react-icons/hi2"
import { PiBowlFood } from "react-icons/pi"

export function getIconFormList() {
  const iconFormOptions = [
    { value: "battery", label: <HiOutlineBattery0 color={"#000"} /> },
    { value: "desktop", label: <HiOutlineComputerDesktop color={"#000"} /> },
    { value: "cake", label: <HiOutlineCake color={"#000"} /> },
    { value: "pibow", label: <PiBowlFood color={"#000"} /> },
  ];
}

export function getIconByString(target: string) {
  const allIcons = [
    { key: "battery", jsx: <HiOutlineBattery0 /> },
    { key: "desktop", jsx: <HiOutlineComputerDesktop /> },
    { key: "cake", jsx: <HiOutlineCake /> },
    { key:"pibow", jsx: <PiBowlFood /> },
  ]

  return allIcons.find(icon => icon.key === target)?.jsx;
}