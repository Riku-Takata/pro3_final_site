import Link from "next/link";

export default function Home() {


  return (
    <>
      <head>
      </head>
      <div className='topmargi'>
        <body>
          <div className ="Toimg">
            <img src ="\image\HeadPicture.jpg" className="Toimg2"/>
          </div>

          <div className="Exp">
            <h1 className="explain">規格外でもおいしい野菜</h1>
            <p className="slide-in">　当サイトでは、店頭で売ることが難しい、規格外の野菜の出品、購入が<br></br>
                                    できます。規格外の野菜は、見た目は様々な形をしておりますが、規格外<br></br>
                                    だからこそおいしい商品も多くあります。ご購入者の方はよりお手ごろな<br></br>
                                    価格で、おいしい野菜をお試しいただけます。そして、野菜廃棄にも同時<br></br>
                                    に取り組んでいただけます。ぜひ、お試しください。</p>
          </div>

          <div className ="SER">
            <h1 className="fade-in-text">～ご利用はこちら～</h1>
            <div className='SER2'>
              <nobr>
              <Link href="/NewListPage" class="btn btn-c btn--green btn--cubic"><i class="fa fas fa-envelope"></i>ご購入の方</Link>
              <Link href="/buyer" class="btn btn-c btn--green2 btn--cubic"><i class="fa fas fa-envelope"></i>ご出品の方</Link>
              </nobr>
            </div>
        </div>
        </body>
      </div>
    </>
  )
}
