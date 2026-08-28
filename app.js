let employees = [];



function addEmployee() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let epid = document.getElementById("epid").value;
    let wemail = document.getElementById("wemail").value;
    let phone = document.getElementById("pnumber").value;
    let department = document.getElementById("depart").value;
    let desgin = document.getElementById("desgin").value;
    let salary = document.getElementById("sal").value;
    let join = document.getElementById("join").value;
    let status = document.getElementById("sat").value;

    if (fname == "" || lname == "" || wemail == "" || phone == "" || epid == "" || department == "" || desgin == "" || salary == "" || join == "") {
        alert("please fill all fields");
        return;
    }

    let employee ={
        fname: fname,
        lname: lname,
        epid: epid,
        email: wemail,
        phone: phone,
        department: department,
        desgin: desgin,
        salary: salary,
        join: join,
        status: status
    };

    employees.push(employee)

    ShowEmployees();
}

   



function ShowEmployees() {
    let list = document.getElementById("employeeList");

    list.innerHTML = "";

    for (let i = 0; i < employees.length; i++) {
        list.innerHTML += `
        <div class = "employee-card">
        <h2>${employees[i].fname} ${employees[i].lname}</h2>
         <p><b>Employee ID</b>: ${employees[i].epid}</p>
        <p><b>Email:</b> ${employees[i].email}</p>
        <p><b>Phone:</b> ${employees[i].phone}</p>
        <p><b>Department:</b> ${employees[i].department}</p>
         <p><b>Desgin:</b> ${employees[i].desgin}</p>
          <p><b>Salary:</b> ${employees[i].salary}</p>
           <p><b>Join:</b> ${employees[i].join}</p>
            <p><b>Status:</b> ${employees[i].status}</p>
        </div>`;
    }
}


function cancelform(){
      document.getElementById("fname").value = "";
     document.getElementById("lname").value = "";
     document.getElementById("epid").value = "";
     document.getElementById("wemail").value = "";
    document.getElementById("pnumber").value = "";
    document.getElementById("depart").value = "";
     document.getElementById("desgin").value = "";
     document.getElementById("sal").value = "";
    document.getElementById("join").value = "";
     document.getElementById("sat").value = "";

    document.getElementById("employeeList").innerHTML = "";

    employees = [];
}