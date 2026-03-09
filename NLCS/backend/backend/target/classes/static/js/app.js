// =========================
// GLOBAL
// =========================

let selectedGroups = [];
let gaResults = [];


// =========================
// LOAD PAGE
// =========================

document.addEventListener("DOMContentLoaded", function(){

    createTable();

    selectedGroups =
        JSON.parse(localStorage.getItem("selectedGroups")) || [];

    console.log("DATA FROM PLAN:", selectedGroups);

    if(selectedGroups.length === 0){
        alert("Không có dữ liệu từ Plan!");
        return;
    }

    renderSubjects(selectedGroups);
});


// =========================
// RENDER DANH SÁCH MÔN
// =========================

function renderSubjects(groups){

    const div = document.getElementById("selectedSubjects");

    div.innerHTML = "";

    groups.forEach(s=>{

        const card = document.createElement("div");
        card.className = "subject-card";

        card.innerHTML = `
            <b>${s.subjectId}</b><br>
            Nhóm ${s.group}
        `;

        div.appendChild(card);
    });
}



// =========================
// TẠO BẢNG TKB
// =========================

function createTable(){

    const body = document.getElementById("timetableBody");

    let html = "<tr><th>Tiết</th>";

    for(let d=2; d<=7; d++){
        html += `<th>Thứ ${d}</th>`;
    }

    html += "</tr>";

    for(let i=1;i<=12;i++){

        html += `<tr>
                    <td><b>${i}</b></td>`;

        for(let d=2; d<=7; d++){

            html += `<td id="cell-${d}-${i}"></td>`;
        }

        html += "</tr>";
    }

    body.innerHTML = html;
}



// =========================
// RUN GENETIC ALGORITHM
// =========================

function runGA(){

    if(selectedGroups.length === 0){

        alert("Chưa có dữ liệu môn học");
        return;
    }

    // convert sang ScheduleDTO

    const formattedSubjects = selectedGroups.map(s => {

        const slotList =
            s.slots
            .split("")
            .map(p => `${s.day}-${p}`);

        return {
            id: s.subjectId,
            name: s.subjectId,
            credits: 3,
            slots: slotList
        };
    });

    const requestData = {
        subjects: formattedSubjects
    };

    console.log("SEND TO BACKEND:", requestData);


    fetch("/api/timetable/run-ga",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body: JSON.stringify(requestData)

    })
    .then(res=>{

        if(!res.ok){

            throw new Error("Backend lỗi: "+res.status);
        }

        return res.json();
    })

    .then(data=>{

        console.log("GA RESULT:",data);

        if(!data || data.length===0){

            alert("Không tạo được TKB");
            return;
        }

        gaResults = data;

        // hiển thị TKB đầu tiên
        renderTableFromGA(gaResults[0].subjects);

        showOptions();

    })

    .catch(err=>{

        console.error(err);

        alert("Lỗi khi chạy GA");
    });
}



// =========================
// HIỂN THỊ 2 TKB CHỌN
// =========================

function showOptions(){

    const div = document.getElementById("tkbOptions");

    if(!div) return;

    div.innerHTML = "";

    gaResults.forEach((tkb,i)=>{

        const btn = document.createElement("button");

        btn.innerText = "Xem TKB " + (i+1);

        btn.onclick = ()=>{

            renderTableFromGA(tkb.subjects);
        };

        div.appendChild(btn);
    });
}



// =========================
// RENDER TKB
// =========================

function renderTableFromGA(subjects){

    // clear bảng

    for(let d=2; d<=7; d++){

        for(let i=1;i<=12;i++){

            const cell =
                document.getElementById(`cell-${d}-${i}`);

            if(cell){
                cell.innerHTML = "";
            }
        }
    }

    subjects.forEach(sub=>{

        sub.slots.forEach(slot=>{

            const parts = slot.split("-");

            const day = parseInt(parts[0]);

            const period = parseInt(parts[1]);

            const cell =
                document.getElementById(
                    `cell-${day}-${period}`
                );

            if(cell){

                cell.innerHTML = `
                    <div class="course-box">
                        ${sub.name}
                    </div>
                `;
            }

        });

    });

}