function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no()
}

function showOk() {
    alert("동의하셨습니다.");
}

function showCancel() {
    alert("취소 버튼을 누르셨습니다.");
}

ask("동의하십니까?", showOk, showCancel);