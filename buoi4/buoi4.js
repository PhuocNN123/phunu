let danhSachSinhVien = [];

// Lấy danh sách sinh viên từ localStorage (nếu có)
const savedData = localStorage.getItem("danhSachSinhVien");
if (savedData) {
    danhSachSinhVien = JSON.parse(savedData);
}

// Hiển thị danh sách sinh viên lên bảng
function hienThiDanhSachSinhVien() {
    const tableBody = document.getElementById("bangSinhVien");
    tableBody.innerHTML = ""; // Xóa nội dung cũ

    danhSachSinhVien.forEach((sinhVien, index) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${sinhVien.hoTen}</td>
            <td>${sinhVien.maSV}</td>
            <td>${sinhVien.ngaySinh}</td>
            <td>${sinhVien.lop}</td>
            <td>
                <button onclick="suaSinhVien(${index})" hover: "background-color:pink">Sửa</button>
                <button onclick="xoaSinhVien(${index})">Xóa</button>
            </td>
        `;
    });
}

// Thêm sinh viên mới
document.getElementById("formSinhVien").addEventListener("submit", function(event) {
    event.preventDefault();

    const hoTen = document.getElementById("hoTen").value;
    const maSV = document.getElementById("maSV").value;
    const ngaySinh = document.getElementById("ngaySinh").value;
    const lop = document.getElementById("lop").value;

    // Validate dữ liệu (có thể thêm kiểm tra ở đây)

    // Thêm sinh viên vào danh sách
    danhSachSinhVien.push({ hoTen, maSV, ngaySinh, lop });

    // Lưu danh sách vào localStorage
    localStorage.setItem("danhSachSinhVien", JSON.stringify(danhSachSinhVien));

    // Hiển thị lại danh sách
    hienThiDanhSachSinhVien();
    $("#hoTen,#maSV,#ngaySinh,#lop").val(" ");
});

// Xóa sinh viên
function xoaSinhVien(index) {
    if (confirm("Bạn có chắc muốn xóa sinh viên này?")) {
        danhSachSinhVien.splice(index, 1);
        localStorage.setItem("danhSachSinhVien", JSON.stringify(danhSachSinhVien));
        hienThiDanhSachSinhVien();
    }
}
function suaSinhvien(index) {
    const sinhVien = danhSachSinhVien[index];

    // Đổ dữ liệu sinh viên lên biểu mẫu
    $("#hoTen").val(sinhVien.hoTen);
    $("#maSV").val(sinhVien.maSV);
    $("#ngaySinh").val(sinhVien.ngaySinh);
    $("#lop").val(sinhVien.lop);

    // Ẩn nút "Thêm sinh viên"
    $("#submit").hide();

    // Hiển thị nút "Lưu sinh viên"
    $("#btnLuuSinhVien").show();
    // Gắn sự kiện click cho nút "Lưu sinh viên"
    $("#btnLuuSinhVien").off("click").on("click", function() {
        // Lấy giá trị từ các trường nhập liệu
        const hoTenMoi = $("#hoTen").val();
        const maSVMoi = $("#maSV").val();
        const ngaySinhMoi = $("#ngaySinh").val();
        const lopMoi = $("#lop").val();

        // Validate dữ liệu (có thể thêm kiểm tra ở đây)

        // Cập nhật thông tin sinh viên trong danh sách
        danhSachSinhVien[index] = {
            hoTen: hoTenMoi,
            maSV: maSVMoi,
            ngaySinh: ngaySinhMoi,
            lop: lopMoi
        };

        // Lưu danh sách vào localStorage
        localStorage.setItem("danhSachSinhVien", JSON.stringify(danhSachSinhVien));

        // Hiển thị lại danh sách
        hienThiDanhSachSinhVien();

        // Reset biểu mẫu và chuyển về chế độ thêm sinh viên mới
        $("#formSinhVien")[0].reset();
        $("#btnThemSinhVien").show();
        $("#btnLuuSinhVien").hide();
    });
}