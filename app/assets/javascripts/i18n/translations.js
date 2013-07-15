var I18n = I18n || {};
I18n.translations = {"en":{"date":{"formats":{"default":"%Y-%m-%d","short":"%b %d","long":"%B %d, %Y"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"order":["year","month","day"]},"time":{"formats":{"default":"%a, %d %b %Y %H:%M:%S %z","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M"},"am":"am","pm":"pm"},"support":{"array":{"words_connector":", ","two_words_connector":" and ","last_word_connector":", and "}},"number":{"format":{"separator":".","delimiter":",","precision":3,"significant":false,"strip_insignificant_zeros":false},"currency":{"format":{"format":"%u%n","unit":"$","separator":".","delimiter":",","precision":2,"significant":false,"strip_insignificant_zeros":false}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}},"human":{"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}},"decimal_units":{"format":"%n %u","units":{"unit":"","thousand":"Thousand","million":"Million","billion":"Billion","trillion":"Trillion","quadrillion":"Quadrillion"}}}},"errors":{"format":"%{attribute} %{message}","messages":{"inclusion":"is not included in the list","exclusion":"is reserved","invalid":"is invalid","confirmation":"doesn't match %{attribute}","accepted":"must be accepted","empty":"can't be empty","blank":"can't be blank","present":"must be blank","too_long":"is too long (maximum is %{count} characters)","too_short":"is too short (minimum is %{count} characters)","wrong_length":"is the wrong length (should be %{count} characters)","not_a_number":"is not a number","not_an_integer":"must be an integer","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","equal_to":"must be equal to %{count}","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","other_than":"must be other than %{count}","odd":"must be odd","even":"must be even","taken":"has already been taken"},"dynamic_format":"%{message}"},"activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"one":"Cannot delete record because a dependent %{record} exists","many":"Cannot delete record because dependent %{record} exist"},"invalid_enum":"invalid option supplied."},"template":{"header":{"one":"1 error prohibited this %{model} from being saved","other":"%{count} errors prohibited this %{model} from being saved"},"body":"There were problems with the following fields:"}}},"datetime":{"distance_in_words":{"half_a_minute":"half a minute","less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"x_days":{"one":"1 day","other":"%{count} days"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"x_months":{"one":"1 month","other":"%{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"}},"prompts":{"year":"Year","month":"Month","day":"Day","hour":"Hour","minute":"Minute","second":"Seconds"}},"helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"}},"mongoid":{"errors":{"messages":{"invalid_enum":"invalid option supplied."}}},"hello":"Hello world","simple_form":{"yes":"Yes","no":"No","required":{"text":"required","mark":"*"},"error_notification":{"default_message":"Please review the problems below:"}}},"ja":{"date":{"formats":{"default":"%Y/%m/%d","short":"%m/%d","long":"%Y年%m月%d日(%a)"},"day_names":["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],"abbr_day_names":["日","月","火","水","木","金","土"],"month_names":[null,"1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"abbr_month_names":[null,"1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"order":["year","month","day"]},"time":{"formats":{"default":"%Y/%m/%d %H:%M:%S","short":"%y/%m/%d %H:%M","long":"%K年%m月%d日 %H時%M分%S秒"},"am":"午前","pm":"午後"},"support":{"array":{"sentence_connector":"と","skip_last_comma":true,"words_connector":"と","two_words_connector":"と","last_word_connector":"と"},"select":{"prompt":"選択してください。"}},"number":{"format":{"separator":".","delimiter":",","precision":3,"significant":false,"strip_insignificant_zeros":false},"currency":{"format":{"format":"%n%u","unit":"円","separator":".","delimiter":",","precision":3,"significant":false,"strip_insignificant_zeros":false}},"percentage":{"format":{"delimiter":""}},"precision":{"format":{"delimiter":""}},"human":{"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n%u","units":{"byte":"バイト","kb":"キロバイト","mb":"メガバイト","gb":"ギガバイト","tb":"テラバイト"}},"decimal_units":{"format":"%n %u","units":{"unit":"","thousand":"千","million":"百万","billion":"十億","trillion":"兆","quadrillion":"千兆"}}}},"datetime":{"distance_in_words":{"half_a_minute":"30秒前後","less_than_x_seconds":{"one":"1秒以内","other":"%{count}秒以内"},"x_seconds":{"one":"1秒","other":"%{count}秒"},"less_than_x_minutes":{"one":"1分以内","other":"%{count}分以内"},"x_minutes":{"one":"1分","other":"%{count}分"},"about_x_hours":{"one":"約1時間","other":"約%{count}時間"},"x_days":{"one":"1日","other":"%{count}日"},"about_x_months":{"one":"約1ヶ月","other":"約%{count}ヶ月"},"x_months":{"one":"1ヶ月","other":"%{count}ヶ月"},"about_x_years":{"one":"約1年","other":"約%{count}年"},"over_x_years":{"one":"1年以上","other":"%{count}年以上"},"almost_x_years":{"one":"1年弱","other":"%{count}年弱"}},"prompts":{"year":"年","month":"月","day":"日","hour":"時","minute":"分","second":"秒"}},"helpers":{"select":{"prompt":"選択してください。"},"submit":{"create":"登録する","update":"更新する","submit":"保存する"},"label":{"practice":{"title":"タイトル","description":"内容","goal":"終了条件","target":"ターゲット"},"user":{"login_name":"ユーザー名","first_name":"名","last_name":"姓","full_name":"フルネーム","description":"自己紹介（動ける曜日・時間）","email":"Email","twitter":"Twitter","twitter_url":"Twitter URL","facebook_url":"Facebook URL","blog_url":"ブログURL","password":"パスワード","password_confirmation":"パスワード（確認）","current_password":"現在のパスワード","remember_me":"記憶する","job":"職種","company":"会社"},"learning":{"status":"ステータス"},"company":{"id":"ID","name":"名前","description":"詳細","website":"ウェブサイト"}}},"errors":{"format":"%{attribute} %{message}","messages":{"inclusion":"は一覧にありません。","exclusion":"は予約されています。","invalid":"は不正な値です。","confirmation":"が一致しません。","accepted":"を受諾してください。","empty":"を入力してください。","blank":"を入力してください。","too_long":"は%{count}文字以内で入力してください。","too_short":"は%{count}文字以上で入力してください。","wrong_length":"は%{count}文字で入力してください。","not_a_number":"は数値で入力してください。","not_an_integer":"は整数で入力してください。","greater_than":"は%{count}より大きい値にしてください。","greater_than_or_equal_to":"は%{count}以上の値にしてください。","equal_to":"は%{count}にしてください。","less_than":"は%{count}より小さい値にしてください。","less_than_or_equal_to":"は%{count}以下の値にしてください。","odd":"は奇数にしてください。","even":"は偶数にしてください。","line_too_long":"は1行を%{count}文字以内で入力して下さい。","not_a_zenkaku":"は全角文字を一文字以上含めて下さい。","wrong_image":"はjpg、png、gifのいずれかにして下さい。"}},"activerecord":{"models":{"user":"ユーザー","practice":"プラクティス","company":"会社","comment":"コメント"},"enums":{"user":{"jobs":{"programmer":"プログラマー","designer":"デザイナー"}},"practice":{"targets":{"everyone":"共通","programmer":"プログラマー向け","designer":"デザイナー向け"}}},"attributes":{"user":{"login_name":"ユーザー名","first_name":"名","last_name":"姓","email":"Email","twitter_url":"Twitter URL","facebook_url":"Facebook URL","blog_url":"ブログURL","password":"パスワード","password_confirmation":"パスワード（確認）","current_password":"現在のパスワード","icon":"画像ファイル","icon_file_name":"画像ファイル名","icon_file_size":"画像ファイルのサイズ","icon_content_type":"画像ファイルの種類","notify_comment":"コメント通知","job":"職種","company":"会社"},"practice":{"title":"タイトル","description":"内容","goal":"終了条件","target":"ターゲット"},"company":{"name":"名前","description":"詳細","website":"ウェブサイト"}},"errors":{"template":{"header":{"one":"%{model}にエラーが発生しました。","other":"%{model}に%{count}つのエラーが発生しました。"},"body":"次の項目を確認してください。"},"messages":{"taken":"はすでに存在します。","record_invalid":"バリデーションに失敗しました。 %{errors}","inclusion":"は一覧にありません。","exclusion":"は予約されています。","invalid":"は不正な値です。","confirmation":"が一致しません。","accepted":"を受諾してください。","empty":"を入力してください。","blank":"を入力してください。","too_long":"は%{count}文字以内で入力してください。","too_short":"は%{count}文字以上で入力してください。","wrong_length":"は%{count}文字で入力してください。","not_a_number":"は数値で入力してください。","not_an_integer":"は整数で入力してください。","greater_than":"は%{count}より大きい値にしてください。","greater_than_or_equal_to":"は%{count}以上の値にしてください。","equal_to":"は%{count}にしてください。","less_than":"は%{count}より小さい値にしてください。","less_than_or_equal_to":"は%{count}以下の値にしてください。","odd":"は奇数にしてください。","even":"は偶数にしてください。","line_too_long":"は1行を%{count}文字以内で入力して下さい。","not_a_zenkaku":"は全角文字を一文字以上含めて下さい。","wrong_image":"はjpg、png、gifのいずれかにして下さい。"},"full_messages":{"format":"%{attribute}%{message}"}}},"views":{"pagination":{"previous":"« 前ページ","next":"次ページ »","truncate":"","last":"最後のページ","first":"最初のページ"}},"sign_up":"サインアップ","sign_in":"サインイン","logout":"ログアウト","please_sign_in_first":"ログインしてください","please_sign_in_as_admin":"管理者としてログインしてください","are_you_sure":"本当によろしいですか？","start":"スタート","edit":"編集","destroy":"削除","save":"保存","unstarted":"開始","started":"完了","finished":"完了","complete":"済","practice_status_reset_confirmation":"未着手状態に戻しますがよろしいですか？","hide_completed":"完了済みプラクティスを隠す","show_completed":"完了済みプラクティスを表示","dashboard":"ダッシュボード","new_user":"新規ユーザー","new_company":"新規会社","new_practice":"新規プラクティス","256interns":"256 INTERNS","users":"ユーザー","my_practices":"マイプラクティス","activities":"アクティビティ","practices":"プラクティス","names_practices":"%{name}'s Practices","enter_for_intern":"インターンシップを申し込む","continue":"コンティニュー","introduction":"イントロダクション","registration_form":"申し込みフォーム","programmer":"プログラマー","designer":"デザイナー","everyone":"共通","listing_users":"ユーザー一覧","listing_practices":"プラクティス一覧","listing_companies":"会社一覧","companies":"会社","editing_practice":"プラクティス編集","editing_company":"会社編集","editing_user":"アカウント情報編集","show":"表示","back":"戻る","invalid_email_or_password":"ユーザー名かパスワードが違います。","sign_in_successful":"サインインしました。","sign_out":"サインアウトしました。","registration_successfull":"サインアップしました。","user_was_successfully_updated":"ユーザーを更新しました。","practice_was_successfully_created":"プラクティスを作成しました。","practice_was_successfully_updated":"プラクティスを更新しました。","practice_was_successfully_deleted":"プラクティスを削除しました。","company_was_successfully_created":"会社を作成しました。","company_was_successfully_updated":"会社を更新しました。","company_was_successfully_deleted":"会社を削除しました。","for":"%{target} 課題","for_everyone":"共通","for_programmer":"プログラマー向け","for_designer":"デザイナー向け","all":"全て","how_256interns_works":"256インターンとは","completed_users":"プラクティスを完了したユーザー一覧","completed_practices":"完了したプラクティス","active_practices":"進行中のプラクティス","simple_form":{"yes":"Yes","no":"No","required":{"text":"required","mark":"*"},"error_notification":{"default_message":"Please review the problems below:"},"labels":{"defaults":{"login_name":"ログイン名","password":"パスワード"},"user":{"new":{"name":"名前","name_kana":"名前（カナ）","email":"Email"},"edit":{"email":"Email"}}},"hints":{"defaults":{"login_name":"User name to sign in.","password":"No special characters, please."}}}}};