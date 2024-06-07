import Header from'./header'
import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [username, setUsername] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const [place1, setPlace1] = useState("");
  const [place2, setPlace2] = useState("");
  const [place3, setPlace3] = useState("");
  const [place4, setPlace4] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  //登録後にログイン画面に移動
  const router = useRouter();
  
  //フォームデータをapi側にリクエストを送る
  const submitHandler = async () => {
    const res = await fetch("", {
      method: "POST",
      body: JSON.stringify({
        api:"user",
        username,
        phonenumber,
        email,
        place,
        place1,
        place2,
        place3,
        place4,
        date,
        password
      })
    });
	
    //api側のレスポンスを受け取る
    const data = await res.json();
    if (data.created) {
      router.push("/login");
    } else {
      setError(data.message);
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
      case "place1":
        setPlace1(value);
        break;
      case "place2":
        setPlace2(value);
        break;
      case "place3":
        setPlace3(value);
        break;
      case "place4":
        setPlace4(value);
        break;
      case "date":
        setDate(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  }

  return (
    <>
      <header>

      </header>
      <div className="topmargi"></div>
      <div className="B">
        <div className="topmargi2">
        <body>
          <Header/>
          <div className="Sellnum">
            <h1 className ="Es1">
              新規会員登録
            </h1>

          </div>
          <div className='Sellnum3'>
            <form action="\subsc" onSubmit={submitHandler}>
              <div className="forms">
                <div className="important">必須</div>
                <div className ="selltitle">
                  <label htmlFor="username">氏名</label>
                  <input className="continer1" onChange={changeHandler} value={username} type="text" name="username" id="username" />
                </div>
              </div>
              <div className="forms">
                <div className="important">必須</div>
                <div className ="selltitle">
                  <label htmlFor="phonenumber">電話番号</label>
                  <input className="continer1" onChange={changeHandler} value={phonenumber} type="text" name="phonenumber" id="phonenumber" />
                </div>
              </div>
              <div className="forms">
                <div className="important">必須</div>
                <div className ="selltitle">
                  <label htmlFor="email">メールアドレス</label>
                  <input className="continer1" onChange={changeHandler} value={email} type="email" name="email" id="email" />
                </div>
              </div>
              <div className="forms">
                <div className="important">必須</div>
                <div className ="selltitle">
                  <label htmlFor="place">住所</label>
                  <input className="continer1" onChange={changeHandler} value={place} type="text" name="place" id="place" />
                </div>
              </div>
              <div className="forms">
                <div className ="selltitle">
                  <label htmlFor="place1">郵便番号</label>
                  <input className="continer1" onChange={changeHandler} value={place1} type="text" name="place1" id="place1" />
                </div>
              </div>
              
                <div className="forms">
                <div className ="selltitle">
                  <label htmlFor="place2">都道府県</label>
                  <input className="continer1" onChange={changeHandler} value={place2} type="text" name="place2" id="place2" />
                </div>
                </div>
                <div className="forms">
                <div className ="selltitle">
                  <label htmlFor="place3">市町村</label>
                  <input className="continer1" onChange={changeHandler} value={place3} type="text" name="place3" id="place3" />
                </div>
                </div>
                <div className="forms">
                <div className ="selltitle">
                  <label htmlFor="place4">番地</label>
                  <input className="continer1" onChange={changeHandler} value={place4} type="text" name="place4" id="place4" />
                </div>
                </div>
                <div className="forms">
                <div className="important">必須</div>
                <div className ="selltitle">
                  <label htmlFor="password">パスワード</label>
                  <input className="continer1" onChange={changeHandler} value={password} type="password" name="password" id="password" />
                </div>
                </div>
                <div className="forms">
                <div className="important">必須</div>
                <div className ="selltitle">
                  <label htmlFor="date">生年月日</label>
                  <input className="continer1" onChange={changeHandler} value={date} type="date" name="date" id="date" />
                </div>
              </div>
              {error && <div>{error}</div>}
              <input type="submit" value="送信" className ="sellbutton" href ="\buyer" required/>
            </form>
          </div>
        </body>
        </div>
      </div>
    </>
  )
}