// 1. Dữ liệu Khoa
const dataKhoa = [
    
    { id: 1, ten: "Trường Công nghệ thông tin và Truyền thông" },
];

// 2. Dữ liệu Ngành (Gắn với ID của Khoa)
const dataNganh = {
    3: [
        "Công nghệ thông tin", "Kỹ thuật phần mềm", "An toàn thông tin", 
        "Trí tuệ nhân tạo", "Hệ thống thông tin", "Khoa học máy tính", 
        "Truyền thông đa phương tiện", "Mạng máy tính và truyền thông dữ liệu"
    ],
};

const dataMonHocCNTT = [
/* ================= 2025-2026 ================= */


{stt:1,ma:"QP010E",ten:"Giáo dục quốc phòng và An ninh 1(*)",tc:2,batBuoc:"",nam:"2025-2026"},
{stt:2,ma:"QP011E",ten:"Giáo dục quốc phòng và An ninh 2(*)",tc:2,batBuoc:"",nam:"2025-2026"},
{stt:3,ma:"QP012",ten:"Giáo dục quốc phòng và An ninh 3(*)",tc:2,batBuoc:"",nam:"2025-2026"},
{stt:4,ma:"QP013",ten:"Giáo dục quốc phòng và An ninh 4(*)",tc:2,batBuoc:"",nam:"2025-2026"},
{stt:5,ma:"TC009",ten:"Bóng bàn 1(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:6,ma:"TC010",ten:"Bóng bàn 2(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:7,ma:"TC022",ten:"Bóng bàn 3(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:8,ma:"TC005",ten:"Bóng chuyền 1(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:9,ma:"TC006",ten:"Bóng chuyền 2(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:10,ma:"TC020",ten:"Bóng chuyền 3(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:11,ma:"TC007",ten:"Bóng đá 1(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:12,ma:"TC008",ten:"Bóng đá 2(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:13,ma:"TC021",ten:"Bóng đá 3(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:14,ma:"TC028",ten:"Bóng rổ 1(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:15,ma:"TC029",ten:"Bóng rổ 2(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:16,ma:"TC030",ten:"Bóng rổ 3(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:17,ma:"TC011",ten:"Cầu lông 1(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:18,ma:"TC012",ten:"Cầu lông 2(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:19,ma:"TC023",ten:"Cầu lông 3(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:20,ma:"TC025",ten:"Cờ vua 1(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:21,ma:"TC026",ten:"Cờ vua 2(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:22,ma:"TC027",ten:"Cờ vua 3(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:23,ma:"TC001",ten:"Điền kinh 1(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:24,ma:"TC002",ten:"Điền kinh 2(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:25,ma:"TC024",ten:"Điền kinh 3(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:26,ma:"TC003",ten:"Taekwondo 1(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:27,ma:"TC004",ten:"Taekwondo 2(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:28,ma:"TC019",ten:"Taekwondo 3(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:29,ma:"TC031",ten:"Tennis 1(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:30,ma:"TC032",ten:"Tennis 2(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:31,ma:"TC033",ten:"Tennis 3(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:32,ma:"TC016",ten:"Thể dục nhịp điệu 1(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:33,ma:"TC017",ten:"Thể dục nhịp điệu 2(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:34,ma:"TC018",ten:"Thể dục nhịp điệu 3(*)",tc:1,batBuoc:"",nam:"2025-2026"},
{stt:35,ma:"XH023",ten:"Anh văn căn bản 1(*)",tc:4,batBuoc:"",nam:"2025-2026"},
{stt:36,ma:"XH024",ten:"Anh văn căn bản 2(*)",tc:3,batBuoc:"",nam:"2025-2026"},
{stt:37,ma:"XH025",ten:"Anh văn căn bản 3(*)",tc:3,batBuoc:"",nam:"2025-2026"},
{stt:38,ma:"XH031",ten:"Anh văn tăng cường 1(*)",tc:4,batBuoc:"",nam:"2025-2026"},
{stt:39,ma:"XH032",ten:"Anh văn tăng cường 2(*)",tc:3,batBuoc:"",nam:"2025-2026"},
{stt:40,ma:"XH033",ten:"Anh văn tăng cường 3(*)",tc:3,batBuoc:"",nam:"2025-2026"},
{stt:41,ma:"FL001",ten:"Pháp văn căn bản 1(*)",tc:4,batBuoc:"",nam:"2025-2026"},
{stt:42,ma:"FL002",ten:"Pháp văn căn bản 2(*)",tc:3,batBuoc:"",nam:"2025-2026"},
{stt:43,ma:"FL003",ten:"Pháp văn căn bản 3(*)",tc:3,batBuoc:"",nam:"2025-2026"},
{stt:44,ma:"FL007",ten:"Pháp văn tăng cường 1(*)",tc:4,batBuoc:"",nam:"2025-2026"},
{stt:45,ma:"FL008",ten:"Pháp văn tăng cường 2(*)",tc:3,batBuoc:"",nam:"2025-2026"},
{stt:46,ma:"FL009",ten:"Pháp văn tăng cường 3(*)",tc:3,batBuoc:"",nam:"2025-2026"},

/* ================= 2026-2027 ================= */

{stt:47,ma:"ML014",ten:"Triết học Mác - Lênin",tc:3,batBuoc:"*",nam:"2026-2027"},
{stt:48,ma:"ML016",ten:"Kinh tế chính trị Mác - Lênin",tc:2,batBuoc:"*",nam:"2026-2027"},
{stt:49,ma:"ML018",ten:"Chủ nghĩa xã hội khoa học",tc:2,batBuoc:"*",nam:"2026-2027"},
{stt:50,ma:"ML019",ten:"Lịch sử Đảng Cộng sản Việt Nam",tc:2,batBuoc:"*",nam:"2026-2027"},
{stt:51,ma:"ML021",ten:"Tư tưởng Hồ Chí Minh",tc:2,batBuoc:"*",nam:"2026-2027"},
{stt:52,ma:"KL001E",ten:"Pháp luật đại cương",tc:2,batBuoc:"*",nam:"2026-2027"},
{stt:53,ma:"ML007",ten:"Logic học đại cương",tc:2,batBuoc:"",nam:"2026-2027"},
{stt:54,ma:"XH028",ten:"Xã hội học đại cương",tc:2,batBuoc:"",nam:"2026-2027"},
{stt:55,ma:"XH011",ten:"Cơ sở văn hóa Việt Nam",tc:2,batBuoc:"",nam:"2026-2027"},
{stt:56,ma:"XH012",ten:"Tiếng Việt thực hành",tc:2,batBuoc:"",nam:"2026-2027"},
{stt:57,ma:"XH014",ten:"Văn bản và lưu trữ học đại cương",tc:2,batBuoc:"",nam:"2026-2027"},
{stt:58,ma:"KN001E",ten:"Kỹ năng mềm",tc:2,batBuoc:"",nam:"2026-2027"},
{stt:59,ma:"KN002E",ten:"Đổi mới sáng tạo và khởi nghiệp",tc:2,batBuoc:"",nam:"2026-2027"},
{stt:60,ma:"TN001",ten:"Vi - Tích phân A1",tc:3,batBuoc:"*",nam:"2026-2027"},
{stt:61,ma:"TN002",ten:"Vi - Tích phân A2",tc:4,batBuoc:"*",nam:"2026-2027"},
{stt:62,ma:"TN010",ten:"Xác suất thống kê",tc:3,batBuoc:"*",nam:"2026-2027"},
{stt:63,ma:"TN012",ten:"Đại số tuyến tính và Hình học",tc:4,batBuoc:"*",nam:"2026-2027"},

/* ================= 2027-2028 ================= */

{stt:64,ma:"CT100",ten:"Kỹ năng học đại học",tc:2,batBuoc:"*",nam:"2027-2028"},
{stt:65,ma:"CT005",ten:"Nền tảng công nghệ số",tc:4,batBuoc:"*",nam:"2027-2028"},
{stt:66,ma:"CT101",ten:"Lập trình căn bản A",tc:4,batBuoc:"*",nam:"2027-2028"},
{stt:67,ma:"CT177",ten:"Cấu trúc dữ liệu",tc:3,batBuoc:"*",nam:"2027-2028"},
{stt:68,ma:"CT174",ten:"Phân tích và thiết kế thuật toán",tc:3,batBuoc:"*",nam:"2027-2028"},
{stt:69,ma:"CT172",ten:"Toán rời rạc",tc:4,batBuoc:"*",nam:"2027-2028"},
{stt:70,ma:"CT175",ten:"Lý thuyết đồ thị",tc:3,batBuoc:"*",nam:"2027-2028"},
{stt:71,ma:"CT190",ten:"Nhập môn trí tuệ nhân tạo",tc:2,batBuoc:"*",nam:"2027-2028"},
{stt:72,ma:"CT180",ten:"Cơ sở dữ liệu",tc:3,batBuoc:"*",nam:"2027-2028"},
{stt:73,ma:"CT182",ten:"Ngôn ngữ mô hình hóa",tc:3,batBuoc:"*",nam:"2027-2028"},
{stt:74,ma:"CT296",ten:"Phân tích và thiết kế hệ thống thông tin",tc:3,batBuoc:"*",nam:"2027-2028"},
{stt:75,ma:"CT173",ten:"Kiến trúc máy tính",tc:3,batBuoc:"*",nam:"2027-2028"},
{stt:76,ma:"CT178",ten:"Nguyên lý hệ điều hành",tc:3,batBuoc:"*",nam:"2027-2028"},
{stt:77,ma:"CT112",ten:"Mạng máy tính",tc:3,batBuoc:"*",nam:"2027-2028"},
{stt:78,ma:"CT176",ten:"Lập trình hướng đối tượng",tc:3,batBuoc:"*",nam:"2027-2028"},
{stt:79,ma:"CT179",ten:"Quản trị hệ thống",tc:3,batBuoc:"*",nam:"2027-2028"},
{stt:80,ma:"CT188",ten:"Nhập môn lập trình web",tc:3,batBuoc:"*",nam:"2027-2028"},

/* ================= 2028-2029 ================= */

{stt:81,ma:"CT271E",ten:"Niên luận cơ sở - CNTT",tc:3,batBuoc:"*",nam:"2028-2029"},
{stt:82,ma:"CT273",ten:"Giao diện người - máy",tc:3,batBuoc:"*",nam:"2028-2029"},
{stt:83,ma:"CT294",ten:"Máy học ứng dụng",tc:3,batBuoc:"*",nam:"2028-2029"},
{stt:84,ma:"CT202",ten:"Nguyên lý máy học",tc:3,batBuoc:"*",nam:"2028-2029"},
{stt:85,ma:"CT467",ten:"Quản trị dữ liệu",tc:3,batBuoc:"*",nam:"2028-2029"},
{stt:86,ma:"CT293",ten:"Mạng và truyền thông dữ liệu",tc:3,batBuoc:"*",nam:"2028-2029"},
{stt:87,ma:"CT275",ten:"Công nghệ Web",tc:3,batBuoc:"*",nam:"2028-2029"},
{stt:88,ma:"CT300",ten:"Phát triển phần mềm",tc:3,batBuoc:"*",nam:"2028-2029"},
{stt:89,ma:"CT223",ten:"Quản lý dự án phần mềm",tc:3,batBuoc:"*",nam:"2028-2029"},
{stt:90,ma:"CT222",ten:"An toàn hệ thống",tc:3,batBuoc:"*",nam:"2028-2029"},
{stt:91,ma:"CT211",ten:"An ninh mạng",tc:3,batBuoc:"*",nam:"2028-2029"},
{stt:92,ma:"CT297",ten:"Pháp y máy tính",tc:3,batBuoc:"*",nam:"2028-2029"},
{stt:93,ma:"CT449",ten:"Phát triển ứng dụng Web",tc:3,batBuoc:"*",nam:"2028-2029"},
{stt:94,ma:"CT484",ten:"Phát triển ứng dụng di động",tc:3,batBuoc:"*",nam:"2028-2029"},
{stt:95,ma:"CT522",ten:"Nền tảng về internet vạn vật",tc:3,batBuoc:"*",nam:"2028-2029"},
{stt:96,ma:"CT562T",ten:"Phân tích và thiết kế giải thuật nâng cao",tc:3,batBuoc:"*",nam:"2028-2029"},
{stt:97,ma:"CT566T",ten:"Phần mềm tự do mã nguồn mở",tc:3,batBuoc:"*",nam:"2028-2029"},
{stt:98,ma:"CT279",ten:"Blockchain",tc:3,batBuoc:"*",nam:"2028-2029"},
{stt:99,ma:"CT466E",ten:"Niên luận - CNTT",tc:3,batBuoc:"*",nam:"2028-2029"},
{stt:100,ma:"CT518E",ten:"Thực tập doanh nghiệp - CNTT",tc:5,batBuoc:"*",nam:"2028-2029"},

/* ================= 2029-2030 ================= */

{stt:101,ma:"CT550E",ten:"Luận văn tốt nghiệp - CNTT",tc:15,batBuoc:"*",nam:"2029-2030"},
{stt:102,ma:"CT501E",ten:"Tiểu luận tốt nghiệp - CNTT",tc:6,batBuoc:"*",nam:"2029-2030"},
{stt:103,ma:"CT478",ten:"Trung tâm dữ liệu",tc:3,batBuoc:"*",nam:"2029-2030"},
{stt:104,ma:"CT283",ten:"Hệ thống chịu lỗi",tc:3,batBuoc:"*",nam:"2029-2030"},
{stt:105,ma:"CT233",ten:"Điện toán đám mây",tc:3,batBuoc:"*",nam:"2029-2030"},
{stt:106,ma:"CT482",ten:"Xử lý dữ liệu lớn",tc:3,batBuoc:"*",nam:"2029-2030"},
{stt:107,ma:"CT210",ten:"Thị giác máy tính",tc:3,batBuoc:"*",nam:"2029-2030"},
{stt:108,ma:"CT219",ten:"Xử lý ngôn ngữ tự nhiên",tc:3,batBuoc:"*",nam:"2029-2030"},
{stt:109,ma:"CT312",ten:"Khai khoáng dữ liệu",tc:3,batBuoc:"*",nam:"2029-2030"},
{stt:110,ma:"CT563T",ten:"Máy học nâng cao",tc:3,batBuoc:"*",nam:"2029-2030"},
{stt:111,ma:"CT564T",ten:"Thị giác máy tính nâng cao",tc:3,batBuoc:"*",nam:"2029-2030"},
{stt:112,ma:"CT565T",ten:"Xử lý ngôn ngữ tự nhiên nâng cao",tc:3,batBuoc:"*",nam:"2029-2030"}

];
document.addEventListener("DOMContentLoaded", function() {
    const mainTitle = document.getElementById('main-title');
    const links = document.querySelectorAll('.course-link');
    const listNganh = document.getElementById('list-nganh');
    const sectionMonHoc = document.getElementById('section-mon-hoc');

    // Sự kiện khi bấm vào các Khóa học phía dưới
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const text = this.textContent;
            const startIdx = text.indexOf("Khóa");
            const courseName = text.substring(startIdx).toUpperCase();
            
            mainTitle.textContent = `CHƯƠNG TRÌNH ĐÀO TẠO ${courseName}`;
            
            links.forEach(l => l.classList.remove('active-course'));
            this.classList.add('active-course');
            
            // Reset lại bảng ngành và môn học
            listNganh.innerHTML = '<div class="p-3 text-muted italic">Vui lòng chọn khoa...</div>';
            sectionMonHoc.style.display = 'none';
            document.querySelectorAll('#list-khoa .list-group-item').forEach(i => i.classList.remove('active'));
        });
    });

    // Hàm load Ngành khi bấm vào Khoa (ID 3 là CNTT)
    window.loadNganh = function(btn, tenKhoa, khoaId) {
        document.querySelectorAll('#list-khoa .list-group-item').forEach(i => i.classList.remove('active'));
        btn.classList.add('active');

        const nganhCuaKhoa = dataNganh[khoaId] || [];
        
        if (nganhCuaKhoa.length > 0) {
            let html = '<div class="list-group list-group-flush">';
            nganhCuaKhoa.forEach(tenNganh => {
                html += `
                    <button class="list-group-item list-group-item-action" 
                            onclick="loadMonHoc('${tenKhoa}', '${tenNganh}')">
                        ${tenNganh}
                    </button>`;
            });
            html += '</div>';
            listNganh.innerHTML = html;
        } else {
            listNganh.innerHTML = '<div class="p-3 text-muted">Không có dữ liệu ngành cho khoa này.</div>';
        }
        sectionMonHoc.style.display = 'none';
    };

    // Hàm load Môn học khi bấm vào Ngành
   // Hàm load Môn học khi bấm vào Ngành
    window.loadMonHoc = function(tenKhoa, tenNganh) {
        document.getElementById('table-header-name').textContent = "KHOA " + tenKhoa.toUpperCase();
        sectionMonHoc.style.display = 'block';
        const body = document.getElementById('body-mon-hoc');
        const containerNut = document.getElementById('container-nut-ngoai'); // Thêm dòng này
        
        let html = "";
        let tongTC = 0;

        // Render môn học
        dataMonHocCNTT.forEach(mon => {
            tongTC += mon.tc;
            html += `
                <tr>
                    <td class="text-center">${mon.stt}</td>
                    <td class="text-center">${mon.ma}</td>
                    <td>${mon.ten}</td>
                    <td class="text-center text-danger fw-bold">${mon.batBuoc}</td>
                    <td class="text-center">${mon.tc}</td>
                    <td class="text-center">${mon.nam}</td>
                </tr>
            `;
        });
        
        // Chỉ để lại dòng Tổng số tín chỉ trong bảng
        html += `
            <tr class="table-light fw-bold">
                <td colspan="4" class="text-end text-success align-middle">Tổng số tín chỉ:</td>
                <td class="text-center text-success align-middle">${tongTC}</td>
                <td class="text-center"></td>
            </tr>
        `;
        body.innerHTML = html;

        // Đẩy nút Lập TKB ra ngoài bảng, hình chữ nhật nằm ngang (w-100)
        containerNut.innerHTML = `
            <a href="plan.html" class="btn btn-primary btn-lg w-100 fw-bold shadow-sm py-3">
                <i class="fas fa-calendar-plus me-2"></i> LẬP THỜI KHÓA BIỂU
            </a>
        `;
        
        // Cuộn mượt xuống bảng môn học
        sectionMonHoc.scrollIntoView({ behavior: 'smooth' });
    };
});
window.renderBảng3 = function(subjects, semesterName) {
    const area = document.getElementById('registrationArea');
    if (!area) return;

    if (!subjects || subjects.length === 0) {
        area.innerHTML = "<p style='text-align:center; padding:20px;'>Chưa có môn nào để xếp lịch.</p>";
        return;
    }

    area.innerHTML = `
        <div style="font-weight:bold; margin-bottom:10px;">
            Học kỳ: ${semesterName}
        </div>
    ` + subjects.map(m => {

        const hasData = typeof groupData !== 'undefined' && groupData[m.ma];

        return `
            <div class="reg-card" style="margin:10px; padding:15px; border:1px solid #00cfd5; border-radius:8px; background:white;">
                <div style="font-weight:bold; color:#007bff;">${m.ten}</div>
                <div style="font-size:12px; color:#666; margin-bottom:10px;">
                    Mã HP: ${m.ma} | ${m.tc} TC
                </div>
                
                ${hasData 
                    ? `<button onclick="openGroupModal('${m.ma}', '${m.ten}')" 
                               style="width:100%; padding:8px; background:#00cfd5; color:white; border:none; border-radius:4px; cursor:pointer; font-weight:bold;">
                           CHỌN NHÓM LỚP
                       </button>`
                    : `<div style="color:red; font-size:12px; border:1px dashed red; padding:5px; text-align:center;">
                           Hiện chưa có nhóm lớp
                       </div>`
                }

                <div id="selected-group-${m.ma}" style="margin-top:10px; font-size:12px; color:green; font-weight:bold;"></div>
            </div>
        `;
    }).join('');
};
function renderBảng3(subjects, semesterName) {
    const container = document.getElementById("registrationArea");

    if (!subjects || subjects.length === 0) {
        container.innerHTML = "<p>Không có môn học</p>";
        return;
    }

    container.innerHTML = `
        <h4>${semesterName}</h4>
        ${subjects.map(s => `
            <div style="border:1px solid #ccc;padding:10px;margin-bottom:10px">
                <strong>${s.ma} - ${s.ten}</strong>
                <br>
                <button onclick="openGroupModal('${s.ma}','${s.ten}')">
                    CHỌN NHÓM LỚP
                </button>
            </div>
        `).join('')}
    `;
}
function openGroupModal(subjectId, subjectName) {

    const modal = document.getElementById("groupModal");
    const modalTitle = document.getElementById("modalSubjectName");
    const groupOptions = document.getElementById("groupOptions");

    modalTitle.innerText = subjectName;

    const groups = groupData[subjectId];

    if (!groups || groups.length === 0) {
        groupOptions.innerHTML = "<p>Chưa có nhóm lớp</p>";
    } else {

        groupOptions.innerHTML = groups.map(g => {

            return `
                <div style="border:1px solid #ddd;padding:10px;margin:8px 0;border-radius:6px">
                    <strong>Nhóm ${g.group}</strong><br>
                    <span style="font-size:13px;color:#555">
                        GV: ${g.teacher}<br>
                        Thứ ${g.day} - Tiết ${g.slots}<br>
                        Phòng: ${g.room}<br>
                        ${g.status || ""}
                    </span>
                    <br><br>
                    <button onclick="selectGroup('${subjectId}','${g.group}')"
                            style="padding:6px 12px;background:#00cfd5;color:white;border:none;border-radius:4px;cursor:pointer">
                        Chọn nhóm
                    </button>
                </div>
            `;
        }).join('');
    }

    modal.style.display = "block";
}
function closeModal() {
    document.getElementById("groupModal").style.display = "none";
}
function selectGroup(subjectId, groupNo) {

    const groups = groupData[subjectId];
    const chosenGroup = groups.find(g => g.group === groupNo);

    if (!chosenGroup) {
        alert("Không tìm thấy nhóm!");
        return;
    }

    let selected =
        JSON.parse(localStorage.getItem("selectedGroups")) || [];

    // xóa nếu đã tồn tại
    selected = selected.filter(s => s.subjectId !== subjectId);

    // ✅ LƯU ĐÚNG FORMAT BUILDER
  selected.push({
    subjectId: subjectId,
    group: chosenGroup.group,
    day: chosenGroup.day,
    slots: chosenGroup.slots
});
    localStorage.setItem(
        "selectedGroups",
        JSON.stringify(selected)
    );

    alert("Đã chọn nhóm " + chosenGroup.group);
    closeModal();
}
function goToBuilder() {

    const selected = JSON.parse(localStorage.getItem("selectedGroups")) || [];

    console.log("Selected groups:", selected);

    if (selected.length === 0) {
        alert("Chưa chọn nhóm môn học!");
        return;
    }

    window.location.href = "builder.html";
}
window.goToBuilder = goToBuilder;
window.selectGroup = selectGroup;window.openGroupModal = openGroupModal;
window.selectGroup = selectGroup;
window.closeModal = closeModal;