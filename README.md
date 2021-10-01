# AdGuard DNS filter (experimental fork)

[![🔨Build AdGuard DNS filter](https://github.com/gontazaka/AdGuardSDNSFilter/actions/workflows/workflow.yaml/badge.svg)](https://github.com/gontazaka/AdGuardSDNSFilter/actions/workflows/workflow.yaml)

Original readme : https://github.com/AdguardTeam/AdGuardSDNSFilter#readme  

## ダウンロード

The direct link to the filter  
- iOS : https://gontazaka.github.io/AdGuardSDNSFilter/Filters/filter_ios_optimized.txt
- Android : https://gontazaka.github.io/AdGuardSDNSFilter/Filters/filter_android_optimized.txt

The output is written to `gh-pages` branch.

## これは何？

**ルール数を減らして精度を低下**させたフィルター

### ざっくりと

まず前提として、AdGuardが配布するフィルターには通常版と[最適化(optimized)版](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#hints-1)が存在する。  
「最適化」の要点は、、  
a. 統計情報による低使用頻度ルール除去  
b. コメント等不要情報除去  

であるが`AdGuard DNS filter`[Filter ID:15]では*a*が行われていない。  
※この文章を書いている時点ではID:15の統計情報が存在しない（[@ameshkovが言及](https://github.com/AdguardTeam/AdGuardSDNSFilter/issues/603#issuecomment-787500587)した時には在ったのでしょう）  
  
ということで*a*を行うのがこれ。  
統計情報が存在するID:1,2,4,6,14,16に効果があり、EasyList系はたぶんそのまま。

### ちなみに、、

日本語サイト閲覧者の[統計情報の送信](https://kb.adguard.com/en/general/filter-rules-statistics)がどれくらい有効されているのか不明であり、当該環境では精度が大きく低下する可能性もある。

## 技術情報
[別冊](./documents/technical.md)
