import React, { useState } from 'react';
import VLC from'./varietylistconponent'

export default function company() {
  
  return (
    <>
    <div className='topmargi'/>
        <div className="header3">
            <h1>株式会社 Carrot Crop</h1>
            <img src="/image/company.jpg" alt="会社の写真"/>
        </div>

        <div className="main-content">
            <section className="company-info">
                <h2>会社概要</h2>
                <p>見た目が一般的な基準に合わない野菜や果物には、独自の味わいと栄養価があります。私たちはこれらの規格外商品に注目し、その特別な美味しさを活かした商品
             を取り扱っています。例えば、形の不規則なトマトやサイズの異なるジャガイモなど、通常のスーパーマーケットでは見かけない食材もお届けしています。</p>
                
            </section>
        </div>

        <script src="script.js"></script>
    </>
  )
}
