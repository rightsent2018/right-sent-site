/* 株式会社ライセント コーポレートサイト
 * 文言（日本語・英語・中国語）と、言語切替・スマホメニューの動作。
 * 文言を直すときは下の I18N を編集する。HTML 側は data-i18n="キー" で参照している。
 */
(function () {
  var I18N = {
  "ja": {
    "title": "株式会社ライセント｜中古品の総合輸出企業（ゲーム機・スマートフォン）",
    "brand.name": "株式会社ライセント",
    "brand.sub": "RIGHTSENT CO., LTD.",
    "nav.business": "事業内容",
    "nav.company": "会社概要",
    "nav.news": "ニュース",
    "nav.contact": "お問い合わせ",
    "hero.h1": "ゲーム機に新しい価値を<br>日本から世界へ。",
    "hero.sub": "株式会社ライセントは、ゲーム機を通じて新たな価値を生み出し、国内外へ届けています。",
    "topics.h2": "お知らせ",
    "topics.all": "一覧を見る",
    "tag.notice": "お知らせ",
    "tag.service": "サービス",
    "news.1": "コーポレートサイトをリニューアルしました",
    "news.2": "VGC レンタル利用規約を一部改訂しました",
    "news.3": "ゲーム機レンタルサービス「VGC RENTAL」を開始しました",
    "news.4": "株式会社ライセントを設立しました",
    "biz.h2": "事業内容",
    "t1.h": "国内流通・販売",
    "t2.h": "海外輸出",
    "t3.h": "ゲーム機レンタル",
    "company.h2": "会社概要",
    "msg": "未来を先取りして、<br>発想を実現する。",
    "c.name.k": "商号",
    "c.name.v": "株式会社ライセント（RIGHTSENT CO., LTD.）",
    "c.est.k": "設立",
    "c.est.v": "2018年11月29日",
    "c.rep.k": "代表者",
    "c.rep.v": "代表取締役　芹澤 慎次郎",
    "c.hq.k": "本社",
    "c.hq.v": "〒177-0041 東京都練馬区石神井町3-27-20 早川ビル2F",
    "c.br.k": "支店",
    "c.br.v": "〒165-0022 東京都中野区江古田1-39-3-101",
    "c.biz.k": "事業内容",
    "c.biz.v": "ゲーム機・スマートフォンの仕入・国内販売・海外輸出・レンタル・修理／エアコン・プリンターの仕入・輸出／Webサイト・アプリケーション・デジタルサービスの企画開発／電子マネー・商品券の仲介／不動産の企画",
    "c.lic.k": "許認可",
    "c.lic.v": "古物商許可　東京都公安委員会 第305581904181号",
    "c.mem.k": "所属団体",
    "c.mem.v": "東京商工会議所",
    "c.bank.k": "取引銀行",
    "c.bank.v": "三井住友銀行／ゆうちょ銀行",
    "news.h2": "ニュース",
    "contact.h2": "お問い合わせ",
    "contact.note": "株式会社ライセント 本社",
    "f.addr": "〒177-0041 東京都練馬区石神井町3-27-20 早川ビル2F<br>TEL 03-6822-8877<br>古物商許可 東京都公安委員会 第305581904181号",
    "f.h1": "事業内容",
    "f.h2": "会社概要",
    "f.2a": "基本情報",
    "f.2b": "代表メッセージ",
    "f.2c": "沿革",
    "f.h3": "運営サービス",
    "f.3d": "プライバシーポリシー",
    "f.copy": "© RIGHTSENT CO., LTD. ALL RIGHTS RESERVED.",
    "pp.title": "プライバシーポリシー｜株式会社ライセント",
    "pp.h1": "プライバシーポリシー",
    "pp.updated": "制定日 2026年9月7日",
    "pp.intro": "株式会社ライセント（以下「当社」といいます）は、当社が運営するWebサイトおよび各種サービス（VGC ONLINE、VGC RENTAL、VGC STORE を含みます。以下「本サービス」といいます）において取得する個人情報を、以下の方針に基づいて取り扱います。",
    "pp.s1.h": "1. 取得する情報",
    "pp.s1.p": "当社は、本サービスの提供にあたり、次の情報を取得することがあります。",
    "pp.s1.l": "<li>氏名、住所、電話番号、メールアドレスなど、お客様にご入力いただく情報</li><li>レンタルサービスのご利用に際してご提出いただく本人確認書類の記載事項</li><li>ご注文・ご契約の内容、お支払いに関する情報（クレジットカード情報は決済事業者が取り扱い、当社は保持しません）</li><li>お問い合わせの内容</li><li>Cookie やアクセスログなど、本サービスのご利用状況に関する情報</li>",
    "pp.s2.h": "2. 利用目的",
    "pp.s2.p": "取得した個人情報は、次の目的の範囲内で利用します。",
    "pp.s2.l": "<li>商品の発送、レンタル商品の貸出・回収、代金の請求などの本サービスの提供のため</li><li>レンタルサービスにおける本人確認および利用資格の審査のため</li><li>お問い合わせへの回答、およびご契約に関するご連絡のため</li><li>新商品・キャンペーン等のご案内のため（ご希望されない場合は停止します）</li><li>本サービスの改善、および不正利用の防止のため</li><li>法令に基づく義務の履行のため</li>",
    "pp.s3.h": "3. 第三者への提供",
    "pp.s3.p": "当社は、次の場合を除き、ご本人の同意なく個人情報を第三者に提供しません。",
    "pp.s3.l": "<li>法令に基づく場合</li><li>人の生命、身体または財産の保護のために必要であり、ご本人の同意を得ることが困難な場合</li><li>配送、決済、システム運用など、本サービスの提供に必要な業務を委託する場合（委託先に対しては適切な監督を行います）</li>",
    "pp.s4.h": "4. 安全管理",
    "pp.s4.p": "当社は、個人情報の漏えい、滅失、毀損を防止するため、アクセス制限、保管場所の管理、従業者への教育など、必要かつ適切な安全管理措置を講じます。",
    "pp.s5.h": "5. Cookie 等の利用",
    "pp.s5.p": "本サービスでは、利便性の向上やアクセス状況の把握のために Cookie および類似の技術を利用することがあります。ブラウザの設定により Cookie を無効にすることができますが、その場合、本サービスの一部がご利用いただけないことがあります。",
    "pp.s6.h": "6. 開示・訂正・利用停止",
    "pp.s6.p": "ご本人から個人情報の開示、訂正、追加、削除、利用停止のご請求があった場合は、ご本人であることを確認のうえ、法令の定めに従って速やかに対応します。",
    "pp.s7.h": "7. 本ポリシーの変更",
    "pp.s7.p": "当社は、法令の改正や事業内容の変更に応じて、本ポリシーを改定することがあります。改定後の内容は、当社Webサイトに掲載した時点から適用されます。",
    "pp.s8.h": "8. お問い合わせ窓口",
    "pp.s8.p": "個人情報の取扱いに関するお問い合わせは、下記までご連絡ください。",
    "pp.sig": "株式会社ライセント<br>〒177-0041 東京都練馬区石神井町3-27-20 早川ビル2F<br>TEL 03-6822-8877",
    "nav.home": "ホーム",
    "idx.biz.all": "事業内容を見る",
    "sub.access": "アクセス",
    "msg.p1": "株式会社ライセントは2018年の設立以来、ゲーム機流通を中心に事業を拡大してきました。",
    "msg.p2": "国内販売・海外輸出・レンタル・修理まで幅広く展開し、現在ではスマートフォンなどへも事業領域を広げています。",
    "msg.p3": "これまで培ってきた流通ネットワークとノウハウを活かし、既存の枠にとらわれない新たな市場と価値の創出に挑戦しています。",
    "sign.role": "代表取締役",
    "sign.name": "芹澤 慎次郎",
    "hist.1": "株式会社ライセント設立（東京都練馬区）",
    "hist.2": "ゲーム機レンタルサービス「VGC RENTAL」開始",
    "hist.3": "コーポレートサイトをリニューアル",
    "access.map": "Google マップで見る",
    "d1.p2": "自社ECをはじめ、各種オンラインマーケットプレイスを通じて、幅広い商品をお届けしています。",
    "d1.items": "<li>VGC ONLINE（中古ソフト・周辺機器）</li><li>VGC STORE（ゲーム機本体）</li><li>メルカリShops での販売</li>",
    "d2.p2": "日本で使われなくなった中古商品を、需要のある海外市場へ届けることで、一台一台の商品に新たな価値を生み出します。",
    "d3.p2": "PS5・Nintendo Switch2・PS4などのゲーム機本体一式を15日からレンタル。本体・ケーブル類・コントローラー・スタートガイドをセットでお届けし、届いたその日から楽しめます。",
    "contact.corp.h": "法人のお客様",
    "contact.corp.p": "海外取引、仕入・卸、法人レンタル、修理のご相談は、お電話または下記フォームよりお問い合わせください。",
    "contact.ind.h": "個人のお客様",
    "contact.ind.p": "商品・レンタルサービス・修理に関するお問い合わせは、各サービスサイトをご覧ください。",
    "f.tag": "ゲーム機の国内流通・海外輸出・レンタル・修理",
    "hero.btn": "私たちについて",
    "about.1": "日本で使われなくなった中古ゲーム機を、海外の新たな市場へ届ける。",
    "about.2": "高額なゲーム機をレンタルによって、より手軽に利用できるものにする。",
    "about.3": "そして、故障したゲーム機を修理し、再び使える一台へ。",
    "about.close": "一台のゲーム機に新たな可能性を見出し、日本から世界へ、その価値を広げていきます。",
    "biz.lead1": "新品・中古ゲーム機を中心に、仕入れから国内販売、海外輸出、レンタル、修理まで幅広く展開しています。",
    "biz.lead2": "さらに、中古スマートフォンの販売・輸出・修理へと事業領域を拡大。",
    "biz.lead3": "独自の仕入・販売ネットワークと技術力を活かし、国内外の多様なニーズに対応するとともに、新たな事業領域への展開にも取り組んでいます。",
    "t4.h": "ゲーム機・スマートフォン修理",
    "t5.h": "デジタル事業・企画開発",
    "idx.co.all": "会社概要を見る",
    "biz.intro": "ゲーム機・スマートフォンを中心に、商品の仕入れから国内販売、海外輸出、レンタル、修理まで幅広く展開しています。国内外に構築した仕入・販売ネットワークと、商品を再び市場へ送り出すための検品・修理体制を活かし、さまざまなニーズに対応しています。",
    "d1.p1": "新品・中古ゲーム機、スマートフォンを中心に、国内での仕入れ・販売を行っています。",
    "d1.p3": "中古商品は、動作確認・清掃・付属品確認などを行い、商品の状態を確認したうえで販売しています。",
    "d2.p1": "日本国内で仕入れたゲーム機・スマートフォンを中心に、海外の販売パートナーへ輸出しています。",
    "d2.p3": "ゲーム機に加え、スマートフォンやエアコン、プリンターなど取扱商品の拡大にも取り組んでいます。",
    "d3.p1": "高額なゲーム機を購入することなく、必要な期間だけ手軽に利用できる「VGC RENTAL」を運営しています。",
    "d4.p1": "故障したゲーム機・スマートフォンの修理を行っています。",
    "d4.p2": "故障や不具合によって使われなくなった機器を修理し、再び使用できる状態へ。",
    "d4.p3": "販売・レンタル・輸出で培った商品知識とノウハウを活かし、一台でも多くの機器を再び市場へ送り出すことを目指しています。",
    "d5.p1": "自社事業で培ったノウハウを活かし、Webサイト・アプリケーション・デジタルサービスなどの企画開発に取り組んでいます。",
    "d5.p2": "既存事業の枠にとらわれず、新たなサービスやビジネスモデルを企画し、アイデアを実際の事業へと発展させていきます。",
    "form.h2": "お問い合わせフォーム",
    "form.lead": "下記フォームに必要事項をご入力のうえ送信してください。内容を確認のうえ、担当者よりご連絡いたします。",
    "form.company": "会社名",
    "form.name": "お名前",
    "form.email": "メールアドレス",
    "form.tel": "電話番号",
    "form.type": "お問い合わせ種別",
    "form.msg": "お問い合わせ内容",
    "form.req": "必須",
    "form.type.sel": "選択してください",
    "form.type.export": "海外取引・輸出について",
    "form.type.wholesale": "仕入・卸について",
    "form.type.rental": "法人レンタルについて",
    "form.type.repair": "修理について",
    "form.type.digital": "デジタル事業・企画開発について",
    "form.type.other": "その他",
    "form.agree": "個人情報の取扱いについて、<a href=\"privacy.html\" target=\"_blank\">プライバシーポリシー</a>に同意します。",
    "form.err": "未入力の必須項目があります。ご確認ください。",
    "form.send": "送信する",
    "form.done.h": "送信ありがとうございました。",
    "form.done.p": "内容を確認のうえ、担当者よりご連絡いたします。お急ぎの場合はお電話にてお問い合わせください。",
    "form.fail": "送信できませんでした。時間をおいて再度お試しいただくか、お電話にてお問い合わせください。",
    "form.mail": "メールソフトで送る",
    "repair.link": "修理のお問い合わせ（スマホステーション）",
    "f.smasta": "スマホステーション（修理）",
    "nav.recruit": "採用情報",
    "rc.open": "募集職種",
    "rc.more": "募集要項を見る",
    "rc.req": "募集要項",
    "rc.sales.h": "営業",
    "rc.sales.p": "営業業務全般。新たな取引先の開拓を担当していただきます。",
    "rc.sns.h": "SNS運用",
    "rc.sns.p": "自社プロダクト「VGC」をはじめとする各種SNSアカウントの運用を担当していただきます。",
    "rc.k.job": "職種",
    "rc.k.desc": "仕事内容",
    "rc.k.type": "雇用形態",
    "rc.k.place": "勤務地",
    "rc.k.hours": "勤務時間",
    "rc.k.salary": "給与",
    "rc.k.holiday": "休日・休暇",
    "rc.k.benefit": "待遇・福利厚生",
    "rc.v.type": "正社員",
    "rc.v.place": "本社",
    "rc.v.hours": "9:00〜17:45",
    "rc.v.salary": "月給27万円以上",
    "rc.v.holiday": "土曜・日曜・祝日（完全週休2日制）<br>年間休日126日",
    "rc.v.benefit": "<li>賞与年2回</li><li>決算賞与</li><li>基本残業なし</li><li>有給休暇（システムから申請可能）</li><li>業界未経験歓迎</li>",
    "rc.apply": "この職種に応募・問い合わせる",
    "rc.back": "募集職種一覧へ",
    "form.type.recruit": "採用について",
    "meta.desc": "株式会社ライセントは、ゲーム機・スマートフォンなど中古品の海外輸出を中心に、国内販売・レンタル・修理まで手がける東京の総合輸出企業です。",
    "pt.biz": "事業内容｜株式会社ライセント",
    "pt.company": "会社概要｜株式会社ライセント",
    "pt.contact": "お問い合わせ｜株式会社ライセント",
    "pt.news": "ニュース｜株式会社ライセント",
    "pt.recruit": "採用情報｜株式会社ライセント",
    "pt.rc.sales": "営業｜採用情報｜株式会社ライセント",
    "pt.rc.sns": "SNS運用｜採用情報｜株式会社ライセント"
  },
  "en": {
    "title": "RIGHTSENT CO., LTD. | Exporter of Pre-owned Game Consoles & Smartphones from Japan",
    "brand.name": "RIGHTSENT CO., LTD.",
    "brand.sub": "株式会社ライセント",
    "nav.business": "Business",
    "nav.company": "Company",
    "nav.news": "News",
    "nav.contact": "Contact",
    "hero.h1": "New value for game consoles,<br>from Japan to the world.",
    "hero.sub": "Rightsent creates new value through game consoles and delivers it across Japan and around the world.",
    "topics.h2": "News",
    "topics.all": "All news",
    "tag.notice": "Notice",
    "tag.service": "Service",
    "news.1": "Corporate website renewed",
    "news.2": "VGC Rental terms of service partially revised",
    "news.3": "Launched the game console rental service “VGC RENTAL”",
    "news.4": "Rightsent Co., Ltd. established",
    "biz.h2": "Our Business",
    "t1.h": "Domestic Distribution",
    "t2.h": "Global Export",
    "t3.h": "Console Rental",
    "company.h2": "Corporate Profile",
    "msg": "Anticipate the future,<br>and make ideas real.",
    "c.name.k": "Company",
    "c.name.v": "RIGHTSENT CO., LTD.（株式会社ライセント）",
    "c.est.k": "Established",
    "c.est.v": "November 29, 2018",
    "c.rep.k": "Representative",
    "c.rep.v": "Shinjiro Serizawa, President &amp; CEO",
    "c.hq.k": "Head Office",
    "c.hq.v": "Hayakawa Bldg. 2F, 3-27-20 Shakujii-machi, Nerima-ku, Tokyo 177-0041, Japan",
    "c.br.k": "Branch",
    "c.br.v": "1-39-3-101 Egota, Nakano-ku, Tokyo 165-0022, Japan",
    "c.biz.k": "Business",
    "c.biz.v": "Sourcing, domestic sales, export, rental, and repair of game consoles and smartphones / Sourcing and export of air conditioners and printers / Planning and development of websites, applications, and digital services / Online brokerage of e-money and gift vouchers / Planning of parking and commercial real estate",
    "c.lic.k": "License",
    "c.lic.v": "Secondhand Dealer License, Tokyo Metropolitan Public Safety Commission No. 305581904181",
    "c.mem.k": "Membership",
    "c.mem.v": "Tokyo Chamber of Commerce and Industry",
    "c.bank.k": "Banks",
    "c.bank.v": "Sumitomo Mitsui Banking Corporation / Japan Post Bank",
    "news.h2": "News",
    "contact.h2": "Contact Us",
    "contact.note": "RIGHTSENT CO., LTD. Head Office, Tokyo",
    "f.addr": "Hayakawa Bldg. 2F, 3-27-20 Shakujii-machi, Nerima-ku, Tokyo 177-0041, Japan<br>TEL +81-3-6822-8877<br>Secondhand Dealer License No. 305581904181",
    "f.h1": "Business",
    "f.h2": "Company",
    "f.2a": "Corporate Data",
    "f.2b": "Message",
    "f.2c": "History",
    "f.h3": "Services",
    "f.3d": "Privacy Policy",
    "f.copy": "© RIGHTSENT CO., LTD. ALL RIGHTS RESERVED.",
    "pp.title": "Privacy Policy | RIGHTSENT CO., LTD.",
    "pp.h1": "Privacy Policy",
    "pp.updated": "Effective September 7, 2026",
    "pp.intro": "RIGHTSENT CO., LTD. (“we” or “the Company”) handles personal information obtained through the websites and services we operate (including VGC ONLINE, VGC RENTAL, and VGC STORE; collectively “the Services”) in accordance with the following policy.",
    "pp.s1.h": "1. Information we collect",
    "pp.s1.p": "In providing the Services, we may collect the following information.",
    "pp.s1.l": "<li>Information you enter, such as your name, address, telephone number, and email address</li><li>Details of the identification documents submitted when using the rental service</li><li>Order and contract details and payment information (credit card data is handled by our payment processor and is not retained by us)</li><li>The content of your inquiries</li><li>Information about your use of the Services, such as cookies and access logs</li>",
    "pp.s2.h": "2. Purposes of use",
    "pp.s2.p": "We use personal information only within the scope of the following purposes.",
    "pp.s2.l": "<li>To provide the Services, including shipping products, lending and collecting rental items, and billing</li><li>To verify identity and eligibility for the rental service</li><li>To respond to inquiries and communicate about your contract</li><li>To inform you about new products and campaigns (we will stop upon request)</li><li>To improve the Services and prevent misuse</li><li>To fulfil obligations under applicable laws</li>",
    "pp.s3.h": "3. Provision to third parties",
    "pp.s3.p": "We do not provide personal information to third parties without your consent, except in the following cases.",
    "pp.s3.l": "<li>Where required by law</li><li>Where necessary to protect a person's life, body, or property and it is difficult to obtain your consent</li><li>Where we outsource operations necessary for the Services, such as delivery, payment processing, and system operation (we supervise contractors appropriately)</li>",
    "pp.s4.h": "4. Security",
    "pp.s4.p": "We take necessary and appropriate security measures, including access restrictions, control of storage locations, and staff training, to prevent leakage, loss, or damage of personal information.",
    "pp.s5.h": "5. Cookies",
    "pp.s5.p": "The Services may use cookies and similar technologies to improve convenience and understand usage. You can disable cookies in your browser settings, but some parts of the Services may then be unavailable.",
    "pp.s6.h": "6. Disclosure, correction, and suspension of use",
    "pp.s6.p": "Upon request from the individual for disclosure, correction, addition, deletion, or suspension of use of personal information, we will verify identity and respond promptly in accordance with applicable laws.",
    "pp.s7.h": "7. Changes to this policy",
    "pp.s7.p": "We may revise this policy in response to changes in law or in our business. The revised policy takes effect when posted on our website.",
    "pp.s8.h": "8. Contact",
    "pp.s8.p": "For inquiries about the handling of personal information, please contact us at the address below.",
    "pp.sig": "RIGHTSENT CO., LTD.<br>Hayakawa Bldg. 2F, 3-27-20 Shakujii-machi, Nerima-ku, Tokyo 177-0041, Japan<br>TEL +81-3-6822-8877",
    "nav.home": "Home",
    "idx.biz.all": "View our business",
    "sub.access": "Access",
    "msg.p1": "Since our founding in 2018, Rightsent has expanded its business around the distribution of game consoles.",
    "msg.p2": "Our operations now span domestic sales, export, rental, and repair, and we are extending into new areas such as smartphones.",
    "msg.p3": "Leveraging the distribution network and expertise we have built, we take on the challenge of creating new markets and value beyond existing boundaries.",
    "sign.role": "President &amp; CEO",
    "sign.name": "Shinjiro Serizawa",
    "hist.1": "Rightsent Co., Ltd. established in Nerima-ku, Tokyo",
    "hist.2": "Launched the game console rental service “VGC RENTAL”",
    "hist.3": "Corporate website renewed",
    "access.map": "Open in Google Maps",
    "d1.p2": "Through our own online stores and various online marketplaces, we deliver a wide range of products.",
    "d1.items": "<li>VGC ONLINE (pre-owned software and accessories)</li><li>VGC STORE (game consoles)</li><li>Sales via Mercari Shops</li>",
    "d2.p2": "By delivering pre-owned products no longer used in Japan to overseas markets where demand exists, we create new value for every single item.",
    "d3.p2": "Complete console sets such as PS5, Nintendo Switch 2, and PS4 are available from 15 days. Each set ships with the console, cables, controller, and a start guide, so you can play the day it arrives.",
    "contact.corp.h": "Business inquiries",
    "contact.corp.p": "For export partnerships, wholesale, corporate rental, and repair, please call us or use the form below.",
    "contact.ind.h": "Individual customers",
    "contact.ind.p": "For questions about products, the rental service, or repairs, please visit the respective service site.",
    "f.tag": "Game console distribution, export, rental and repair",
    "hero.btn": "About us",
    "about.1": "Delivering pre-owned consoles no longer used in Japan to new markets overseas.",
    "about.2": "Making expensive consoles easy to enjoy through rental.",
    "about.3": "And repairing broken consoles so they can be used once again.",
    "about.close": "We find new possibilities in every single console and spread that value from Japan to the world.",
    "biz.lead1": "Focusing on new and pre-owned game consoles, we cover everything from sourcing to domestic sales, export, rental, and repair.",
    "biz.lead2": "We have also expanded into the sale, export, and repair of pre-owned smartphones.",
    "biz.lead3": "Drawing on our own sourcing and sales network and technical expertise, we meet diverse needs in Japan and abroad while developing new business areas.",
    "t4.h": "Console &amp; Smartphone Repair",
    "t5.h": "Digital &amp; Planning",
    "idx.co.all": "Corporate profile",
    "biz.intro": "Focusing on game consoles and smartphones, we cover everything from sourcing to domestic sales, export, rental, and repair. Drawing on our sourcing and sales network in Japan and overseas, and our inspection and repair operations that return products to the market, we meet a wide range of needs.",
    "d1.p1": "We source and sell new and pre-owned game consoles and smartphones within Japan.",
    "d1.p3": "Pre-owned items are tested, cleaned, and checked for accessories, and sold only after their condition has been confirmed.",
    "d2.p1": "We export game consoles and smartphones sourced in Japan to overseas sales partners.",
    "d2.p3": "In addition to game consoles, we are expanding our range to smartphones, air conditioners, printers, and more.",
    "d3.p1": "We operate VGC RENTAL, which lets customers use expensive game consoles easily for just the period they need, without purchasing.",
    "d4.p1": "We repair broken game consoles and smartphones.",
    "d4.p2": "Devices that have fallen out of use due to failures or defects are repaired and restored to working condition.",
    "d4.p3": "Drawing on the product knowledge and know-how gained through sales, rental, and export, we aim to return as many devices as possible to the market.",
    "d5.p1": "Drawing on the know-how gained through our own businesses, we plan and develop websites, applications, and digital services.",
    "d5.p2": "Beyond the framework of our existing businesses, we plan new services and business models and develop ideas into real businesses.",
    "form.h2": "Contact Form",
    "form.lead": "Please fill in the form below. We will review your message and get back to you.",
    "form.company": "Company",
    "form.name": "Name",
    "form.email": "Email",
    "form.tel": "Phone",
    "form.type": "Subject",
    "form.msg": "Message",
    "form.req": "Required",
    "form.type.sel": "Please select",
    "form.type.export": "Export / overseas trade",
    "form.type.wholesale": "Sourcing / wholesale",
    "form.type.rental": "Corporate rental",
    "form.type.repair": "Repair",
    "form.type.digital": "Digital services / planning",
    "form.type.other": "Other",
    "form.agree": "I agree to the handling of my personal information as described in the <a href=\"privacy.html\" target=\"_blank\">Privacy Policy</a>.",
    "form.err": "Some required fields are missing. Please check the form.",
    "form.send": "Send",
    "form.done.h": "Thank you for your message.",
    "form.done.p": "We will review it and get back to you. For urgent matters, please call us.",
    "form.fail": "Your message could not be sent. Please try again later or contact us by phone.",
    "form.mail": "Send by email instead",
    "repair.link": "Repair inquiries (Smaho Station)",
    "f.smasta": "Smaho Station (repair)",
    "nav.recruit": "Careers",
    "rc.open": "Open Positions",
    "rc.more": "View details",
    "rc.req": "Job Details",
    "rc.sales.h": "Sales",
    "rc.sales.p": "General sales duties, with a focus on developing new business partners.",
    "rc.sns.h": "Social Media",
    "rc.sns.p": "Managing our social media accounts, including those for our own brand VGC.",
    "rc.k.job": "Position",
    "rc.k.desc": "Responsibilities",
    "rc.k.type": "Employment type",
    "rc.k.place": "Location",
    "rc.k.hours": "Working hours",
    "rc.k.salary": "Salary",
    "rc.k.holiday": "Holidays",
    "rc.k.benefit": "Benefits",
    "rc.v.type": "Full-time employee",
    "rc.v.place": "Head office",
    "rc.v.hours": "9:00–17:45",
    "rc.v.salary": "Monthly salary from ¥270,000",
    "rc.v.holiday": "Saturdays, Sundays and public holidays (two days off every week)<br>126 days off per year",
    "rc.v.benefit": "<li>Bonus twice a year</li><li>Year-end bonus</li><li>Essentially no overtime</li><li>Paid leave (requested online)</li><li>No industry experience required</li>",
    "rc.apply": "Apply or ask about this position",
    "rc.back": "Back to open positions",
    "form.type.recruit": "Careers",
    "meta.desc": "RIGHTSENT CO., LTD. is a Tokyo-based trading company exporting pre-owned game consoles and smartphones from Japan, with domestic sales, rental and repair services.",
    "pt.biz": "Our Business | RIGHTSENT CO., LTD.",
    "pt.company": "Corporate Profile | RIGHTSENT CO., LTD.",
    "pt.contact": "Contact Us | RIGHTSENT CO., LTD.",
    "pt.news": "News | RIGHTSENT CO., LTD.",
    "pt.recruit": "Careers | RIGHTSENT CO., LTD.",
    "pt.rc.sales": "Sales | Careers | RIGHTSENT CO., LTD.",
    "pt.rc.sns": "Social Media | Careers | RIGHTSENT CO., LTD."
  },
  "zh": {
    "title": "RIGHTSENT株式会社｜日本二手商品综合出口企业（游戏主机・智能手机）",
    "brand.name": "RIGHTSENT株式会社",
    "brand.sub": "株式会社ライセント",
    "nav.business": "业务内容",
    "nav.company": "公司概要",
    "nav.news": "新闻",
    "nav.contact": "联系我们",
    "hero.h1": "为游戏主机创造新价值，<br>从日本走向世界。",
    "hero.sub": "RIGHTSENT株式会社通过游戏主机创造新的价值，并将其送往日本国内及海外。",
    "topics.h2": "新闻",
    "topics.all": "查看全部",
    "tag.notice": "公告",
    "tag.service": "服务",
    "news.1": "企业官网全新改版",
    "news.2": "VGC 租赁服务条款部分修订",
    "news.3": "游戏主机租赁服务“VGC RENTAL”正式上线",
    "news.4": "RIGHTSENT株式会社成立",
    "biz.h2": "业务介绍",
    "t1.h": "国内流通与销售",
    "t2.h": "海外出口",
    "t3.h": "游戏主机租赁",
    "company.h2": "公司概要",
    "msg": "预见未来，<br>实现构想。",
    "c.name.k": "公司名称",
    "c.name.v": "RIGHTSENT株式会社（株式会社ライセント）",
    "c.est.k": "成立日期",
    "c.est.v": "2018年11月29日",
    "c.rep.k": "代表人",
    "c.rep.v": "董事长　芹泽 慎次郎",
    "c.hq.k": "总部",
    "c.hq.v": "〒177-0041 日本东京都练马区石神井町3-27-20 早川大厦2F",
    "c.br.k": "分部",
    "c.br.v": "〒165-0022 日本东京都中野区江古田1-39-3-101",
    "c.biz.k": "业务内容",
    "c.biz.v": "游戏主机、智能手机的采购、国内销售、海外出口、租赁与修理／空调、打印机的采购与出口／网站、应用程序、数字服务的企划开发／电子货币、礼品券的网络中介／停车场及商业地产的策划",
    "c.lic.k": "许可证",
    "c.lic.v": "旧物商许可　东京都公安委员会 第305581904181号",
    "c.mem.k": "所属团体",
    "c.mem.v": "东京商工会议所",
    "c.bank.k": "往来银行",
    "c.bank.v": "三井住友银行／日本邮政银行",
    "news.h2": "新闻",
    "contact.h2": "联系我们",
    "contact.note": "RIGHTSENT株式会社 东京总部",
    "f.addr": "〒177-0041 日本东京都练马区石神井町3-27-20 早川大厦2F<br>TEL +81-3-6822-8877<br>旧物商许可 东京都公安委员会 第305581904181号",
    "f.h1": "业务内容",
    "f.h2": "公司概要",
    "f.2a": "基本信息",
    "f.2b": "董事长致辞",
    "f.2c": "发展历程",
    "f.h3": "运营服务",
    "f.3d": "隐私政策",
    "f.copy": "© RIGHTSENT CO., LTD. ALL RIGHTS RESERVED.",
    "pp.title": "隐私政策｜RIGHTSENT株式会社",
    "pp.h1": "隐私政策",
    "pp.updated": "制定日期 2026年9月7日",
    "pp.intro": "RIGHTSENT株式会社（以下简称“本公司”）对于在本公司运营的网站及各项服务（包括 VGC ONLINE、VGC RENTAL、VGC STORE，以下统称“本服务”）中获取的个人信息，依据以下方针进行处理。",
    "pp.s1.h": "1. 获取的信息",
    "pp.s1.p": "本公司在提供本服务时，可能获取以下信息。",
    "pp.s1.l": "<li>姓名、地址、电话号码、电子邮箱等由客户填写的信息</li><li>使用租赁服务时提交的身份证明文件所载事项</li><li>订单与合同内容、付款相关信息（信用卡信息由支付服务商处理，本公司不予保存）</li><li>咨询内容</li><li>Cookie、访问日志等有关本服务使用情况的信息</li>",
    "pp.s2.h": "2. 使用目的",
    "pp.s2.p": "获取的个人信息仅在以下目的范围内使用。",
    "pp.s2.l": "<li>为提供本服务，包括商品发货、租赁商品的出借与回收、费用结算等</li><li>为在租赁服务中进行身份确认及使用资格审查</li><li>为回复咨询及就合同事宜进行联系</li><li>为介绍新商品、活动等信息（如不希望接收，可随时停止）</li><li>为改善本服务及防止不正当使用</li><li>为履行法律法规规定的义务</li>",
    "pp.s3.h": "3. 向第三方提供",
    "pp.s3.p": "除以下情形外，本公司不会在未经本人同意的情况下向第三方提供个人信息。",
    "pp.s3.l": "<li>依据法律法规的情形</li><li>为保护人的生命、身体或财产所必需，且难以取得本人同意的情形</li><li>将配送、结算、系统运营等提供本服务所需的业务委托给外部时（本公司将对受托方进行适当监督）</li>",
    "pp.s4.h": "4. 安全管理",
    "pp.s4.p": "为防止个人信息的泄露、丢失或损毁，本公司将采取访问限制、保管场所管理、员工教育等必要且适当的安全管理措施。",
    "pp.s5.h": "5. Cookie 等的使用",
    "pp.s5.p": "为提升便利性及掌握访问情况，本服务可能使用 Cookie 及类似技术。您可以通过浏览器设置禁用 Cookie，但此时本服务的部分功能可能无法使用。",
    "pp.s6.h": "6. 披露、更正与停止使用",
    "pp.s6.p": "本人提出披露、更正、追加、删除或停止使用个人信息的请求时，本公司将在确认本人身份后，依据法律规定及时处理。",
    "pp.s7.h": "7. 本政策的变更",
    "pp.s7.p": "本公司可能根据法律修订或业务内容变化修订本政策。修订后的内容自在本公司网站发布之时起适用。",
    "pp.s8.h": "8. 联系窗口",
    "pp.s8.p": "有关个人信息处理的咨询，请联系以下地址。",
    "pp.sig": "RIGHTSENT株式会社<br>〒177-0041 日本东京都练马区石神井町3-27-20 早川大厦2F<br>TEL +81-3-6822-8877",
    "nav.home": "首页",
    "idx.biz.all": "查看业务介绍",
    "sub.access": "交通指南",
    "msg.p1": "RIGHTSENT株式会社自2018年成立以来，以游戏主机流通为中心不断扩大业务。",
    "msg.p2": "业务范围涵盖国内销售、海外出口、租赁及修理，目前正将业务领域拓展至智能手机等。",
    "msg.p3": "我们将充分发挥迄今积累的流通网络与经验，挑战不拘泥于既有框架的新市场与新价值的创造。",
    "sign.role": "董事长",
    "sign.name": "芹泽 慎次郎",
    "hist.1": "RIGHTSENT株式会社成立（东京都练马区）",
    "hist.2": "游戏主机租赁服务“VGC RENTAL”上线",
    "hist.3": "企业官网全新改版",
    "access.map": "在 Google 地图中查看",
    "d1.p2": "通过自营电商及各类线上交易平台，提供种类丰富的商品。",
    "d1.items": "<li>VGC ONLINE（二手软件、周边设备）</li><li>VGC STORE（游戏主机）</li><li>通过 Mercari Shops 销售</li>",
    "d2.p2": "将日本不再使用的二手商品送往有需求的海外市场，为每一件商品创造新的价值。",
    "d3.p2": "PS5、Nintendo Switch 2、PS4 等游戏主机整套设备 15 天起租。主机、线缆、手柄、入门指南成套配送，到货当天即可畅玩。",
    "contact.corp.h": "企业客户",
    "contact.corp.p": "海外贸易、采购批发、企业租赁、修理等咨询，请致电或通过以下表单联系我们。",
    "contact.ind.h": "个人客户",
    "contact.ind.p": "有关商品、租赁服务或修理的咨询，请访问各服务网站。",
    "f.tag": "游戏主机的国内流通、海外出口、租赁与修理",
    "hero.btn": "关于我们",
    "about.1": "将日本不再使用的二手游戏主机，送往海外新的市场。",
    "about.2": "通过租赁，让价格高昂的游戏主机变得更易于使用。",
    "about.3": "并且，修理发生故障的游戏主机，使其重新成为可用的一台。",
    "about.close": "我们在每一台游戏主机中发现新的可能，从日本走向世界，不断拓展其价值。",
    "biz.lead1": "以全新及二手游戏主机为中心，广泛开展从采购到国内销售、海外出口、租赁、修理的业务。",
    "biz.lead2": "此外，业务领域已拓展至二手智能手机的销售、出口与修理。",
    "biz.lead3": "凭借独有的采购与销售网络及技术实力，满足国内外多样化的需求，同时积极开拓新的业务领域。",
    "t4.h": "游戏主机与智能手机修理",
    "t5.h": "数字业务与企划开发",
    "idx.co.all": "查看公司概要",
    "biz.intro": "以游戏主机、智能手机为中心，广泛开展从商品采购到国内销售、海外出口、租赁、修理的业务。依托在国内外构建的采购与销售网络，以及让商品重新回到市场的检验与修理体系，满足各种需求。",
    "d1.p1": "以全新及二手游戏主机、智能手机为中心，在日本国内进行采购与销售。",
    "d1.p3": "二手商品经过动作确认、清洁、配件确认等流程，在确认商品状态后进行销售。",
    "d2.p1": "以在日本国内采购的游戏主机、智能手机为中心，出口给海外的销售合作伙伴。",
    "d2.p3": "除游戏主机外，我们还在不断扩大智能手机、空调、打印机等经营品类。",
    "d3.p1": "我们运营“VGC RENTAL”，无需购买价格高昂的游戏主机，即可在需要的期间内轻松使用。",
    "d4.p1": "我们提供发生故障的游戏主机、智能手机的修理服务。",
    "d4.p2": "将因故障或异常而不再使用的设备修理至可再次使用的状态。",
    "d4.p3": "充分运用在销售、租赁、出口业务中积累的商品知识与经验，力求让更多设备重新回到市场。",
    "d5.p1": "运用自营业务中积累的经验，开展网站、应用程序、数字服务等的企划与开发。",
    "d5.p2": "不拘泥于既有业务的框架，策划新的服务与商业模式，并将创意发展为实际的业务。",
    "form.h2": "咨询表单",
    "form.lead": "请填写以下表单并提交。我们确认内容后将由负责人与您联系。",
    "form.company": "公司名称",
    "form.name": "姓名",
    "form.email": "电子邮箱",
    "form.tel": "电话号码",
    "form.type": "咨询类别",
    "form.msg": "咨询内容",
    "form.req": "必填",
    "form.type.sel": "请选择",
    "form.type.export": "海外贸易、出口",
    "form.type.wholesale": "采购、批发",
    "form.type.rental": "企业租赁",
    "form.type.repair": "修理",
    "form.type.digital": "数字业务、企划开发",
    "form.type.other": "其他",
    "form.agree": "我同意按照<a href=\"privacy.html\" target=\"_blank\">隐私政策</a>处理个人信息。",
    "form.err": "有必填项未填写，请确认。",
    "form.send": "发送",
    "form.done.h": "感谢您的咨询。",
    "form.done.p": "我们确认内容后将由负责人与您联系。如有急事，请致电联系。",
    "form.fail": "发送失败。请稍后重试，或致电联系我们。",
    "form.mail": "改用邮件发送",
    "repair.link": "修理咨询（Smaho Station）",
    "f.smasta": "Smaho Station（修理）",
    "nav.recruit": "招聘信息",
    "rc.open": "招聘职位",
    "rc.more": "查看招聘详情",
    "rc.req": "招聘详情",
    "rc.sales.h": "销售",
    "rc.sales.p": "负责销售业务，重点开拓新的合作客户。",
    "rc.sns.h": "社交媒体运营",
    "rc.sns.p": "负责运营公司自有品牌“VGC”等各类社交媒体账号。",
    "rc.k.job": "职位",
    "rc.k.desc": "工作内容",
    "rc.k.type": "雇用形式",
    "rc.k.place": "工作地点",
    "rc.k.hours": "工作时间",
    "rc.k.salary": "薪资",
    "rc.k.holiday": "休假",
    "rc.k.benefit": "待遇与福利",
    "rc.v.type": "正式员工",
    "rc.v.place": "总部",
    "rc.v.hours": "9:00～17:45",
    "rc.v.salary": "月薪27万日元以上",
    "rc.v.holiday": "周六、周日、节假日休息（每周双休）<br>年休126天",
    "rc.v.benefit": "<li>每年两次奖金</li><li>决算奖金</li><li>基本无加班</li><li>带薪休假（可在线申请）</li><li>欢迎无行业经验者</li>",
    "rc.apply": "应聘或咨询此职位",
    "rc.back": "返回招聘职位",
    "form.type.recruit": "招聘相关",
    "meta.desc": "RIGHTSENT株式会社是一家位于东京的综合出口企业，以游戏主机、智能手机等二手商品的海外出口为核心，并开展国内销售、租赁与维修业务。",
    "pt.biz": "业务介绍｜RIGHTSENT株式会社",
    "pt.company": "公司概要｜RIGHTSENT株式会社",
    "pt.contact": "联系我们｜RIGHTSENT株式会社",
    "pt.news": "新闻｜RIGHTSENT株式会社",
    "pt.recruit": "招聘信息｜RIGHTSENT株式会社",
    "pt.rc.sales": "销售｜招聘信息｜RIGHTSENT株式会社",
    "pt.rc.sns": "社交媒体运营｜招聘信息｜RIGHTSENT株式会社"
  }
};

  var KEY = 'rightsent.lang';

  function detect() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q && I18N[q]) return q;
    try { var s = localStorage.getItem(KEY); if (s && I18N[s]) return s; } catch (e) {}
    var nav = (navigator.language || 'ja').toLowerCase();
    if (nav.indexOf('zh') === 0) return 'zh';
    if (nav.indexOf('en') === 0) return 'en';
    return 'ja';
  }

  function splitHero() {
    var h = document.querySelector('.hero h1'); if (!h) return;
    var parts = h.innerHTML.split(/<br\s*\/?>/i);
    var i = 0, frag = document.createDocumentFragment();
    parts.forEach(function (p, idx) {
      var tmp = document.createElement('div'); tmp.innerHTML = p;
      tmp.textContent.split(' ').forEach(function (word, w) {
        if (w > 0) frag.appendChild(document.createTextNode(' '));
        var wrap = document.createElement('span'); wrap.className = 'word';
        Array.from(word).forEach(function (ch) {
          var sp = document.createElement('span'); sp.className = 'ch'; sp.textContent = ch;
          sp.style.animationDelay = (0.25 + (i++) * 0.045).toFixed(3) + 's';
          wrap.appendChild(sp);
        });
        frag.appendChild(wrap);
      });
      if (idx < parts.length - 1) frag.appendChild(document.createElement('br'));
    });
    h.innerHTML = ''; h.appendChild(frag);
  }

  var firstApply = true;
  function apply(lang) {
    var dict = I18N[lang]; if (!dict) return;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (v === undefined) return;
      if (el.namespaceURI === 'http://www.w3.org/2000/svg' || el.tagName === 'TITLE') {
        el.textContent = v.replace(/<br>/g, ' ').replace(/&amp;/g, '&');
      } else {
        el.innerHTML = v;
      }
    });
    if (dict['meta.desc'] && document.body.classList.contains('is-top')) {
      var md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute('content', dict['meta.desc']);
    }
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    splitHero();
    if (!firstApply) {
      var m = document.getElementById('main');
      if (m) { m.classList.remove('lang-fade'); void m.offsetWidth; m.classList.add('lang-fade'); }
    }
    firstApply = false;
  }

  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () { apply(b.getAttribute('data-lang')); });
  });
  apply(detect());

  /* スクロールで現れる */
  document.documentElement.classList.add('js');
  document.querySelectorAll('.lead,.profile,.biz,.about-close,.message .quote,.message .body,.page p,.page h3,.page ul,.page ol,.page .sig,.global > p').forEach(function (el) { el.classList.add('rv'); });
  document.querySelectorAll('.about-grid,.cards,.two > *:not(.message):not(.profile),.history,.access,.news,.contact-grid,.regions,.subnav ul').forEach(function (el) { el.classList.add('rv-stagger'); });
  var targets = document.querySelectorAll('.rv,.rv-stagger,.sh,.shc,.shl');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
    targets.forEach(function (el) { io.observe(el); });
  } else {
    targets.forEach(function (el) { el.classList.add('in'); });
  }

  /* ヘッダーの影 */
  var head = document.querySelector('.head');
  function onScroll() { if (head) head.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* スマホ用メニュー */
  var btn = document.querySelector('.menu-btn');
  var nav = document.querySelector('.gnav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); });
    });
  }

  /* お問い合わせフォーム */
  var form = document.getElementById('contact-form');
  if (form) {
    var pre = new URLSearchParams(location.search).get('type');
    if (pre) { var sel = form.querySelector('select[name=type]'); if (sel && sel.querySelector('option[value="' + pre + '"]')) sel.value = pre; }
    var CONTACT_MAIL = 'contact@rightsent.com';
    function t(k) { var l = document.documentElement.lang || 'ja'; return (I18N[l] && I18N[l][k]) || I18N.ja[k] || ''; }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var err = form.querySelector('.ferr'); var ok = true;
      form.querySelectorAll('[required]').forEach(function (f) {
        var bad = f.type === 'checkbox' ? !f.checked : !f.value.trim() || (f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value));
        f.classList.toggle('invalid', bad); if (bad) ok = false;
      });
      if (!ok) { err.textContent = t('form.err'); err.hidden = false; form.querySelector('.invalid').focus(); return; }
      if (form.website && form.website.value) return; /* honeypot */
      err.hidden = true;
      var data = {}; new FormData(form).forEach(function (v, k) { if (k !== 'website') data[k] = v; });
      var typeSel = form.querySelector('select[name=type]'); data.type_label = typeSel.options[typeSel.selectedIndex].text;
      var btn = form.querySelector('button[type=submit]');
      function done() { form.classList.add('sent'); form.querySelector('.fdone').hidden = false; form.scrollIntoView({ block: 'start' }); }
      var body = [t('form.company') + ': ' + (data.company || ''), t('form.name') + ': ' + data.name, t('form.email') + ': ' + data.email, t('form.tel') + ': ' + (data.tel || ''), t('form.type') + ': ' + data.type_label, '', data.message].join('\n');
      var mailto = 'mailto:' + CONTACT_MAIL + '?subject=' + encodeURIComponent('[' + t('form.h2') + '] ' + data.type_label) + '&body=' + encodeURIComponent(body);
      var endpoint = form.getAttribute('data-endpoint');
      if (endpoint) {
        btn.disabled = true;
        fetch(endpoint, { method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
          .then(function (r) { if (!r.ok) throw new Error(r.status); done(); })
          .catch(function () {
            err.textContent = t('form.fail') + ' ';
            var a = document.createElement('a'); a.href = mailto; a.textContent = t('form.mail'); a.className = 'mail-fb';
            a.addEventListener('click', function () { setTimeout(done, 300); });
            err.appendChild(a); err.hidden = false;
          })
          .then(function () { btn.disabled = false; });
      } else {
        location.href = mailto;
        done();
      }
    });
    form.addEventListener('input', function (e) { if (e.target.classList) e.target.classList.remove('invalid'); });
  }
})();
