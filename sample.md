## リリース手順


- リリース可能なPBI（萩行さんに受け入れを確認してもらったもの）がGitHubのdevelopブランチにマージ済みを前提とします。


- 各ステージにおいてプルリクを作成し、開発メンバーでレビューを行ってマージします。
	- 各環境へのマージをトリガーに、AWS上に作成したCodePipelineによってCI/CDが動き、各環境へリリース内容がデプロイされます。 
	- developブランチからstageブランチへのマージ
	- developブランチからkobe-fire/developブランチへのマージ（神戸市消防団）
	- developブランチからkobe-citizen/developブランチへのマージ（神戸市民）
	- developブランチからwni-hiroshima/developブランチへのマージ（広島県）
	- kobe-fire/developブランチからkobe-fire/stageブランチへのマージ（神戸市消防団）
	- kobe-citizen/developブランチからkobe-citizen/stageブランチへのマージ（神戸市民）
	- wni-hiroshima/developブランチからwni-hiroshima/stageブランチへのマージ（広島県）
	- stageブランチからmasterブランチへのマージ
	- kobe-fire/stageブランチからkobe-fire/masterブランチへのマージ（神戸市消防団）
	- kobe-citizen/stageブランチからkobe-citizen/masterブランチへのマージ（神戸市民）
	- wni-hiroshima/stageブランチからwni-hiroshima/masterブランチへのマージ（広島県）


- 各本番環境へのリリースが完了したら、受け入れと同様の動作確認を行います。


- 動作確認が問題なければ萩行さんにリリース完了を報告