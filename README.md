# AdGuard DNS filter (experimental fork)

[![🔨Build DNS filter](https://github.com/gontazaka/AdGuardSDNSFilter/actions/workflows/workflow.yaml/badge.svg)](https://github.com/gontazaka/AdGuardSDNSFilter/actions/workflows/workflow.yaml)

Original Software Licensors
Name | URL
--- | ---
AdGuardTeam / AdGuardSDNSFilter | https://github.com/AdguardTeam/AdGuardSDNSFilter
AdGuardTeam / FiltersRegistry | https://github.com/AdguardTeam/FiltersRegistry

## Filters

The direct link to the filter.  
You can use it, but it’s at your own risk.  
- ![iOS:](https://img.shields.io/badge/iOS-black?style=flat&logo=apple) <https://gontazaka.github.io/AdGuardSDNSFilter/Filters/filter_ios_optimized.txt>  
- ![Android:](https://img.shields.io/badge/Android-whitesmoke?style=flat&logo=android) <https://gontazaka.github.io/AdGuardSDNSFilter/Filters/filter_android_optimized.txt>  

## これは何？

AdGuard DNS filterを**劣化させた**なにか。  

### ざっくり

まず前提として、AdGuardが配布するフィルターには通常版と[最適化(optimized)版](https://adguard.com/kb/ja/general/ad-filtering/create-own-filters/#hints)が存在する。  
「最適化」の要点は、、  
a. 統計情報による低使用頻度ルール除去  
b. コメント等不要情報除去  

であるが`AdGuard DNS filter`[Filter ID:15]では*a*が行われていない。  
※この文章を書いている時点ではID:15の統計情報が存在しない（[@ameshkovが言及](https://github.com/AdguardTeam/AdGuardSDNSFilter/issues/603#issuecomment-787500587)した時には在ったのでしょう）  
  
ということで*a*を行うのがこれ。  
統計情報が存在するID:1,2,4,6,14,16に効果があり、サードパーティーのはたぶんそのまま。

### ちなみに

日本語サイト閲覧者の[統計情報の送信](https://kb.adguard.com/en/general/filter-rules-statistics)がどれくらい有効化されているのか不明であり、当該環境では精度が大きく低下する可能性もある。

## 付録
[技術情報](./documents/technical.md)
