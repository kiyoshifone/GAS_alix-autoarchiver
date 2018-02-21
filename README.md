# GAS_alix-autoarchiver.gs
alixの発送メールが到着した段階で，支払い完了メールを自動アーカイブするものである．

# 使い方
from:transaction@notice.aliexpress.com
から来るメールに対して，
label:Aliexpress
をあらかじめ設定する．
.gsコードをスクリプトとして毎分実行する．
