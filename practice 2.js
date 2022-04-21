async function fetchData() {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	console.log(response);
  }

// fetchData()



const data = fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
	if (response.ok) {
		return response.json();
	}
	return Promise.reject(response);
})


// data.then(function (data) {
// 	console.log(data);
// }).catch(function (error) {
// 	console.log(error);
// })

//============================================================

async function fetchJSON() {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data = await response.json();
	console.log(data)
	return data;
  }
//   console.log(fetchJSON())

//================================================================

async function fetchTwice() {
	const [data1, data2] = await Promise.all([
	  fetch('https://jsonplaceholder.typicode.com/posts'),
	  fetch('https://api.github.com/users')
	]);
	const first = await data1.json();
	const second = await data2.json();
	return [first, second];
  }
//   fetchTwice().then(([res1, res2]) => {
// 	console.log(res1);    
// 	console.log(res2); 
//   }).catch(error => {
// 	console.log(error)
//   });




 
