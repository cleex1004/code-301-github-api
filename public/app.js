// Let's make an AJAX call to the GitHub API and then do a simple render of the data into the DOM

$.ajax({
	url:'https://api.github.com/user/repos?type=owner',
	method: 'GET',
	headers: {
		Authorization: process.env.GITHUB_TOKEN}
		//Authorization: githubToken}
    //Authorization: `token ${githubToken}`}
})
.then(data => {
  console.log(data);
  data.forEach(repo => $('#results').append(`<p>${repo.name}</p>`));
},
  err => {
    console.error(err);
  });
