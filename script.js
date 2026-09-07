
function deleteEmployee(del){
    let confirmDelete = confirm("Delet this employee");

        if(confirmDelete == true){
            del.parentElement.parentElement.remove();
            alert("Employee Deleted")
        }
    
}

function viewEmployee(view){
    let rows = view.parentElement.parentElement;

    document.getElementById("viewName").innerText = rows.cells[0].innerText;
     document.getElementById("viewId").innerText = rows.cells[1].innerText;
      document.getElementById("viewDepartment").innerText = rows.cells[2].innerText;
       document.getElementById("viewDesgination").innerText = rows.cells[3].innerText;
        document.getElementById("viewContact").innerText = rows.cells[4].innerText;
         document.getElementById("viewJoined").innerText = rows.cells[5].innerText;
          document.getElementById("viewSalary").innerText = rows.cells[6].innerText;
           document.getElementById("viewStatus").innerText = rows.cells[7].innerText;

           document.getElementById("employeeDetails").style.display= "block";
}

function closeDetails(){
    document.getElementById("employeeDetails").style.display = "none";
}

let theme = document.getElementById("darktheme");

theme.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        theme.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else{
       theme.innerHTML= '<i class="fa-solid fa-moon"></i>'
    }
})

let searchInput = document.getElementById("employeeSearch");


searchInput.addEventListener("input", function(){

    let Text = searchInput.value.toLowerCase();
    let rowss = document.querySelectorAll("tbody tr");

    rowss.forEach(function(row){
        
        let employeData = row.innerText.toLowerCase();

        if(employeData.includes(Text)){
            row.style.display = "";
        } else{
            row.style.display = "none";
        }
    })
})



