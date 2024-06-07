import Header from'./header'
import React from 'react'


export default function Purchaseform() {
  const removeFromCart = async () => {
    try {
      const params = {api: "alldelete"};
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
        router.push("/thanksmail2")
    }else{
        console.log('Delete failed:', result);
    }
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  return (
    <>
      <header>

</header>

<div className="topmargi">
<body>
  <Header/>
  <div className="Sellnum">
      <h1 className ="Es1">
       購入手続き
      </h1>
  </div>
  <div className="Sellnum22">

    <form action="/thanksmail2"  method="post">
      <div className="kessai">
      <div className="forms">
      <div className="important">必須</div>
      <div className ="selltitle">姓名
        <input className ="continer1"type ="kinds" required/>
      </div>
      </div>
      </div>
      <div className="forms">
      <div className="important">必須</div>
      <div className ="selltitle">メールアドレス
        <input className ="continer1"type ="variety" required/>
      </div>
      </div>
      <div className="forms">
      <div className="important">必須</div>
      <div className ="selltitle">郵便番号　〒
        <input className ="continer1"type ="area" required/>
      </div>
      </div>
      <div className="forms">
      <div className="important">必須</div>
      <div className ="selltitle">都道府県　市町村区　番地
        <input className ="continer1"type ="area" required/>
      </div>
      </div>
      <div className="forms">
      <div className ="radio">クレジット決済
        <input className ="continer1"type ="radio" name="pay" required/>
      </div>
      </div>
      <div className="forms">
      <div className ="radio">あと払い
        <input className ="continer1"type ="radio" name="pay" required/>
      </div>
      </div>
      <div className="forms">
      <div className ="radio">代引き決済
        <input className ="continer1"type ="radio" name ="pay" required/>
      </div>
      </div>
      <input type="submit" value="送信" className ="sellbutton" onClick={removeFromCart}/>
    </form>
  </div>
</body>
</div>
    </>
  )
}