async function login(username, password) {
    const result = document.getElementById("result");
    result.style.color = "blue";
    result.innerText = "Logging in...";

    try {
        const response = await fetch('http://localhost/api/login.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (data.success) {
            result.style.color = "green";
            result.innerText = "Login successful! Redirecting...";
            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 1000);
        } else {
            result.style.color = "red";
            result.innerText = data.message || "Login failed";
        }
    } catch (error) {
        console.error("Error:", error);
        result.style.color = "red";
        result.innerText = "Server error. Is the API running?";
    }
}

async function fetchStudents() {
    const tableBody = document.getElementById("studentTableBody");
    tableBody.innerHTML = "<tr><td colspan='6' style='text-align:center'>Loading data...</td></tr>";

    try {
        const response = await fetch('http://localhost/api/student-list.php');
        const data = await response.json();

        if (data.success) {
            tableBody.innerHTML = ""; 

            data.students.forEach(student => {
                const row = `
                    <tr>
                        <td>${student.student_id}</td>
                        <td>${student.first_name}</td>
                        <td>${student.last_name}</td>
                        <td>${student.email}</td>
                        <td>${student.course}</td>
                        <td>${student.year_level}</td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });
        } else {
            tableBody.innerHTML = "<tr><td colspan='6' style='text-align:center'>No students found.</td></tr>";
        }
    } catch (error) {
        console.error("Error fetching students:", error);
        tableBody.innerHTML = "<tr><td colspan='6' style='text-align:center; color:red;'>Failed to load data.</td></tr>";
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            login(username, password);
        });
    }

    const studentTableBody = document.getElementById("studentTableBody");
    if (studentTableBody) {
        fetchStudents(); 
    }
});