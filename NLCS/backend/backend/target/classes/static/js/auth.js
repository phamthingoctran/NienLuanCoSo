document.getElementById('btnLogin').addEventListener('click', function() {
    const mssv = document.getElementById('mssv').value;
    const pass = document.getElementById('password').value;

    if (mssv && pass) {
        localStorage.setItem('user_mssv', mssv);
        // Chuyển hướng đến trang selection.html (trang chọn ngành của bạn)
        window.location.href = 'selection.html'; 
    } else {
        alert('Vui lòng nhập đầy đủ thông tin!');
    }
    const selectedForTKB = JSON.parse(localStorage.getItem('my_planning'));
console.log("Các môn sinh viên đã chọn từ trang Plan:", selectedForTKB);
// Sau đó bạn dùng mảng này để hiển thị lên bảng kéo thả của bạn.
});
