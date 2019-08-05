function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = "hello!!!!!!!";
    
    return element;
} 

document.body.appendChild(component());
Push.create("Push 通知だよ！", {
    body: "本文だよここに表示されるよ",
    icon: './images/icon.png', // 右側に表示される画像のパス
    timeout: 4000,
    onClick: function () {
        location.href = 'https://yahoo.co.jp';
        this.close();
    }
});

var task = 'タスク\n開発の進捗';
var promise = Push.create(task);
promise.then(function(notification) {
    notification.close();
});
