// pages/mypage.js
import React, { useState, useEffect } from "react";
import styles from '../styles/mypage.module.css';
 
const Mypage = () => {
  const [productList, setProductList] = useState([]);
  const [username, setUsername] = useState('');
  const [cart, setCart] = useState([]);
  const [submitted, setSubmitted] = useState(false);
 
  useEffect(() => {
    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
 
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("");
        const data = await response.json();
        setProductList(data);
      } catch (error) {
        console.error("商品情報の取得に失敗しました", error);
      }
    };
 
    fetchProduct();
  }, []);
 
  const addToCart = (product, quantity) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
 
    if (existingProductIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[existingProductIndex].quantity += 1; // 常に1個加算する
        setCart(updatedCart);
    } else {
        setCart([...cart, { ...product, quantity: 1 }]); // 新しい商品は常に1個からスタート
    }
};
 
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };
 
  const updateQuantity = (index, change) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += change;
    if (updatedCart[index].quantity <= 0) {
      updatedCart.splice(index, 1);
    }
    setCart(updatedCart);
  };
 
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + parseInt(item.price, 10) * item.quantity, 0);
  };
 
  const [formData, setFormData] = useState({
    inquiry: '',
  });
 
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
 
  const submitForm = () => {
    console.log('Form Data:', formData);
    setSubmitted(true);
  };
 
  return (
    <div>
      {!submitted ? (
        <div>
        <div className={styles.imgflower}>
          <img  width="250px"src="/img/flower3.jpg"/>
          <div className={styles.title}>
             <p>MyPage</p>
          </div>
          <div className={styles.title1}>
             <p>{username}さんのマイページ</p>
          </div>
        </div>
        <p>予約する商品をお選びください</p>
          <div className={styles.productContainer}>
            {productList.map((product) => (
              <div className={styles.productItem} key={product.id}>
                <img width="325px" height="225px" src={"/img/" + product.src} alt={product.name} />
                <p>{product.name}</p>
                <p>{product.price}円</p>
                <button className={styles.buybtn} onClick={() => addToCart(product, 1)}>カートに入れる</button>
              </div>
            ))}
          </div>
          <div>
            <h2>カート</h2>
            {cart.length === 0 ? (
              <p>カートは空です.</p>
            ) : (
              <div>
                <div className={styles.productContainer}>
                {cart.map((item, index) => (
                  <div className={styles.productItem} key={index}>
                    <img width="325x" height="225px" src={"/img/" + item.src} alt={item.name} />
                    <p>{item.name} : {parseInt(item.price, 10)}円 x {item.quantity}</p>
                    <button onClick={() => updateQuantity(index, 1)}>+</button>
                    <button onClick={() => updateQuantity(index, -1)}>-</button>
                    <button onClick={() => removeFromCart(index)}>削除</button>
                  </div>
                ))}
               </div>
               <p>合計金額: {calculateTotalPrice()}円</p>
              </div>
            )}
          </div>
          <div>
            <label htmlFor="inquiry">要望、コメントなど:</label>
            <div></div>
            <textarea
              id="inquiry"
              rows="4"
              value={formData.inquiry}
              onChange={handleChange}
              required
            />
          </div>
          <button type="button" onClick={submitForm}>
            予約
          </button>
        </div>
      ) : (
        <div>
          <h2>ご利用ありがとうございました。</h2>
          <a href="/#/">
            <p>トップページに戻る</p>
          </a>
        </div>
      )}
    </div>
  );
};
 
export default Mypage;
 