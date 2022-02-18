var multiP = [
    { id: 0, prompt: "Vui lòng nhập Họ Tên đầy đủ của bạn", log: 'Họ Tên đầy đủ: <br>' },
    { id: 1, prompt: "Vui lòng nhập Thành phố bạn đang sống", log: 'Thành phố: <br>' },
    { id: 2, prompt: "Vui lòng nhập Địa chỉ liên hệ của bạn", log: 'Địa chỉ: <br>' },
    { id: 3, prompt: "Vui lòng nhập Số Điện Thoại của bạn", log: 'Số Điện Thoại: <br>', verify: 'phone' },
    { id: 4, prompt: "Vui lòng nhập Năm sinh của bạn", log: 'Tuổi của bạn là: <br>', verify: 'year' },
    { id: 5, prompt: "Vui lòng nhập Email của bạn", log: 'Email: <br>' },
    { id: 6, prompt: "Vui lòng nhập Công việc hiện tại của bạn", log: 'Công việc hiện tại: <br>' },
    { id: 7, prompt: "Vui lòng nhập Chức danh hiện tại của bạn", log: 'Chức danh hiện tại: <br>' },
    { id: 8, prompt: "Vui lòng nhập Kinh nghiệm làm việc của bạn", log: 'Kinh nghiệm làm việc(năm): <br>', verify: 'yearWork' },
]

var a = [];

// them abc123421

(function creatP() {
    a = multiP.map(e => `<p id = ${e.id}> </p>`)
})()
document.getElementById('head').innerHTML = a.join('')

function notify() {

    alert("Chào mừng bạn đến với ứng dụng JavaScript đầu tiên");

    for (let i = 0; i < multiP.length; i++) {
        const element = multiP[i];
        const valuePromt = prompt(element.prompt)
        if (element.verify == 'year') {
            nhapDung(valuePromt, element)
        } else if (element.verify == 'phone') {
            correctPhone(valuePromt, element)
        } else if (element.verify == 'yearWork') {
            correctWork(valuePromt, element)
        } else {
            document.getElementById(element.id).innerHTML = element.log + valuePromt
        }

    }
    document.getElementById('next').innerHTML = '<button>Bước tiếp theo</buttom>'
}



function nhapDung(numberYear, elementByYear) {
    const yearCurrent = new Date().getFullYear()
    if (numberYear >= yearCurrent) {
        const yearError = prompt('Vui lòng nhập Năm sinh của bạn nhỏ hơn năm hiện tại')
        nhapDung(yearError, elementByYear)
    } else {
        alert('Tuổi của bạn là: ' + `${ yearCurrent - numberYear}`)
        document.getElementById(elementByYear.id).innerHTML = elementByYear.log + `${ yearCurrent - numberYear}`
    }
}

function correctPhone(phoneNumber, elementByPhone) {
    if (isNaN(Number(phoneNumber)) || phoneNumber.length != 10 || phoneNumber[0] != '0') {
        const phoneError = prompt('Vui lòng nhập Số Điện Thoại của bạn chính xác')
        correctPhone(phoneError, elementByPhone)
    } else {
        document.getElementById(elementByPhone.id).innerHTML = elementByPhone.log + phoneNumber
    }
}

function correctWork(yearWork, elementByWork) {
    if (isNaN(Number(yearWork))) {
        const yearWorkError = prompt('Vui lòng nhập số Năm kinh nghiệm của bạn')
        correctWork(yearWorkError, elementByWork)
    } else {
        document.getElementById(elementByWork.id).innerHTML = elementByWork.log + yearWork
    }
}