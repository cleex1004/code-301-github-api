// Let's make an AJAX call to the GitHub API and then do a simple render of the data into the DOM

$.get('github/user/repos')
.then(data => {
  console.log(data);
  data.forEach(repo => $('#results').append(`<p>${repo.name}</p>`));
},
  err => {
    console.error('Status Code: ', err.status);
  });

// $.get('/github/user/repos')
// .then(data => {
//   console.log(data);
//   data.forEach(repo => $('#results').append(`<p>${repo.name}</p>`));
// }, err => {
//     console.error('status code: ', err.status);
//   });

	// $.ajax({
	// 	//url:'https://api.github.com/user/repos?type=owner',
	// 	url:'/github/user/repos',
	// 	method: 'GET',
	// 	headers: {
	// 		Authorization:
	// 	}
	// 		//Authorization: githubToken}
	//     //Authorization: `token ${githubToken}`}
	// })
	// .then(data => {
	//   console.log(data);
	//   data.forEach(repo => $('#results').append(`<p>${repo.name}</p>`));
	// },
	//   err => {
	//     console.error(err);
	//   });
