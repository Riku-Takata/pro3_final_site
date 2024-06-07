//会員登録（お届け先の住所、クレジット等）
import React, { useState } from 'react';
// import axios from 'axios';
import Link from "next/link";
import { useRouter } from 'next/router';


export default function Member() {
    const [username, setUsername] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [email, setEmail] = useState("");
    const [place, setPlace] = useState("");
    const [password, setPassword] = useState("");

  //登録後にログイン画面に移動
    const Router = useRouter();

    const handleRegister = async () => {
        try {
            const params = {
                api: "signin",
                username: username,
                phonenumber: phonenumber,
                email: email,
                place: place,
                password: password,
            };
            const response = await fetch(``,{
                method:"POST",
                headers:{
                    'Access-Control-Allow-Origin':'*',
                },
                body:JSON.stringify(params)
            });
            const responseData = await response.json()

            if(responseData.message=="signin succeeded"){
                Router.push("/login")
            }

            console.log('Registration successful:', response.data);
            // 登録成功後の処理を追加
        } catch (error) {
            console.error('Registration failed:', error);
            // エラーハンドリングを追加
        }
    };

    const changeHandler = (e) => {
        const { name, value } = e.target;
    
        switch (name) {
            case "username":
                setUsername(value);
                break;
            case "phonenumber":
                setPhonenumber(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "place":
                setPlace(value);
                break;
            case "password":
                setPassword(value);
                break;
        }
    }

    return (
        <>
            <header></header>
            <div className="topmargi"></div>
                <div className="topmargi2">
                    <body>
                        <div className="Sullnum">
                            <h1 className="Es1">新規会員登録</h1>
                        </div>
                        <div className="Sellnum3">
                            <form action="/subsc">
                                <div className="forms">
                                    <div className="important">必須</div>
                                        <div className ="selltitle">
                                            <label htmlFor="username">氏名</label>
                                        <input className="continer1" type="name" name="username" id="username" value={username} onChange={changeHandler} required/>
                                        </div>
                                </div>
                                <div className="forms">
                                    <div className="important">必須</div>
                                    <div className ="selltitle">
                                    <label htmlFor="phonenumber">電話番号</label>
                                    <input className="continer1" type="text" name="phonenumber" id="phonenumber" value={phonenumber} onChange={changeHandler} required />
                                </div>
                                </div>
                                <div className="forms">
                                    <div className="important">必須</div>
                                    <div className ="selltitle">
                                    <label htmlFor="email">メールアドレス</label>
                                    <input className="continer1" type="text" name="email" id="email" value={email} onChange={changeHandler} required />
                                </div>
                                </div>
                                <div className="forms">
                                    <div className="important">必須</div>
                                    <div className ="selltitle">
                                    <label htmlFor="place">住所</label>
                                    <input className="continer1" type="text" name="place" id="place" value={place} onChange={changeHandler} required/>
                                </div>
                                </div>
                                <div className="forms">
                                    <div className="important">必須</div>
                                    <div className ="selltitle">
                                    <label htmlFor="password">パスワード</label>
                                    <input className="continer1" type="password" name="password" id="password" value={password} onChange={changeHandler} required/>
                                </div>
                                </div>
                                <button className="sellbutton" type="submit" onClick={handleRegister} required>
                                    登録
                                </button>
                            </form>
                        </div>
                    </body>
                </div>
        
        </>
    )
}