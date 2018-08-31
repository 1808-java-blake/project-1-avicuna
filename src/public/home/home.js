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
  const tbody = document.getElementById('movie-table-body');
  tbody.innerHTML += `
  <tr>
    <th scope="row">${reimb.id}</th>
    <td>${reimb.reimbAmount}</td>
    <td>${reimb.reimbSubmitted}</td>
    <td>${reimb.reimbDescription}</td>
    <td>${reimb.reimbTypeId}</td>
    <td>${reimb.reimbStatusId}</td>
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