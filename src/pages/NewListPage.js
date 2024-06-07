import React, { useEffect, useState } from 'react';
import{useRouter} from "next/router"
import Link from "next/link";

const App = () => {
  const [goodsList, setGoodsList] = useState([]);
  const [objData, setObjData] = useState([]);

  useEffect(() => {
    const getData = async () => {
        try {
          const params = {api: "item"};
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
          setGoodsList(result); // mapで使用する変数goodsListを定義する
        } catch (error) {
          console.error('Failed to fetch data:', error);
        }
    };
    getData();
    }, [setGoodsList]
  )
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

  return (
    <>
<header>
      </header>
    <div className='topmargi'/>
    <div className='matome'>
      <div class="vegetitle-select">
        <h1 class="vegetitle111">野菜種類一覧</h1>
        <Link class="textcenter3" href={{pathname:"/details/[kinds]",query:{kinds:0}}}>にんじん</Link>
        <Link class="textcenter3" href={{pathname:"/details/[kinds]",query:{kinds:1}}}>きゅうり</Link>
        <Link class="textcenter3" href={{pathname:"/details/[kinds]",query:{kinds:2}}}>トマト</Link>
        <Link class="textcenter3" href={{pathname:"/details/[kinds]",query:{kinds:3}}}>キャベツ</Link>
        <Link class="textcenter3" href={{pathname:"/details/[kinds]",query:{kinds:4}}}>ブロッコリー</Link>
        <Link class="textcenter3" href={{pathname:"/details/[kinds]",query:{kinds:5}}}>ピーマン</Link>
        <Link class="textcenter3" href={{pathname:"/details/[kinds]",query:{kinds:6}}}>レタス</Link>
        <Link class="textcenter3" href={{pathname:"/details/[kinds]",query:{kinds:7}}}>かぼちゃ</Link>
        <Link class="textcenter3" href={{pathname:"/details/[kinds]",query:{kinds:8}}}>なす</Link>
        <Link class="textcenter3" href={{pathname:"/details/[kinds]",query:{kinds:9}}}>ほうれんそう</Link>
        <Link class="textcenter3" href={{pathname:"/details/[kinds]",query:{kinds:10}}}>レッドキャベツ</Link>
        <Link class="textcenter3" href={{pathname:"/details/[kinds]",query:{kinds:11}}}>ねぎ</Link>
      </div>
      <div class="vegetitle-container">
        <div>
          <div>
            <div className="end">
              {goodsList.map(item =>{
                return(
                  <Link href={{pathname:"/detailpage",query:{id:item.id,
                                                            kinds:item.kinds,
                                                            variety: item.variety,
                                                            buyerName: item.buyerName,
                                                            area: item.area,
                                                            num: item.num,
                                                            gram: item.gram,
                                                            price: item.price,
                                                            date: item.date,
                                                            other: item.other
                                                            }
                              }} className="vegeLink" >
                    <div class="flex">
                      <div class="VEG13">
                          <div className ="VEG14">
                              <img src="\image\sample.jpeg" className="carrot4" /><br/>
                          </div>
                          <div className ="VEG15">
                              <h1 className="vegeName">{item.id + 1}.  {item.buyerName}さんの{cropName(item.kinds)} <br/>
                                                      出品日:{item.date}<br/>  
                                                      生産地:{item.area}<br/>
                                                      金額：￥{item.price}<br/>
                                                      特徴：{item.other}<br/>
                              </h1>              
                          </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
};

export default App;


