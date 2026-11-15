
// =================================
// Chemistry Learning Hub
// Main JavaScript
// =================================

// 網站載入完成
document.addEventListener("DOMContentLoaded", function () {

    console.log("Chemistry Learning Hub 已成功啟動！");

    // 歡迎訊息
    alert("歡迎來到 Chemistry Learning Hub！🧪");

    // 知識卡片互動
    const cards = document.querySelectorAll(".knowledge-card");

    cards.forEach(function (card) {

        card.addEventListener("click", function (event) {

            // 如果點擊的是連結，保留原本的導覽功能
            if (event.target.closest("a")) {
                return;
            }

            const title = card.querySelector("h3").textContent;

            alert("你選擇了：" + title + "！開始探索化學知識吧！");
        });

    });

});
