const students = [
    { name: "Ana", scores: [85, 90, 88], present: true },
    { name: "Ben", scores: [70, 75, 72], present: false },
    { name: "Cara", scores: [95, 92, 94], present: true },
    { name: "Daniel", scores: [60, 65, 70], present: true },
    { name: "Ella", scores: [88, 85, 90], present: true },
    { name: "Felix", scores: [78, 80, 82], present: false },
    { name: "Grace", scores: [92, 89, 94], present: true },
    { name: "Hannah", scores: [73, 70, 68], present: false },
    { name: "Ivan", scores: [81, 84, 79], present: true },
    { name: "Julia", scores: [96, 98, 97], present: true }
];

const tableBody = document.getElementById("studentTableBody");
const searchInput = document.getElementById("searchInput");

function getAverage(scores) {
    let sum = 0;
    for (const score of scores) {
        sum = sum + score;
    }
    return (sum / scores.length).toFixed(2);
}

function getRemarks(scores) {
    for (const score of scores) {
        if (score < 75) {
            return "FAILED";
        }
    }
    return "PASSED";
}

function renderTable(dataToDisplay) {
    tableBody.innerHTML = "";

    if (dataToDisplay.length === 0) {
        tableBody.innerHTML = "<tr><td colspan='7'>No records found</td></tr>";
        return;
    }

    for (const student of dataToDisplay) {
        const average = getAverage(student.scores);
        const remarks = getRemarks(student.scores);
        const attendance = student.present ? "Present" : "Absent";
        const colorClass = remarks === "PASSED" ? "passed" : "failed";

        const rowHTML = `
            <tr>
                <td>${student.name}</td>
                <td>${student.scores[0]}</td>
                <td>${student.scores[1]}</td>
                <td>${student.scores[2]}</td>
                <td>${average}</td>
                <td class="${colorClass}">${remarks}</td>
            </tr>
        `;

        tableBody.innerHTML += rowHTML;
    }
}

function filterByAttendance(isPresent) {
    const result = students.filter(student => student.present === isPresent);
    renderTable(result);
}

function filterByRemarks(status) {
    const result = students.filter(student => {
        return getRemarks(student.scores) === status;
    });
    renderTable(result);
}

function searchStudent() {
    const text = searchInput.value.toLowerCase();
    const result = students.filter(student => {
        return student.name.toLowerCase().includes(text);
    });
    renderTable(result);
}

renderTable(students);