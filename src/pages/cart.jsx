// App.jsx
import React, { useEffect, useState } from 'react';
import Module from './Module';

const Cart = () => {
  const [objData, setObjData] = useState([]);

  useEffect(() => {
    const getData = async () => {
        try {
          const params = {api: "cart"};
          const response = await fetch('',{
            method:"POST",
            headers:{
                'Access-Control-Allow-Origin':'*',
            },
            body:JSON.stringify(params)
          }); 
          const result = await response.json();
          const jsonData = JSON.stringify(result);
          const objData = await JSON.parse(jsonData);
          console.log(objData);
          setObjData(objData); // jsonのデータをjs側で操作するための変数objDataを定義する(編集した内容を格納することは不可)
        } catch (error) {
          console.error('Failed to fetch data:', error);
        }
    };
    getData();
    }, []
  )

  const generateModules = (n) => {
    const modules = [];
    for (let i = 1; i <= n; i++) {
      modules.push({ content:objData[i-1], key: i }); //content:iのiを表示すべき商品idに変える。
    }
    return modules;
  };

  const numberOfModules = objData.length; //表示する商品の数(カート内の商品種類数)をここに入れる

  return (
    <div>
      {objData.length === 0 ? (
        <div>
          <div className="topmargi"></div>
          <h1 className="NNN"> ショッピングカート</h1>
            <div className="end">
              <h1 className="Es2222">カートに商品がありません</h1>
            </div>
        </div>
      ) : (
        <div>
          <div className="topmargi"></div>
          <h1 className="NNN"> ショッピングカート</h1>
            <div className="end">
              {generateModules(numberOfModules).map((module) => (
              <Module key={module.key} content={module.content} />
              ))}
              <div class="button_solid007">
                <a href="/purchaseform">注文する</a>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;