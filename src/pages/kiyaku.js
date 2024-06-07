import React, { useState } from 'react';
import Header from './header';
import VLC from'./varietylistconponent'

export default function kiyaku() {
  
  return (
    <>
      <div className='topmargi'></div>
      <div className="main-container">

        <div className="section-container">
          <div className="section-header">
            <h1 className="page-title">ご利用規約</h1>
          </div>

          <div className="section-content">
            <h2>第1条（適用）</h2>
            <p>
              この利用規約（以下，「本規約」といいます。）は，Carrot Crop株式会社（以下，「当社」といいます。）
              が提供するwebサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。
              ユーザーが本サービスを利用する際には、本規約に同意したものとみなされます。
            </p>

            <h2>第2条（利用登録）</h2>
            <p>
              本サービスにおいては、利用者が本規約に同意の上、当社の定める方法によって利用登録を完了する必要があります。
              利用者が未成年者である場合には、親権者等の法定代理人の同意を得るものとします。
            </p>

          </div>
        </div>

      </div>
      <script src="script.js"></script>
    </>

  )
}
