import Link from "next/link";

export default function CompleteCart() {

    return (
        <>
            <header>
            </header>
            <body>
                <div>
                    <div className="topmargi"></div>
                    <h1 className="NNN"> カートに商品が入りました！</h1>
                    <div className="end">
                        <Link href="/cart" className="Es2222">カートはこちら</Link><br/>
                    <Link href="/NewListPage" className="Es2222">一覧へ戻る</Link>
                    </div>
                </div>
            </body>        
        </>
    )
}