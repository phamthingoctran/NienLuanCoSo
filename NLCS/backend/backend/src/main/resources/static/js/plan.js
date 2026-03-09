// 1. DATABASE GIẢ LẬP
const allSubjects = [
    { id: "CT211", name: "An ninh mạng", credits: 3 },
    { id: "CT222", name: "An toàn hệ thống", credits: 3 },
    { id: "CT223", name: "Quản lý dự án phần mềm", credits: 3 }
];

const groupData = {

"CT211": [
{ group: "01", teacher: "Thầy Phạm Hữu Tài", day: 4, slots: "1234", room: "305/C1", status: "Còn 16/40" },
{ group: "02", teacher: "Thầy Bùi Minh Quân", day: 5, slots: "6789", room: "208/C1", status: "Còn 35/40", isConflict: true },
{ group: "03", teacher: "Cô Nguyễn Thị Lan", day: 2, slots: "1234", room: "201/B1", status: "Còn 22/40" },
],

"CT222": [
{ group: "01", teacher: "Thầy Võ Quốc Bảo", day: 2, slots: "6789", room: "204/B1", status: "Còn 12/40" },
{ group: "02", teacher: "Cô Đặng Thu Hà", day: 3, slots: "1234", room: "305/C1", status: "Còn 30/40" },
{ group: "03", teacher: "Thầy Nguyễn Hữu Phúc", day: 4, slots: "6789", room: "210/C1", status: "", isConflict: true },
],

"CT223": [
{ group: "01", teacher: "Cô Phan Thanh Thảo", day: 2, slots: "1234", room: "203/B1", status: "Còn 14/40" },
{ group: "02", teacher: "Thầy Đỗ Minh Tâm", day: 3, slots: "6789", room: "304/C1", status: "Còn 9/40" },
{ group: "03", teacher: "Cô Nguyễn Thu Trang", day: 4, slots: "1234", room: "402/B1", status: "Còn 25/40" },

],

"CT188": [
{ group: "01", teacher: "Thầy Nguyễn Quang Huy", day: 2, slots: "6789", room: "201/B1", status: "Còn 11/40" },
],


"CT300": [
{ group: "01", teacher: "Cô Nguyễn Hồng Vân", day: 2, slots: "1234", room: "201/B1", status: "Còn 18/40" },
{ group: "02", teacher: "Thầy Trần Minh Hoàng", day: 3, slots: "6789", room: "304/C1", status: "Còn 27/40" },
],

"CT302": [
{ group: "01", teacher: "Cô Đỗ Thị Hạnh", day: 2, slots: "1234", room: "201/B1", status: "Còn 20/40" },
{ group: "02", teacher: "Thầy Phạm Minh Tài", day: 3, slots: "6789", room: "305/C1", status: "Còn 17/40" },
{ group: "03", teacher: "Cô Trần Thanh Xuân", day: 4, slots: "1234", room: "304/C1", status: "Còn 6/40" },
{ group: "04", teacher: "Thầy Nguyễn Hoàng Phúc", day: 5, slots: "6789", room: "210/C1", status: "Còn 13/40" },
]

};
let userPlan = [];

function addToPlan() {
    const keyword = document.getElementById('subjectInput').value.trim().toUpperCase();
    const sem = document.getElementById('semesterSelect').value;

    // Tìm môn học từ dữ liệu bạn cung cấp
    const mon = dataMonHocCNTT.find(item => item.ma === keyword || item.ten.toUpperCase().includes(keyword));

    if (mon) {
        if (userPlan.some(p => p.ma === mon.ma)) {
            alert("Môn này đã có trong kế hoạch!");
            return;
        }
        userPlan.push({ ...mon, hocKyChon: sem });
        renderBảng2();
        renderBảng3(); // Cập nhật luôn bảng 3
        document.getElementById('subjectInput').value = "";
    } else {
        alert("Không tìm thấy môn học!");
    }
}

function renderBảng2() {
    const container = document.getElementById('planAccordion');
    if (!container) return;

    const semesterOrder = [
        "Năm học 2025-2026 Học kỳ I", "Năm học 2025-2026 Học kỳ II", "Năm học 2025-2026 Học kỳ III",
        "Năm học 2026-2027 Học kỳ I", "Năm học 2026-2027 Học kỳ II", "Năm học 2026-2027 Học kỳ III",
        "Năm học 2027-2028 Học kỳ I", "Năm học 2027-2028 Học kỳ II", "Năm học 2027-2028 Học kỳ III",
        "Năm học 2028-2029 Học kỳ I", "Năm học 2028-2029 Học kỳ II", "Năm học 2028-2029 Học kỳ III",
        "Năm học 2029-2030 Học kỳ I"
    ];

    const activeSemesters = semesterOrder.filter(sem => userPlan.some(p => p.hocKyChon === sem));
    
    container.innerHTML = activeSemesters.map(s => {
        const mons = userPlan.filter(p => p.hocKyChon === s);
        const totalTC = mons.reduce((sum, m) => sum + m.tc, 0);
        
        return `
            <div class="semester-item" style="border: 1px solid #ddd; margin-bottom: 5px;">
                <div class="sem-header" onclick="toggleSem(this)" style="background:#f8f9fa; padding:10px; cursor:pointer; display:flex; justify-content:space-between;">
                    <strong>${s}</strong>
                    <span>${totalTC} TC ▼</span>
                </div>
                <div class="sem-content" style="display:none; padding:10px;">
                    <div class="subject-list-container">
                        ${mons.map(m => `
                            <div class="subject-row" style="display:flex; justify-content:space-between; padding:5px 0; border-bottom:1px solid #eee;">
                                <span>• ${m.ma} - ${m.ten}</span>
                                <strong>${m.tc} TC</strong>
                            </div>
                        `).join('')}
                    </div>
                    <div class="summary-box" style="margin-top:10px; background:#e3f2fd; padding:10px;">
                        <p style="margin:0; font-size:13px;">Tổng số tín chỉ đăng ký: ${totalTC}</p>
                        
                        <button class="btn-transfer" 
                                onclick="transferToStep3('${s}')" 
                                style="width:100%; margin-top:10px; background:#007bff; color:white; border:none; padding:8px; cursor:pointer; font-weight:bold;">
                            LẬP TKB HỌC KỲ NÀY >>
                        </button>
                    </div>
                </div>
            </div>`;
    }).join('');
}

// Hàm bổ trợ đóng/mở accordion
function toggleSem(el) {
    const content = el.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
}function transferToStep3(semesterName) {
    // 1. Lọc ra danh sách môn học của riêng học kỳ đó
    const subjectsInSem = userPlan.filter(p => p.hocKyChon === semesterName);
    
    // 2. Kiểm tra xem hàm renderBảng3 bên file selection.js đã sẵn sàng chưa
    if (typeof renderBảng3 === 'function') {
        renderBảng3(subjectsInSem, semesterName);
        
        // 3. Hiệu ứng cuộn màn hình sang Bảng 3 để người dùng thấy kết quả
        document.querySelector('.column-selection').scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error("Không tìm thấy hàm renderBảng3 trong selection.js");
    }
}
function transferToStep3(semesterName) {
    const subjectsInSem = userPlan.filter(p => p.hocKyChon === semesterName);
    
    if (typeof renderBảng3 === 'function') {
        renderBảng3(subjectsInSem, semesterName);
        document.querySelector('.column-selection').scrollIntoView({ behavior: 'smooth' });
    }
}
function goToBuilder(){

    localStorage.setItem(
        "selectedGroups",
        JSON.stringify(table3Data)
    );

    window.location.href = "builder.html";
}