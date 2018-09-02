const userInfo = JSON.parse(localStorage.getItem('user'));
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
}

if(mm<10) {
    mm = '0'+mm
}

today = mm + '/' + dd + '/' + yyyy;

function addMovieToTable(reimb) {
    let reimbType;
    let reimbStatus;
    switch (reimb.reimb_type_id) {
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

    switch (reimb.reimb_status_id) {
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
  const cbody = document.getElementById('reimb-card');
  cbody.innerHTML += `
  <div class="card text-center">
        <div class="card-header">
            ${reimb.firstname} ${reimb.lastname}
        </div>
        <div class="card-body">
            <h5 class="card-title">${reimbType}</h5>
            <p class="card-text">${reimb.reimb_description}</p>
            <button type="button" class="btn btn-outline-success">Accept</button>
            <button type="button" class="btn btn-outline-danger">Deny</button>
        </div>
        <div class="card-footer text-muted">
            ${reimb.reimb_submitted}
        </div>
    </div>
  `
}

fetch(`http://localhost:9001/reimbursements`)
  .then(res => res.json())
  .then(res => {
      res.forEach(reimb => {
      addMovieToTable(reimb);
    })
  })
  .catch(err => {
    console.log(err);
  })