# position relativeとabsoluteの使い所

## relativeとは
何も指定しなかった時の場所から相対的に移動するモードに移行
top: left: などで調節

## absoluteとは
絶対配置をする。親要素がrelativeでないと、おかしな配置になる
親要素がrelativeなとき、親要素に対して(0, 0, 0, 0)の絶対配置になる

## 使い所
ある親要素にある二つの要素をz-indexによって(-1など）重ねて表示する
例：背景とテキスト