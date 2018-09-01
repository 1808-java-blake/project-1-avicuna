const userInfo = JSON.parse(localStorage.getItem('user'));
console.log("The current user's role id is: " + userInfo.userRoleId);

if (userInfo.userRoleId === 1) {
    const tbody = document.getElementById('movie-table-body');
    tbody.innerHTML += `
  <tr>
    <th scope="row">I</th>
    <td>AM</td>
    <td>EMPLOYEE</td>
  </tr>
  `
}
else {
    const tbody = document.getElementById('movie-table-body');
    tbody.innerHTML += `
  <tr>
    <th scope="row">I</th>
    <td>AM</td>
    <td>MANAGER</td>
  </tr>
  `
}

function addMovieToTable(reimb) {
    console.log(reimb.reimbStatusId);
    let reimbType;
    let reimbStatus;
    switch (reimb.reimbTypeId) {
        case 1:
            reimbType = "Lodging";
            break;
        case 2:
            reimbType = "Travel";
            break;
        case 3:
            reimbType = "Food";
            break;
        case 4:
            reimbType = "Other";
            break;
    }

    switch (reimb.reimbStatusId) {
        case 1:
            reimbStatus = "Pending";
            break;
        case 2:
            reimbStatus = "Accepted";
            break;
        case 3:
            reimbStatus = "Denied";
            break;
    }
  const tbody = document.getElementById('movie-table-body');
  tbody.innerHTML += `
  <tr>
    <th scope="row">${reimb.id}</th>
    <td>${reimb.reimbAmount}</td>
    <td>${reimb.reimbSubmitted}</td>
    <td>${reimb.reimbDescription}</td>
    <td>${reimbType}</td>
    <td>${reimbStatus}</td>
  </tr>
  `
}

fetch('http://localhost:9001/reimbursements')
  .then(res => res.json())
  .then(res => {
    res.forEach(reimb => {
      addMovieToTable(reimb);
    })
  })
  .catch(err => {
    console.log(err);
  })