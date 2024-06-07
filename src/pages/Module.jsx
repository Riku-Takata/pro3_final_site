import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Module = ({ content, key }) => {
  const router = useRouter();
  const name=content.kinds//id参照で商品名をここに入れる
  const shosai =content.area; 
  const shosai2 =content.variety; 
  const price=content.price;//同様にして値段 
  const stock =content.num;//在庫数
  var [totalAmount,setTotalAmount] = useState(price);
  const [value, setValue] = useState(1);

  const cropName = (kind) => {
    switch(kind){
      case "0":
        return "にんじん";
      case "1":
        return "きゅうり";
      case "2":
        return "トマト";
      case "3":
        return "キャベツ";
      case "4":
        return "ブロッコリー";
      case "5":
        return "ピーマン";
      case "6":
        return "レタス";
      case "7":
        return "かぼちゃ";
      case "8":
        return "なす";
      case "9":
        return "ほんれんそう";
      case "10":
        return "レッドキャベツ";
      case "11":
        return "ねぎ";
    }
  };

  const handleIncrement = () => {
    if(stock>value){
      setValue(value + 1);
      setTotalAmount(price * (value+1));
    }
  };

  const handleDecrement = () => {
    if(value>0){
      setValue(value - 1);
      setTotalAmount(price * (value-1));
    }
  };

  const removeFromCart = async () => {
    try {
      const params = {api: "delete", id: content.id};
      const response = await fetch('',{
        method:"POST",
        headers:{
            'Access-Control-Allow-Origin':'*',
        },
        body:JSON.stringify(params)
      }); 
      const result = await response.json();
      if(result.message == "delete succeeded"){
        console.log('Delete successful:', result);
        router.push("/NewListPage")
    }else{
        console.log('Delete failed:', result);
    }
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };
    
  return (
    <div key={key}>
      <div className ="nas11">
        <img src="\image\sample.jpeg" className="nas33" />
        <div className="nas44">
          <h1 className="NN">{content.buyerName}の<br/>{cropName(name)}</h1>
          <br/>
          <h1 className="NN"><img src ="\image\PinIcon.png" className="N2"></img> {shosai}</h1>
          {/* <h1 className="NN">品種: {shosai2}</h1> */}
        </div>
        <div className='nas55'>
          <h1 className="NN2">￥{price}</h1>
        </div>
        <div className='nas66'>
          <h1 className="NN">個数：{stock}</h1>
          <button className="BuyB"　onClick={handleDecrement}>-</button>
          <input className="BuyB"　type="" value={value} readOnly />
          <button className="BuyB"　onClick={handleIncrement}>+</button>
          <br/>
          <br/>
          <button onClick={removeFromCart}>商品を削除する</button>
        </div>
      </div>
      <div className="totalprice">小計　　 ￥{totalAmount}</div>
    </div>
  );
};

export default Module;