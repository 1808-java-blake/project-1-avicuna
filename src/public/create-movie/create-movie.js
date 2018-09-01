console.log('loading js');
function createReimb(event) {
  event.preventDefault();

  const reimbAmount = document.getElementById('input-amount').value;
  const reimbDescription = document.getElementById('input-description').value;
  let reimbTypeId = document.getElementById('sel1').value;
  switch (reimbTypeId) {
      case 'Lodging':
        reimbTypeId = 1;
        break;
      case 'Travel':
        reimbTypeId = 2;
        break;
      case 'Food':
        reimbTypeId = 3;
        break;
      case 'Other':
        reimbTypeId = 4;
        break;
  }
  // if (reimbTypeId === 'Lodging') {
  //   reimbTypeId = 1;
  // }
  // else if (reimbTypeId === 'Travel') {
  //   reimbTypeId = 2;
  // }
  // else if (reimbTypeId === 'Food') {
  //   reimbTypeId = 3;
  // }
  // else {
  //   reimbTypeId = 4;
  // }

  const reimb = {
    reimbAmount,
    reimbDescription,
    reimbTypeId
  }
  
  fetch('http://localhost:9001/reimbursements', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reimb)
  })
  .then(resp => resp.json())
  .then(resp => {
    window.location = 'http://localhost:9001/home/home.html';
  })
  .catch(err => {
    console.log(err);
  });
}