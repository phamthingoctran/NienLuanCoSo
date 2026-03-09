// Dữ liệu khoa và ngành
const dataCTU = [
    {
        id: "cntt",
        name: "Trường Công nghệ Thông tin và Truyền thông",
        majors: ["Công nghệ thông tin", "Kỹ thuật phần mềm", "An toàn thông tin", "Hệ thống thông tin", "Mạng máy tính"]
    },
    {
        id: "kt",
        name: "Trường Kinh tế",
        majors: ["Quản trị kinh doanh", "Kế toán", "Tài chính ngân hàng"]
    }
];

// Danh sách môn học để chọn (Dùng cho trang Plan)
const subjectsData = [
    { stt: 47, ma: "ML014", ten: "Triết học Mác - Lênin", tc: 3 },
    { stt: 48, ma: "ML016", ten: "Kinh tế chính trị Mác - Lênin", tc: 2 },
    { stt: 66, ma: "CT101", ten: "Lập trình căn bản A", tc: 4 },
    { stt: 67, ma: "CT177", ten: "Cấu trúc dữ liệu", tc: 3 },
    { stt: 68, ma: "CT174", ten: "Phân tích và thiết kế thuật toán", tc: 3 },
    { stt: 69, ma: "CT172", ten: "Toán rời rạc", tc: 4 },
    { stt: 70, ma: "CT175", ten: "Lý thuyết đồ thị", tc: 3 },
    { stt: 72, ma: "CT180", ten: "Cơ sở dữ liệu", tc: 3 },
    { stt: 77, ma: "CT112", ten: "Mạng máy tính", tc: 3 }
];

// Chi tiết các lớp học (Dùng cho trang Builder để hiện lịch)
