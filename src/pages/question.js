export default function Queistion(){
    return(
        <>
        <div className='topmargi'></div>
        <div className="qapage-container">
          <h1 className="qapage-title">よくある質問</h1>

          <div className="qa-item">
            <h2 className="qa-question">Q: なぜ見た目が悪い野菜を販売しているのですか？</h2>
            <p className="qa-answer">
              A: 見た目に問題のある野菜は味には影響がありませんが、市場での需要が低くなることがあります。
              当サイトでは、これらの野菜を安価で提供することで、食品ロスの削減と、多くの人々が美味しい野菜を手に入れる機会を増やすことを目指しています。
            </p>
          </div>

          <div className="qa-item">
            <h2 className="qa-question">Q: 見た目が悪い野菜の味は本当に良いのですか？</h2>
            <p className="qa-answer">
              A: はい、見た目に問題があるだけで、味には何の問題もありません。
              実際には味の良い野菜が多くあります。お得な価格で手に入れて、美味しい料理を楽しんでください。
            </p>
          </div>

        </div>
            
        </>
    )
}