import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* ハンバーガーアイコン */}
      <div className={`hamburger-icon ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* メニュー */}
      {isMenuOpen && (
        <div className="menu">
          {/* メニューの内容をここに追加 */}
         
                    <a class="textcenter2" href="/company">企業紹介</a>
                    <a class="textcenter2" href="/otoiawase">お問い合わせ</a>
                    <a class="textcenter2" href="/akusesu">アクセス</a>
                  

                   
                    <a class="textcenter2" href="/question" >Q&A</a>
                    <a class="textcenter2" href="/kiyaku">ご利用規約</a>
                    <a class="textcenter2" href="/selljudge">販売基準</a>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;