// LINE Developersで取得したLIFF IDをここに入れる
const MY_LIFF_ID = '2008724809-R8abgYJk';

async function initializeLiff() {
    try {
        await liff.init({ liffId: MY_LIFF_ID });
        if (liff.isLoggedIn()) {
            getUserProfile();
        } else {
            liff.login();
        }
    } catch (error) {
        console.error('LIFF初期化失敗', error);
    }
}

async function getUserProfile() {
    const profile = await liff.getProfile();
    document.getElementById('displayName').innerText = profile.displayName;
    document.getElementById('pictureUrl').src = profile.pictureUrl;
}

// 閉じるボタンの動作
document.getElementById('closeBtn').addEventListener('click', () => {
    liff.closeWindow();
});

initializeLiff();