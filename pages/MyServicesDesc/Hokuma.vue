<template>
  <div>
    <h2>運用していたサービス: 「ホクマ」ご紹介ページ</h2>

    <p>ホクマは運営を別チームに移したのち、閉鎖しました。</p>

    <p>
      こちらは、ホクマがどんなWebアプリであったかのご紹介のためのページです。
    </p>

    <p>
      こちらは、スタマチがどんなWebアプリであったかのご紹介のためのページです。
    </p>

    <h2>ホクマの使用技術</h2>
    <ul>
      <li>アプリケーションサーバ: Django</li>
      <li>補助サービス: Firebase(Analytics/Messaging)</li>
      <li>Webサーバ: Nginx</li>
      <li>DB: PostgreSQL</li>
      <li>コンテナ(開発/本番環境): Docker</li>
      <li>メールサーバ: Postfix/Dovecot</li>
      <li>HTTPS: Let's Encrypt</li>
      <li>その他: Bootstrap/jQuery</li>
    </ul>

    <p>詳しくは以下のページをご覧ください。</p>

    <p>
      <a href="https://swiftfe0.hatenablog.com/entry/2018/10/06/221541"
        >Django製フリマサイト「ホクマ」ができるまで part1</a
      >
    </p>

    <p>
      ホクマについての説明ページは準備中のため、一旦過去ホクマで掲載されていた「使い方ページ」を以下に掲載しています。
    </p>

    <div class="container">
      <h2>購入ガイド</h2>
      <section class="guide-section">
        <h3>STEP1 商品を探す</h3>
        <hr />
        <p>
          まずはページ上の検索バーから商品を検索しましょう。検索ページでは、より詳細な検索もできます。
        </p>
        <img src="~/assets/images/hokuma/guide/buy_guide_1.png" />
        <img src="~/assets/images/hokuma/guide/buy_guide_2.png" />
      </section>
      <section class="guide-section">
        <h3>STEP2 購入希望を送る</h3>
        <hr />
        <p>
          買いたい商品が見つかったら、購入希望を送りましょう。購入希望を送る前に、「非公開チャット」を使って値段の交渉や商品の情報などについて出品者から話を聞くことができます。
        </p>
        <img src="~/assets/images/hokuma/guide/buy_guide_3.png" />
        <img src="~/assets/images/hokuma/guide/buy_guide_4.png" />
      </section>
      <section class="guide-section">
        <h3>STEP3 お知らせを待つ</h3>
        <hr />
        <p>
          購入希望が承認されたら、お知らせが届きます。また、「非公開チャット」で相手から連絡が来た時も、お知らせが届きます。お知らせは、登録したメールアドレスに届くメールまたはマイページから確認できます。
        </p>
      </section>
      <section class="guide-section">
        <h3>STEP4 打ち合わせ</h3>
        <hr />
        <p>
          商品・料金をどこでどうやってやりとりするかを「非公開チャット」で打ち合わせしましょう。
        </p>
        <img src="~/assets/images/hokuma/guide/buy_guide_5.png" />
        <img src="~/assets/images/hokuma/guide/buy_guide_6.png" />
      </section>
      <section class="guide-section">
        <h3>STEP5 商品の受け渡し</h3>
        <hr />
        <p>打ち合わせで決めた場所で商品の受け渡しを行いましょう。</p>
        <a href="https://www.hokudai.ac.jp/introduction/campusmap_2018.pdf"
          >札幌キャンパス地図（北海道大学公式）</a
        >
      </section>
      <section class="guide-section">
        <h3>STEP6 出品者の評価</h3>
        <hr />
        <p>
          商品・料金の受け渡しが終わったら、必ず出品者を評価していただきますようお願いします。お知らせから、出品者を評価するページへのリンクが届きます。今後利用する方のために、適切に評価をお願いします。
        </p>
        <img src="~/assets/images/hokuma/guide/buy_guide_7.png" />
        <img src="~/assets/images/hokuma/guide/buy_guide_8.png" />
      </section>
    </div>
  </div>
</template>


<script>
export default {
  name: "Hokuma",
};
</script>