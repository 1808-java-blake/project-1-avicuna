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

function addMovieToTable(movie) {
  const tbody = document.getElementById('movie-table-body');
  tbody.innerHTML += `
  <tr>
    <th scope="row">${movie.title}</th>
    <td>${movie.numBlades}</td>
    <td>${movie.year}</td>
  </tr>
  `
}

fetch('http://localhost:9001/movies')
  .then(res => res.json())
  .then(res => {
    res.forEach(movie => {
      addMovieToTable(movie);
    })
  })
  .catch(err => {
    console.log(err);
  })