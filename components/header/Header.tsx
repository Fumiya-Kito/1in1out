import Link from "next/link";
import Menu from "./Menu";
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <header className="p-6 bg-gray-800">
      <Menu />

      <div>
        <Link href="/search"><CiSearch /></Link>
      </div>
    </header>
  );
}

export default Header;
