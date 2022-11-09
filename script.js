let btntext = document.querySelector("#btntext");

btntext.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      response.json()
        .then((gelen_data) => {
          let data = `<tr>
            <th scope="col">userId</th>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">body</th>
          </tr>`;
          for (let i = 0; i < gelen_data.length; i++) {
            data += `<tr>
                <th scope="row">${gelen_data[i].userId}</th>
                <td>${gelen_data[i].id}</td>
                <td>${gelen_data[i].title}</td>
                <td>${gelen_data[i].body}</td>
              </tr>`;
          }
          document.querySelector("table").innerHTML = data;
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});





let btncomments = document.querySelector("#btncomments");

btncomments.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
      response.json()
        .then((comment_data) => {
          let data = `<tr>
      <th scope="col">postId</th>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">body</th>
    </tr>`;
          for (i = 0; i < comment_data.length; i++) {
            data += `<tr>
          <th scope="row">${comment_data[i].postId}</th>
          <td>${comment_data[i].id}</td>
          <td>${comment_data[i].name}</td>
          <td>${comment_data[i].email}</td>
          <td>${comment_data[i].body}</td>
        </tr>`;
          }
          document.querySelector("table").innerHTML = data;
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});





let btnalbums = document.querySelector('#btnalbums')

btnalbums.addEventListener('click', ()=> {
  fetch('https://jsonplaceholder.typicode.com/albums')
  .then((response) => {
    response.json()
    .then((albums_data) => {
      let data = `<tr>
      <th scope="col">userId</th>
      <th scope="col">id</th>
      <th scope="col">title</th>
    </tr>
      `
      for(i = 0; i < albums_data.length; i++) {
        data += `    <tr>
        <th scope="row">${albums_data[i].userId}</th>
        <td>${albums_data[i].id}</td>
        <td>${albums_data[i].title}</td>
      </tr>`;
      }
      document.querySelector("table").innerHTML = data;
    })
    .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
});






let btnphotos = document.querySelector('#btnphotos')

btnphotos.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/photos')
  .then((response) => {
    response.json()
    .then((photos_data) => {
      let data = `<tr>
      <th scope="col">albumId</th>
      <th scope="col">id</th>
      <th scope="col">url</th>
      <th scope="col">thumbnailUrl</th>
    </tr>`
    for(i = 0; i < photos_data.length; i++) {
      data += `<tr>
      <th scope="row">${photos_data[i].albumId}</th>
      <td>${photos_data[i].id}</td>
      <td> <img src="${photos_data[i].url}" width = "150px"> </td>
      <td> <img src ="${photos_data[i].thumbnailUrl}" </td>
    </tr>`
    }
    document.querySelector("table").innerHTML = data;
    })
    .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
});






let btntodos = document.querySelector('#btntodos')

btntodos.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => {
    response.json()
    .then((todos_data) => {
      let data = `<tr>
      <th scope="col">userId</th>
      <th scope="col">id</th>
      <th scope="col">title</th>
      <th scope="col">completed</th>
    </tr>`
    for(i = 0; i < todos_data.length; i++) {
      data += `<tr>
      <th scope="row">${todos_data[i].userId}</th>
      <td>${todos_data[i].id}</td>
      <td>${todos_data[i].title}</td>
      <td>${todos_data[i].completed}</td>
    </tr>`
    }
    document.querySelector("table").innerHTML = data;
    })
    .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
});








let btnusers = document.querySelector('#btnusers')

btnusers.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    response.json()
    .then((users_data) => {
      let data = `<tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">username</th>
      <th scope="col">email</th>
      <th scope="col">address</th>
      <th scope="col">street</th>
      <th scope="col">suite</th>
      <th scope="col">city</th>
      <th scope="col">zipcode</th>
      <th scope="col">geo</th>
      <th scope="col">lat</th>
      <th scope="col">lng</th>
      <th scope="col">phone</th>
      <th scope="col">website</th>
      <th scope="col">company</th>
      <th scope="col">name</th>
      <th scope="col">catchPhrase</th>
      <th scope="col">bs</th>

    </tr>`
    for(i = 0; i < users_data.length; i++) {
      data += `<tr>
      <th scope="row">${users_data[i].id}</th>
      <td>${users_data[i].name}</td>
      <td>${users_data[i].username}</td>
      <td>${users_data[i].email}</td>
      <td>${users_data[i].address.street}</td>
      <td>${users_data[i].address.suite}</td>
      <td>${users_data[i].address.city}</td>
      <td>${users_data[i].address.zipcode}</td>
      <td>${users_data[i].address.geo.lat}</td>
      <td>${users_data[i].address.geo.lng}</td>
      <td>${users_data[i].phone}</td>
      <td>${users_data[i].website}</td>
      <td>${users_data[i].company.name}</td>
      <td>${users_data[i].company.catchPhrase}</td>
      <td>${users_data[i].company.bs}</td>
    </tr>`
    }
    document.querySelector("table").innerHTML = data;
    })
    .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
});
