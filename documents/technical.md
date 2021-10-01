# 技術情報

## フィルター生成のワークフロー

AdGuardがリリース（ディストリビュート？）するフィルターは次のように行われているもよう。

![AdGuardフィルターのワークフロー](./ag_filter_workflow.svg)

1. リポジトリ`AdguardTeam/AdguardFilters`でメンテナーがルール管理
2. リポジトリ`AdguardTeam/AdGuardSDNSFilter`でHostlistCompilerを使いDNSブロック用ルールを*1*やサードパーティーフィルターより生成
3. リポジトリ`AdguardTeam/FiltersRegistry`でFiltersCompilerを使い*1,2*よりプラットフォーム選別やアプリケーション用セットを生成。統計情報による最適化(optimized)版もここで生成

## このリポジトリのワークフロー

（作成中。図も直す）
