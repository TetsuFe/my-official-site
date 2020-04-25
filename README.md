# tetsufe-github-pages [![Build Status](https://travis-ci.org/tetsufe/my-official-site.svg?branch=master)](https://travis-ci.org/tetsufe/my-official-site)

ポートフォリオサイトです

## Nuxt.jsでgithub pagesを書き換えた
jsの勉強がてら、Nuxt.jsでgithub pagesを書き換えました。

裏番組（１８禁注意：[ぬきたしで学ぶnuxtレイアウト.md](./docs/ぬきたしで学ぶnuxtレイアウト.md)）

## 開発環境
macOS Mojave 10.14 Beta（18A384a）

## npm, node.jsのインストール
[nvmを使ったnpmとnodejsのインストール](./docs/nvmを使ったnpmとnodejsのインストール.md)

## プロジェクトの作成
```bash
$ npm install -g vue-cli
$ vue init nuxt-community/starter-template tetsufe-github-pages
```

```
? Project name tetsufe-github-pages
? Project description  A Nuxt.js Github.io site
? Author TetsuFe <tetsubeg1ner27@gmail.com>

   vue-cli · Generated "tetsufe-github-pages".

   To get started:
   
     cd tetsufe-github-pages
     npm install # Or yarn
     npm run dev
```
     
## とりあえずデプロイ


## せっかくなのでyarn使う
```bash
$ npm install -g yarn
```

```bash
$ yarn #なんか適当に打ったら色々実行された
yarn install v1.9.4
info No lockfile found.
[1/4] 🔍  Resolving packages...
warning nuxt > postcss-cssnext@3.1.0: 'postcss-cssnext' has been deprecated in favor of 'postcss-preset-env'. Read more at https://moox.io/blog/deprecating-cssnext/
warning nuxt > autoprefixer > browserslist@2.11.3: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
warning nuxt > css-loader > cssnano > autoprefixer > browserslist@1.7.7: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
warning nuxt > postcss-cssnext > pixrem > browserslist@2.11.3: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
warning nuxt > postcss-cssnext > caniuse-api > browserslist@2.11.3: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
warning nuxt > webpack-bundle-analyzer > bfj-node4@5.3.1: Switch to the `bfj` package for fixes and new features!
warning nuxt > css-loader > cssnano > postcss-merge-rules > browserslist@1.7.7: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
warning nuxt > css-loader > cssnano > postcss-merge-rules > caniuse-api > browserslist@1.7.7: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 📃  Building fresh packages...
success Saved lockfile.
✨  Done in 19.55s.
```

```bash
$ yarn -v
1.9.4
```

9/23日では1.9.4が最新版だった（stable）

## ローカルで立ち上げる
```bash
$ yarn run dev
```

127.0.0.1:3000にブラウザからアクセスする。

## 早速デプロイ
https://ja.nuxtjs.org/faq/github-pages/ を参考にすすめる

github pagesでは、ルートが'/<あなたのレポジトリ名>/'になるため、そのように設定する

このように書けばよいです。
```js
module.exports = {
  router: {
    base: '/<repository-name>/'
  }
}
```

しかし、この設定だと `npm(yarn) run dev`が動かなくなるので、ローカル用とgithub pages用で分岐するように設定します。

```js
// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/<repository-name>/'
  }
} : {}

module.exports = {
  ...routerBase
}
```


実際には、nuxt.config.js に以下のように追記します

コード全体

```js
// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/tetsufe-github-pages/'
  }
} : {}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'tetsufe-github-pages',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: ' A Nuxt.js Github.io site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  routerBase,

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
```

また、package.jsonも合わせて修正します

```json
/* package.json */
"scripts": {
  "build:gh-pages": "DEPLOY_ENV=GH_PAGES nuxt build",
  "generate:gh-pages": "DEPLOY_ENV=GH_PAGES nuxt generate"
},
```

package.json

コード全体

