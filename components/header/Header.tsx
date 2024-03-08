import Link from "next/link";
import Menu from "./Menu";
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <header className="flex justify-between p-3 bg-neutral-800">
      <Menu />

      <div>
        <Link href="/search"><CiSearch size={20}/></Link>
      </div>
    </header>
  );
}

export default Header;
