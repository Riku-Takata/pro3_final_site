import React from 'react';
import GoogleMapEmbed from './GoogleMapEmbed'; // GoogleMapEmbedコンポーネントをimport

const Akusesu = () => {
  return (
    <>
      <div className='topmargi'></div>
      <div className="akusesu-container">
        <div className="akusesu-header">
          <h1 className="akusesu-title">アクセス情報</h1>
          <p className="akusesu-description">
            弊社へのアクセス情報と地図です。ご不明点がございましたら、お気軽にお問い合わせください。
          </p>
        </div>
        <div className="akusesu-content">
          <GoogleMapEmbed />
          {/* ここに他のアクセス情報を追加する場合は、適宜コンポーネントを追加 */}
        </div>
      </div>
    </>
  );
};

export default Akusesu;