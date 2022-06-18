fetch(
  // Explain each parameter in comments below.
  // 10 responses - per page, open issues, sort by created, descending order
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
// return the JSON objects then console log the data