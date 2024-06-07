import Link from "next/link";
import HamburgerIcon from "./HamburgerIcon"; // HamburgerIconのコンポーネントをインポート

export default function Header(props) {
  return (
    <>
      <div className="head">
        <div className="vegname">
          {/* ハンバーガーアイコンを追加 */}
          <HamburgerIcon />
        </div>
        <div className="shopname">
          <img src="/image/carroticon2.png" className="carroticon" />
          <Link href="/" className="title">Carrot Crop</Link>
          <img src="/image/carroticon2.png" className="carroticon" />
        </div>
        <div className="syousai">
          <>
          <Link href="/login">
            <img src="/image/loginicon.png" className="ilog" />
          </Link>
          <Link href="/cart">
            <img src="/image/carticon.png" className="icart" />
          </Link>
          </>
        </div>
      </div>
    </>
  );
}