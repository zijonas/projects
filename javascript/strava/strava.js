let url = 'http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=false';

let image = fetch(url, {mode : 'cors'})
  .then(resp => {
    console.log(resp);
    return resp.json();
  })
  .then(json => {
    console.log(json);
  })
  .catch(err => console.error(err));

// loadJSON(url, doThat);
//
// function doThat(data) {
//   console.log(data);
// }

console.log('TEST');
