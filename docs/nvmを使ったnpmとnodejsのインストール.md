# nvmを使う

## 参考
https://qiita.com/sansaisoba/items/242a8ba95bf70ba179d3
http://furudate.hatenablog.com/entry/2015/02/06/003422

## インストール
$ brew install nvm

Please note that upstream has asked us to make explicit managing
nvm via Homebrew is unsupported by them and you should check any
problems against the standard nvm install method prior to reporting.

You should create NVM's working directory if it doesn't exist:

  mkdir ~/.nvm

Add the following to ~/.bash_profile or your desired shell
configuration file:

  export NVM_DIR="$HOME/.nvm"
  . "/usr/local/opt/nvm/nvm.sh"

You can set $NVM_DIR to any location, but leaving it unchanged from
/usr/local/opt/nvm will destroy any nvm-installed Node installations
upon upgrade/reinstall.

Type `nvm help` for further information.

Bash completion has been installed to:
  /usr/local/etc/bash_completion.d
==> Summary
🍺  /usr/local/Cellar/nvm/0.33.11: 7 files, 138.6KB, built in 11 seconds

ナビに従って、

$ mkdir ~/.nvm

~/.bash_profile
```
export NVM_DIR="$HOME/.nvm"
. "/usr/local/opt/nvm/nvm.sh"
```

$ source ~/.bash_profile

## バージョン違いのnode.jsをインストール
$ nvm install --lts

こうすると勝手にnodeとnpmがこのバージョンになる

## npmのバージョンを変える
$ npm install -g npm