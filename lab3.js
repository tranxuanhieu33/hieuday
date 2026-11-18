// ===============================
// LAB 03 - LAP TRINH JAVASCRIPT
// ===============================


// BAI 1: KIEM TRA SO CHAN
function kiemTraSoChan(n) {
    if (n % 2 === 0) {
        return "La so chan";
    } else {
        return "Khong phai so chan";
    }
}

console.log("BAI 1:");
console.log(kiemTraSoChan(10));
console.log(kiemTraSoChan(7));


// BAI 2: TINH TIEN DIEN
function tinhTienDien(kwh) {
    let tien = 0;

    if (kwh <= 50) {
        tien = kwh * 1800;
    } else if (kwh <= 100) {
        tien = 50 * 1800 + (kwh - 50) * 2300;
    } else {
        tien = 50 * 1800 + 50 * 2300 + (kwh - 100) * 3000;
    }

    return tien;
}

function tinhSoDien(tien) {
    if (tien <= 50 * 1800) {
        return tien / 1800;
    } else if (tien <= 50 * 1800 + 50 * 2300) {
        return 50 + (tien - 50 * 1800) / 2300;
    } else {
        return 100 + (tien - 50 * 1800 - 50 * 2300) / 3000;
    }
}

console.log("\nBAI 2:");
console.log("Tien dien 100 kWh:", tinhTienDien(100), "dong");
console.log("910.000 dong dung:", tinhSoDien(910000), "kWh");


// BAI 3: TINH LUONG THEO CHUC VU
function tinhLuong(chucVu, ngayCong) {
    let heSo = 0;
    let luongCoBan = 5000000;
    let ngayCongQuyDinh = 24;

    switch (chucVu.toLowerCase()) {
        case "intern":
            heSo = 1.0;
            break;
        case "staff":
            heSo = 1.5;
            break;
        case "senior":
            heSo = 2.0;
            break;
        case "manager":
            heSo = 3.0;
            break;
        default:
            return "Chuc vu khong hop le";
    }

    return heSo * ngayCong * luongCoBan / ngayCongQuyDinh;
}

console.log("\nBAI 3:");
console.log("Luong Intern:", tinhLuong("intern", 24), "dong");
console.log("Luong Staff:", tinhLuong("staff", 24), "dong");
console.log("Luong Senior:", tinhLuong("senior", 24), "dong");
console.log("Luong Manager:", tinhLuong("manager", 24), "dong");


// BAI 4: CHUAN HOA CAU
function chuanHoaCau(str) {
    str = str.trim().replace(/\s+/g, " ");
    str = str.replace(/\s+([.,!?])/g, "$1");
    str = str.replace(/([.!?])(?=\S)/g, "$1 ");
    str = str.toLowerCase();

    return str.replace(/(^|[.!?]\s*)([a-zà-ỹ])/g, function (match, p1, p2) {
        return p1 + p2.toUpperCase();
    });
}

let cau = "   xin chao   cac ban.    hom nay   troi dep qua   !toi   di hoc ve ? ";

console.log("\nBAI 4:");
console.log(chuanHoaCau(cau));


// BAI 5: CALCULATOR
function calculator(a, b, phepTinh) {
    switch (phepTinh) {
        case "+":
            return a + b;

        case "-":
            return a - b;

        case "*":
            return a * b;

        case "/":
            if (b === 0) {
                return "Khong the chia cho 0";
            }
            return a / b;

        default:
            return "Phep tinh khong hop le";
    }
}

console.log("\nBAI 5:");
console.log("Cong:", calculator(10, 5, "+"));
console.log("Tru:", calculator(10, 5, "-"));
console.log("Nhan:", calculator(10, 5, "*"));
console.log("Chia:", calculator(10, 5, "/"));
