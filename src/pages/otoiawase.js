import React from 'react';
import Header from './header';


export default function Otoiawase() {
  return (
    <>
     <header>
      </header>
      <div className="topmargi"></div>

          <body>
          <Header/>
           
          <h1 className="Es11">
                お問い合わせフォーム<br/>
                <p className="Es22">
                  以下のフォームに必要事項を記入して送信してください。<br/>
                  お問い合わせ内容については、迅速に対応させていただきます。
                </p>
              </h1>
              
          
          <div className="Sellnum2">
            
            <form action="/thanksmail" method="post">
              <div className="forms">
                <div className="important">必須</div>
                <div className="selltitle">
                  氏名
                  <input className="continer1" type="text" name="name" required />
                </div>
              </div>

              <div className="forms">
                <div className="important">必須</div>
                <div className="selltitle">
                  メールアドレス
                  <input className="continer1" type="email" name="email" required />
                </div>
              </div>

              {/* 他のフォーム要素も同様に追加していく */}
              
              <div className="forms">
                <div className="selltitle">
                  お問い合わせ内容
                  <textarea className="continer1" name="other" rows="4" required></textarea>
                </div>
              </div>
              
              <input type="submit" value="送信" className="sellbutton" />
            </form>
          </div>
          </body>
    </>
  );
}