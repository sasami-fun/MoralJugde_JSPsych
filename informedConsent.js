const informedConsentText = [
    '<div style = "font-size: 2vh; text-align: left;"><p>本実験・調査の実施責任者は○○です。本実験・調査への参加はあなたの任意によるものです。</p>' +
    '<p><b>1.本実験・調査の目的</b>' +
    '<br>XXXXXXXXX</p>' +
    '<p><b>2.本実験・調査の手続き</b>' +
    '<br>XXXXXXXXX' +
    '<br>この実験・調査に所要時間はXXXXXXXXXです。</p>' +
    '<p><b>3.潜在的なリスク・苦痛など</b>' +
    '<br>XXXXXXXXX</p>' +
    '<p><b>4.参加による利益</b>' +
    '<br>XXXXXXXXX</p>' +
    '<p><b>5.匿名性の確保</b>' +
    '<br>XXXXXXXXX</p>' +
    '<p><b>6.参加と中止</b>' +
    '<br>XXXXXXXXX</p>' +
    '<p><b>7.実験・調査実施者への問い合わせ</b>' +
    '<br>XXXXXXXXX</p></div>'
];
const informedConsent = {
    type: 'survey-multi-select',
    questions: [{
        prompt: '<span style = "font-size: 2vh"><b>上記事項をよく読み，理解した上で実験参加に同意いただける方はチェックをお願いします。同意されない方はエスケープ（ESC）を押した後，ウィンドウを閉じてください。</b></span>',
        options: ['<span style = "font-size: 2vh">説明事項をよく読み，理解した上で，実験参加に同意します。</span>'],
        required: true,
        name: 'approval'
    }],
    preamble: informedConsentText,
    button_label: '次へ'
};
