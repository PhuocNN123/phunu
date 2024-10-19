// var ten,tuoi;
// ten = prompt("Nhap ten cua ban","");
// tuoi = prompt("Nhap tuoi cua ban","");
// document.write("Chao ban <B>"+ten+"</B> <BR>");
// document.write("tuoir <u>"+tuoi+"</u>")
// document.write("hello war")
// console.log("hello")
// function perSon(dau,cuoi){
//     this.dau=dau;
//     this.cuoi=cuoi;
//     this.hienthi=function() {
//         document.write(this.dau + " "+ this.cuoi);
//     }
// }
// var hien = new perSon('phuoc', "hoang anh");
// document.write(" ");
// hien.hienthi();
$(function(){
    $("button").click(function(){
        $("#box").html("<h3>Nội dung mới</h3><div>Đây là nội dung mới sau khi nhấn nút.</div>");
    });
 });