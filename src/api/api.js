export default function fetchUserApi() {
	fetch('http://localhost:3000/api/candidates', {method: 'get'})
	.then(status)
	.then(json)
	.then(data =>{ 
		console.log(data);
		 return 	data; })
}

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function json(response) {
  return response.json()
}

function fetchPostsApi(reddit) {
    return fetch(`http://www.reddit.com/r/${reddit}.json` )
            .then(response => response.json() )
            .then(json => json.data.children.map(child => child.data) )
}