function sumInput() {
    let sum = 0;
    let num = 0;
    while (num !== -1) {
        sum += num;
        num = +prompt("Nhập số cần tính tổng vào ô dưới đây", "Nhập số -1 để dừng");
        if (num === -1) {
            alert("Bạn đã quyết định tính tổng các số nhập vào");
        } else {
            alert("Bạn đã nhập số :" + num);
        }
    }
    alert("Tổng các số đã nhập vào là: " + sum);
}