```json
{
  "name": "tetsufe-github-pages",
  "version": "1.0.0",
  "description": " A Nuxt.js Github.io site",
  "author": "TetsuFe <tetsubeg1ner27@gmail.com>",
  "private": true,
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "start": "nuxt start",
    "generate": "nuxt generate",
    "build:gh-pages": "DEPLOY_ENV=GH_PAGES nuxt build",
    "generate:gh-pages": "DEPLOY_ENV=GH_PAGES nuxt generate",
    "lint": "eslint --ext .js,.vue --ignore-path .gitignore .",
    "precommit": "npm run lint"
  },
  "dependencies": {
    "nuxt": "^1.0.0"
  },
  "devDependencies": {
    "babel-eslint": "^8.2.1",
    "eslint": "^4.15.0",
    "eslint-friendly-formatter": "^3.0.0",
    "eslint-loader": "^1.7.1",
    "eslint-plugin-vue": "^4.0.0"
  }
}
```

## ローカルでテスト
ローカルと本番で分岐するようにしたので、まずローカルで動くかテストしましょう

```bash
$ yarn dev
```

これで localhost:3000 にアクセスして先ほどと同じページが表示されればOKです


## travis ciを使う
さて、デプロイには色々とやり方がありますが、今回はtravisCIを使いました。OSS(publicなレポジトリ)では無料で使えます。

まずは、githubにプロジェクトをpushします。

githubでpublicのレポジトリを作成し、レポジトリURLをコピーします。

```bash
$ git add -A
$ git commit -m "init nuxt"
$ git remote add origin レポジトリURL
$ git push -u origin master
```

このあたりから本家の引用です。

あなたの代わりにタスクを実行してもらうために []GitHub personal access token を生成する](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/#creating-a-token) 必要があります。

トークンを生成したら、すぐ後で使うので安全な場所にメモしておいてください。

同じ画面を下にスクロールして Environment Variables (環境変数) セクションを表示させたら、GITHUB_ACCESS_TOKEN という名前の新しい変数を作成し、値のフィールドにさきほど生成したおいた GitHub personal access token を入力し、'Add' (追加) ボタンをクリックします。


次に、デプロイ設定を記述するyamlファイルを編集します。

.travis.yml

```yaml
language: node_js
node_js:
  - "8"

cache:
  directories:
    - "node_modules"

branches:
  only:
  - master

install:
  - npm install
  - npm run generate

script:
  - echo "Skipping tests"

deploy:
  provider: pages
  skip-cleanup: true
  github-token: $GITHUB_ACCESS_TOKEN  # セキュアとマークされたアクセストークンを travis-ci.org のダッシュボードに設定してください。https://docs.travis-ci.com/user/deployment/pages/#Setting-the-GitHub-token
  target-branch: gh-pages
  local-dir: dist
  on:
    branch: master
```

masterにpushしたときしかデプロイは実行されないので、注意（安心？）しましょう。

以下のように、`branch: master`で指定されています

```
deploy:
  provider: pages
  skip-cleanup: true
  github-token: $GITHUB_ACCESS_TOKEN  # セキュアとマークされたアクセストークンを travis-ci.org のダッシュボードに設定してください。https://docs.travis-ci.com/user/deployment/pages/#Setting-the-GitHub-token
  target-branch: gh-pages
  local-dir: dist
  on:
    branch: master
```

いよいよ、デプロイです！

```bash
$ git add .travis.yml
$ git commit -m "Adding travis deploy configuration"
$ git push origin
```

travisciが動きます！travisciのjob logをみると、２分くらいでデプロイが完了しました。

github pagesにアクセスしてみましょう！

https://<あなたのユーザ名>.github.io/<あなたのレポジトリ名>/ に、ローカルと同じ表示が出ていればOKです！


## 次は？
このまま自分のポートフォリオ掲載サイトとして、gitbub pagesを作っていく予定です。

[テンプレから自分のサイトへ・part1.md](./docs/テンプレから自分のサイトへ・part1.md)
