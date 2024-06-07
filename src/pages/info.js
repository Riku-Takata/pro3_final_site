import Link from "next/link";
export default function Info(props){
    return(
        <>
            <div className="Info">
                <div class="container">
                    <img src="/image/carroticon.png" alt="Carrot Icon" class="downcenter"/>
                    
                    <nobr class="textcenter">
                    <a class="textcenter" href="/company">企業紹介</a>
                    <a class="textcenter" href="/otoiawase">お問い合わせ</a>
                    <a class="textcenter" href="/akusesu">アクセス</a>
                    </nobr>

                    <nobr class="textcenter">
                    <a class="textcenter" href="/question" >Q&A</a>
                    <a class="textcenter" href="/kiyaku">　　ご利用規約</a>
                    <a class="textcenter" href="/selljudge">　販売基準</a>
                    </nobr>
                </div>
                <div className="btnimgmg">
                    
                <Link href ="https://www.instagram.com/?hl=ja">
                    <img className ="btnimg" src ="\image\Instagram_Glyph_Gradient.png"/>
                </Link>
                <Link href ="https://line.me/ja/">
                    <img className ="btnimg" src ="\image\LINE_Brand_icon.png"/>
                </Link>
                <Link href ="https://twitter.com/?lang=ja">
                    <img className ="btnimg" src ="\image\logo-black.png"/>
                </Link>
                </div> 
                <h1 className ="botoontextcenter">&copy;CarrotCrap</h1>
            
            </div>           
            
        </>
    )
}