// function getUser() { // 로딩 시 사용자 가져오는 함수
//   var xhr = new XMLHttpRequest();
//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       var users = JSON.parse(xhr.responseText);
//       var list = document.getElementById('list');
//       list.innerHTML = '';
//       Object.keys(users).map(function (key) {
//         var userDiv = document.createElement('div');
//         var span = document.createElement('span');
//         span.textContent = users[key];
//         var edit = document.createElement('button');
//         edit.textContent = '수정';
//         edit.addEventListener('click', function () { // 수정 버튼 클릭
//           var name = prompt('바꿀 이름을 입력하세요');
//           if (!name) {
//             return alert('이름을 반드시 입력하셔야 합니다');
//           }
//           var xhr = new XMLHttpRequest();
//           xhr.onload = function () {
//             if (xhr.status === 200) {
//               console.log(xhr.responseText);
//               getUser();
//             } else {
//               console.error(xhr.responseText);
//             }
//           };
//           xhr.open('PUT', '/users/' + key);
//           xhr.setRequestHeader('Content-Type', 'application/json');
//           xhr.send(JSON.stringify({ name: name }));
//         });
//         var remove = document.createElement('button');
//         remove.textContent = '삭제';
//         remove.addEventListener('click', function () { // 삭제 버튼 클릭
//           var xhr = new XMLHttpRequest();
//           xhr.onload = function () {
//             if (xhr.status === 200) {
//               console.log(xhr.responseText);
//               getUser();
//             } else {
//               console.error(xhr.responseText);
//             }
//           };
//           xhr.open('DELETE', '/users/' + key);
//           xhr.send();
//         });
//         userDiv.appendChild(span);
//         userDiv.appendChild(edit);
//         userDiv.appendChild(remove);
//         list.appendChild(userDiv);
//       });
//     } else {
//       console.error(xhr.responseText);
//     }
//   };
//   xhr.open('GET', '/users');
//   xhr.send();
// }
// window.onload = getUser; // 로딩 시 getUser 호출
// // 폼 제출
// document.getElementById('form').addEventListener('submit', function (e) {
//   e.preventDefault();
//   var name = e.target.username.value;
//   if (!name) {
//     return alert('이름을 입력하세요');
//   }
//   var xhr = new XMLHttpRequest();
//   xhr.onload = function () {
//     if (xhr.status === 201) {
//       console.log(xhr.responseText);
//       getUser();
//     } else {
//       console.error(xhr.responseText);
//     }
//   };
//   xhr.open('POST', '/users');
//   xhr.setRequestHeader('Content-Type', 'application/json');
//   xhr.send(JSON.stringify({ name: name }));
//   e.target.username.value = '';
// });


//Promise
function getUsers() { // 로딩시 사용자 가져오는 함수
  //fetch: ajax기능을 위한 최시 라이브러리
  //fetch('url주소', 옵션객체)
  fetch('/users', {
      method:'GET'
    }) //hhtp://localhost:8085/users 호출
    .then((response) => { //서버로부터의 users 객체를 포함한 프로미스
      if (response.status == '200') {
        return response.json();
      }
    })
    .then((resJson) => {
      showUsers(resJson, document.querySelector('#list'));
    })
    .catch((error) => {
      console.error('fetch 호출에서 에러발생: ' + error.message);

    });
}

function showUsers(users, location) {
  //users: resJson
  //location: document.querySelector('#list')
  location.innerHTML = '';
  Object.keys(users).map((key) => {
    var userDiv = document.createElement('div');
    //<div></div>
    var span = document.createElement('span');
    //<span></span>
    span.textContent = users[key]; //연관배열
    //<span>users[key]의 값</span>

    var edit = createModifyBtn(key);
    //<div><span>users[key]의 값</span></div><button>수정</button></div>

    var remove = createDelBtn(key);
    //<div><span>users[key]의 값</span></div><button>수정</button></div>

    userDiv.appendChild(span);
    //<div><span>users[key]의 값</span></div>

    userDiv.appendChild(edit);
    //<div><span>users[key]의 값</span></div><button>수정</button></div>

    userDiv.appendChild(remove);
    //<div><span>users[key]의 값</span></div><button>수정</button></div>
    //<button>삭제</button>
    location.appendChild(userDiv);
  });
}

function createModifyBtn(key) {
  var edit = document.createElement('button');
  //  <button></button>
  edit.textContent = '수정';
  
  //<buton>수정</button>
  edit.addEventListener('click', () => {
    var name = prompt('바꿀 이름을 입력하세요');
    if (!name) {
      return alert('이름을 반드시 입력하셔야 합니다.');
    }
    fetch('/users/' + key, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify({
        name //name:name과 같음
      })
    }).then((response) => {
      if (response.status == '200') {
        return response.json();
      }
    }).then((resJson) => {
      console.log(resJson);
      showUsers(resJson, document.querySelector('#list'));
    }).catch((error) => {
      console.error('fetch호출에서 에러발생: ' + error.message);
    });
  });
  return edit;
}

function createDelBtn(key) {
  var remove = document.createElement('button');
  remove.textContent = '삭제';
  remove.addEventListener('click', () => {
    fetch('/users/' + key, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "DELETE",
    }).then((response) => {
      if (response.status == '200') {
        return response.json();
      }
    }).then((resJson) => {
      // console.log(resJson);
      showUsers(resJson, document.querySelector('#list'));
    }).catch((error) => {
      console.error('fetch호출에서 에러발생: ' + error.message);
    });
  });
  return remove;
}

window.onload = getUsers; // 로딩 시 getUsers 호출
//window.onload = 자바의 메인역할
//폼 제출
document.querySelector('#form').addEventListener('submit', (e) => {
  //e는 form태그에 발생한 이벤트 객체
  e.preventDefault(); //막는다 default를 막는다!!
  //default면 클릭에 대한 이벤트를 막는다.
  var name = e.target.username.value;
  //e.target.username는 e.target 객체(form객체)의 input태그 객체
  if (!name) {
    return alert('이름을 입력하세요');
  }
  fetch('/users', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
      name: name
    })
  }).then((response) => {
    if (response.status == '201') {
      return response.json();
    }
  }).then((result) => {
    showUsers(result, document.querySelector('#list'));
  }).catch((error) => {
    console.error('fetch 호출에서 에러발생: ' + error.message);
  });
  e.target.username.value = ''; //더블클릭 막기 이중생성 막기
});
