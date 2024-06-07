import { useRouter } from "next/router";
import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import styles from '../styles/slider.module.css';
import ImageViewer from '../ImageViewer.jsx'; // 新しく追加
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function detailpage() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);
  

  const handleBackClick = async () => {
    // 購入ボタンが押された後の処理をここに書く
    try {
      const params = {
          api: "cart",
          id: router.query.id,
          buyerName: router.query.buyerName,
          kinds: router.query.kinds,
          variety: router.query.variety,
          num: router.query.num,
          gram: router.query.gram,
          price: router.query.price,
          area: router.query.area,
          date: router.query.date,
      };
      console.log(params);
      const response = await fetch(``,{
          method:"POST",
          headers:{
              'Access-Control-Allow-Origin':'*',
          },
          body:JSON.stringify(params)
      });
      const responseData = await response.json()
      if(responseData.message=="insert succeeded"){
          router.push("/successcart")
      }
      console.log('Registration successful:', response.data);
      // 登録成功後の処理を追加
    } catch (error) {
      console.error('Registration failed:', error);
      // エラーハンドリングを追加
    }
  };


  const SliderComponent = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };

    return (
        <Slider {...settings}>
        <div>
            <img src="\image\sample.jpeg" alt="Slide 1" className={styles.sliderImage} />
        </div>
        <div>
          <img src="\image\sample.jpeg" alt="Slide 2" className={styles.sliderImage} />
        </div>
        <div>
          <img src="\image\sample.jpeg" alt="Slide 3" className={styles.sliderImage} />
        </div>
        <div>
          <img src="\image\sample.jpeg" alt="Slide 4" className={styles.sliderImage} />
        </div>
      </Slider>
    );
  }

  const openImageViewer = (image) => {
    setSelectedImage(image);
  };

  const closeImageViewer = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className='topmargi'></div>
      <div className="nas">
        <div className="nas1">
          <div className="image-container">
            <img src="\image\sample.jpeg" alt="Slide 2" className="Small" onClick={() => openImageViewer("/image/sample.jpeg")} />
            <img src="\image\sample.jpeg" alt="Slide 2" className="Small" onClick={() => openImageViewer("/image/sample.jpeg")} />
            <img src="\image\sample.jpeg" alt="Slide 2" className="Small" onClick={() => openImageViewer("/image/sample.jpeg")} />
            <img src="\image\sample.jpeg" alt="Slide 2" className="Small" onClick={() => openImageViewer("/image/sample.jpeg")} />
          </div>
          <div className={styles.sliderContainer}>
            {SliderComponent()}
          </div>
          <div className="nas4">
            <h1 className="N">出品日: {router.query.date}</h1>
            <h1 className="N"> <img src ="\image\PinIcon.png" className="N2"></img>{router.query.area}</h1>
            <h1 className="N">品種: {router.query.variety}</h1>
            <h1 className="N">{router.query.gram}g　￥{router.query.price}　在庫　{router.query.num}</h1>
            <div className="IMGSIZE">
              <button onClick={handleBackClick} className="btn btn-tag">
                <span className="icon-wrapper">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </span>
                カートに入れる 
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="nas8">
        <h1 className="nas9">＜この商品のおすすめポイント＞</h1>
        <h1 className="nas10">出品農家名:　　{router.query.buyerName}</h1>
        <h1 className="nas10">特徴：{router.query.other}</h1>
      </div>
      {selectedImage && <ImageViewer image={selectedImage} onClose={closeImageViewer} />}
    </>
  );
}