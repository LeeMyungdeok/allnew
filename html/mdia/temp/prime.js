onmessage = function (e) {
    num = parseInt(e.data.from);
    cnt = 0;
    sum = ""
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            cnt += 1
            }
        }
    if (cnt == 2) {
        sum = "소수입니다."
    } else {sum = "소수가 아닙니다."}
    
    postMessage(sum);
}
    