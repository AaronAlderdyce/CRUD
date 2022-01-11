var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    formData["middleName"] = document.getElementById("middleName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["email"] = document.getElementById("email").value;
    formData["address"] = document.getElementById("address").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["city"] = document.getElementById("city").value;
    formData["state"] = document.getElementById("state").value;
    formData["zip"] = document.getElementById("zip").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.middleName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.lastName;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.address;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.dob;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.city;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.state;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.zip;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("middleName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("zip").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("middleName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("lastName").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
    document.getElementById("address").value = selectedRow.cells[4].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[5].innerHTML;
    document.getElementById("city").value = selectedRow.cells[6].innerHTML;
    document.getElementById("state").value = selectedRow.cells[7].innerHTML;
    document.getElementById("zip").value = selectedRow.cells[8].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.firstName;
    selectedRow.cells[1].innerHTML = formData.middleName;
    selectedRow.cells[2].innerHTML = formData.lastName;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.address;
    selectedRow.cells[5].innerHTML = formData.dob;
    selectedRow.cells[6].innerHTML = formData.city;
    selectedRow.cells[7].innerHTML = formData.state;
    selectedRow.cells[8].innerHTML = formData.zip;
}

function onDelete(td) {
    if (confirm('Are you sure you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("firstName").value == "") {
        isValid = false;
        document.getElementById("firstNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("firstNameValidationError").classList.contains("hide"))
            document.getElementById("firstNameValidationError").classList.add("hide");
    }
    return isValid;
}