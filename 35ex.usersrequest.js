// https://jsonplaceholder.typicode.com/users
/*
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
*/
const xhr = new XMLHttpRequest();
let response = null;

const xhrUtil = {
    init: (httpMethod, url, payload) => {
        if (httpMethod.toUpperCase() == 'GET') {
            url = url + (payload ? payload : ''); 
        }
        xhr.open(httpMethod, url);
        if (httpMethod.toUpperCase()=='POST' ||
            httpMethod.toUpperCase()=='PUT' ||
            httpMethod.toUpperCase()=='PATCH'
       ) {
        xhr.setRequestHeader('content-type', 'application/json');
        }
        xhr.send(payload);
    }
};

xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) return false;
    if (xhr.status == 200 || xhr.status == 201) {
        response = xhr.response;
    } else {
        console.error('에러발생!', xhr.status, xhr.statusText);
    }
}

// const getAllUsers = document.getElementById('getAllUsers');
document.querySelector('#getAllUsers').addEventListener('click', () => {
    xhrUtil.init('GET', 'https://jsonplaceholder.typicode.com/users');

    const arr = JSON.parse(response);
    const tbody = document.querySelector('tbody');

    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${obj.id}</td><td>${obj.name}</td>
        <td>${obj.username}</td><td>${obj.email}</td>
        <td>${obj.address}</td><td>${phone}</td>
        <td>${obj.website}</td><td>${obj.company}</td>
    `;



    // const td = document.createElement('td');
    // td.appendChild(response);
    // tbody.appendChild(td);
    // document.appendChild(tbody);
});

document.querySelector('#getUser').addEventListener('click', e => {
    xhrUtil.init('GET', 'https://jsonplaceholder.typicode.com/users', 
        '?id='+document.querySelector('#userId').value);
    console.log(response);
});



