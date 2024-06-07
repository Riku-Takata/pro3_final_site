import Header from'./header'
import Link from "next/link";
import Info from'./info'
import React, { useState } from 'react'
import { useRouter } from 'next/router';


export default function Home() {
  const [buyerName, setBuyerName] = useState("");
  const [email, setEmail] = useState("");
  const [postal, setPostal] = useState("");
  const [place, setPlace] = useState("");
  const [kinds, setKinds] = useState("");
  const [variety, setVariety] = useState("");
  const [num, setNum] = useState("");
  const [gram, setGram] = useState("");
  const [price, setPrice] = useState("");
  const [area, setArea] = useState("");
  const [photo, setPhoto] = useState("");
  const [date, setDate] = useState("");
  const [other, setOther] = useState("");

//登録後にログイン画面に移動
  const Router = useRouter();

  const handleRegister = async () => {
      try {
          const params = {
              api: "buyer",
              buyerName: buyerName,
              email: email,
              postal: postal,
              place: place,
              kinds: kinds,
              variety: variety,
              num: num,
              gram: gram,
              price: price,
              area: area,
              photo: photo,
              date: date,
              other: other
          };

          const response = await fetch(``,{
              method:"POST",
              headers:{
                  'Access-Control-Allow-Origin':'*',
              },
              body:JSON.stringify(params)
          });
          const responseData = await response.json()
          if(responseData.message=="insert succeeded"){
              Router.push("/thanksmail")
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
          case "buyerName":
            setBuyerName(value);
            break;
          case "email":
            setEmail(value);
            break;
          case "postal":
            setPostal(value);
            break;
          case "place":
            setPlace(value);
            break;
          case "kinds":
            setKinds(value);
            break;
          case "variety":
            setVariety(value);
            break;
          case "num":
            setNum(value);
            break;
          case "gram":
            setGram(value);
            break;
          case "price":
            setPrice(value);
            break;
          case "area":
            setArea(value);
            break;
          case "photo":
            setPhoto(value);
            break;
          case "date":
            setDate(value);
            break;
          case "other":
            setOther(value);
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
              販売手順について
              <p className ="Es2">
                フォームに必要事項を記入して送信してくださ<br/>
              い。一週間以内にメール に詳細をお送りします。<br/>
              </p><br/>
            
            </h1>

          </div>
          <div className='Sellnum2'>
            <form>
              <div className="forms">
                <div className="important">必須</div>
                <div className="selltitle">
                  <label htmlFor="buyerName">氏名</label>
                  <input className="continer1" type="name" name="buyerName" id="buyerName" value={buyerName} onChange={changeHandler} />
                </div>
              </div>
              <div className="forms">
                <div className="important">必須</div>
                <div className="selltitle">
                  <label htmlFor="email">メールアドレス</label>
                  <input className="continer1" type="text" name="email" id="email" value={email} onChange={changeHandler} />
                </div>
              </div>
              <div className="forms">
                <div className="important">必須</div>
                <div className="selltitle">
                  <label htmlFor="postal">郵便番号　〒</label>
                  <input className="continer1" type="text" name="postal" id="postal" value={postal} onChange={changeHandler} />
                </div>
              </div>
              <div className="forms">
                <div className="important">必須</div>
                <div className="selltitle">
                  <label htmlFor="place">都道府県　市町村　番地</label>
                  <input className="continer1" type="text" name="place" id="place" value={place} onChange={changeHandler} />
                </div>
              </div>
              <div className="forms">
                <div className="important">必須</div>
                <div className="selltitle">
                  <label htmlFor="kinds">野菜の種類</label>
                  <select name="kinds" id="kinds" onChange={changeHandler}>
                    <option value="">選択してください</option>
                    <option value="0" >にんじん</option>
                    <option value="1" >きゅうり</option>
                    <option value="2" >トマト</option>
                    <option value="3" >キャベツ</option>
                    <option value="4" >ブロッコリー</option>
                    <option value="5" >ピーマン</option>
                    <option value="6" >レタス</option>
                    <option value="7" >かぼちゃ</option>
                    <option value="8" >なす</option>
                    <option value="9" >ほうれんそう</option>
                    <option value="10">レッドキャベツ</option>
                    <option value="11">ねぎ</option>
                  </select>
                </div>
              </div>
              <div className="forms">
                <div className="important">必須</div>
                <div className="selltitle">
                  <label htmlFor="variety">品種</label>
                  <input className="continer1" type="text" name="variety" id="variety" value={variety} onChange={changeHandler} />
                </div>
              </div>
              <div className="forms">
                <div className="important">必須</div>
                <div className="selltitle">
                  <label htmlFor="num">セット数</label>
                  <input className="continer1" type="text" inputMode="numeric" pattern="\d*" name="num" id="num" value={num} onChange={changeHandler} />
                </div>
              </div>
              <div className="forms">
                <div className="important">必須</div>
                <div className="selltitle">
                  <label htmlFor="gram">セット一つのグラム数 </label>
                  <input className="continer1" type="text" inputMode="numeric" pattern="\d*" name="gram" id="gram" value={gram} onChange={changeHandler} />
                </div>
              </div>
              <div className="forms">
                <div className="important">必須</div>
                <div className="selltitle">
                  <label htmlFor="price">出品希望金額</label>
                  <input className="continer1" type="text" inputMode="numeric" pattern="\d*" name="price" id="price" value={price} onChange={changeHandler} />
                </div>
              </div>
              <div className="forms">
                <div className="important">必須</div>
                <div className="selltitle">
                  <label htmlFor="area">産地</label>
                  <input className="continer1" type="text" name="area" id="area" value={area} onChange={changeHandler} />
                </div>
              </div>
              <div className="forms">
                <div className="important">必須</div>
                <div className="selltitle">
                  <label htmlFor="photo">写真</label>
                  <input className="continer1" type="file" name="photo" id="photo" value={photo} onChange={changeHandler} />
                </div>
              </div>
              <div className="forms">
                <div className="important">必須</div>
                <div className="selltitle">
                  <label htmlFor="date">商品到着予定日</label>
                  <input className="continer1" type="date" name="date" id="date" value={date} onChange={changeHandler} />
                </div>
              </div>
              <div className="forms">
                <div className="important">必須</div>
                <div className="selltitle">
                  <label htmlFor="other">商品の特徴</label>
                  <input className="continer1" type="textarea" name="other" id="other" value={other} onChange={changeHandler} />
                </div>
              </div>
              <button className="sellbutton" type="button" onClick={handleRegister}>
                登録
              </button>
            </form>
          </div>
        </body>
        </div>
      </div>
    </>
  )
}