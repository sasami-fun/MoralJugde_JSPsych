const informedConsentText = [
    '<div style = "font-size: 3vh; text-align: center;"><p>同意書</p></div>'+

    '<span style = "font-size: 2vh; text-align: left;"><p><b>公立はこだて未来大学</b>'+
    '<br>システム情報科学部'+
    '<br>複雑系知能学科'+
    '<br>実験実施者 笹森なおみ (1016178)'+
    '<br>実験実施責任者 佐藤直行（教授）</p></span>'+

    '<div style = "font-size: 2vh; text-align: left;"><p><b>1.　私は、「道徳判断の認知機構の解明」（以下、本実験）の目的、研究の性質などを十分に理解し、研究目的に賛同した上で、自らの自由意思により本実験に参加します。</b>'+
    '<p><b>2.　私は、理由の如何を問わず、いつでも自らの自由意志で、本実験への参加を取りやめることができるものと理解しています。</b></p>' +
    '<p><b>3.　私は、全ての収集データが乱数に基づく上記IDにより管理され、測定データが匿名化されることで、私の個人情報が保護されることを理解しています。</b>' +
    '<p><b>4.　私は、実験に対する苦情について、公立はこだて未来大学　企画総務課(0138-34-6448直通)において相談できることを理解しています。</b></p></div>'
];

const informedConsent = {
    type: 'survey-multi-select',
    questions: [{
        prompt: '<span style = "font-size: 2vh"><b>上記事項をよく読み，理解した上で実験参加に同意いただける方はチェックをお願いします。同意されない方は，ウィンドウを閉じて実験を中止してください。</b>'+'<br>日付：' + year + '年' + month + '月' + date + '日</span>',
        options: ['<span style = "font-size: 2vh">説明事項をよく読み，理解した上で，実験参加に同意します。</span>'],
        required: true,
        name: ['approval', exp_day]
    }],
    preamble: informedConsentText,
    button_label: '次へ'
};
