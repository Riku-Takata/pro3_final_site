//ログイン
import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';


export default function Login() {
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const Router = useRouter();

    const handleLogin = async () => {
        try {

        const params = {
            api: "login",
            address: address,
            password: password
        };

        const response = await fetch('', {
            method:"POST",
            body:JSON.stringify(params)
        });

        console.log(response);
        const responseData = await response.json()

        if(responseData.message == true){
            console.log('Login successful:', responseData);
            Router.push("/completelogin")
        }else{
            console.log('Login failed:', responseData);
            Router.push("/failedlogin")
        }
        // ログイン成功後の処理を追加
        } catch (error) {
            console.error('Login failed:', error);
        // エラーハンドリングを追加
        }
    };
        
    return (
        <>
            <div className="topmargi"></div>
            <div className="BCB">
                <div className="topmargi2">
                    <body>
                        <div className="Sellnum">
                            <h1 className="Es1">ログイン</h1>
                        </div>
                        <div className="Sellnum5">
                            <form action="/completelogin">
                                <div className="forms">
                                    <div className="important">必須</div>
                                    <div className="selltitle">
                                        メールアドレス
                                        <input className="continer1" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                                    </div>
                                </div>
                                <div className="forms">
                                    <div className="important">必須</div>
                                    <div className="selltitle">
                                        パスワード
                                        <input className="continer1" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <button className="sellbutton" href="/buyer" type="button" onClick={handleLogin}>ログイン</button>
                                <Link href="/signin" className="selltitle111">新規登録へ</Link>
                            </form>
                        </div>
                    </body>
                </div>
            </div>
        </>
    )
}