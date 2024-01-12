import Link from "next/link";
import Menu from "./Menu";
import { CiSearch } from "react-icons/ci";
import PageTitle from "./PageTitle";

function Header() {
  /**TODO serverコンポーネント化、子コンポーネントで分岐する */


  return (
    <header className="p-6 bg-gray-800">
      <Menu />
      <PageTitle />

      <div>
        <Link href="/search"><CiSearch /></Link>
      </div>
    </header>
  );
}

export default Header;
