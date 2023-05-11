function setRequest(url, data) {
  
  var boundary = String(Math.random()).slice(2);
  var boundaryMiddle = '--' + boundary + '\r\n';
  var boundaryLast = '--' + boundary + '--\r\n'
  
  var body = ['\r\n'];
  for (var key in data) {
    // добавление поля
    body.push('Content-Disposition: form-data; name="' + key + '"\r\n\r\n' + data[key] + '\r\n');
  }
  
  body = body.join(boundaryMiddle) + boundaryLast;
  
  // Тело запроса готово, отправляем
  
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  
  xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);
  
  xhr.onreadystatechange = function() {
    if (this.readyState != 4) return;
  
    console.warn( this.responseText );
  }
  
  xhr.send(body);
}

function fsetRequest(url, data, f, settings='text') {
  
  var boundary = String(Math.random()).slice(2);
  var boundaryMiddle = '--' + boundary + '\r\n';
  var boundaryLast = '--' + boundary + '--\r\n'
  
  var body = ['\r\n'];
  for (var key in data) {
    // добавление поля
    body.push('Content-Disposition: form-data; name="' + key + '"\r\n\r\n' + data[key] + '\r\n');
  }
  
  body = body.join(boundaryMiddle) + boundaryLast;
  
  // Тело запроса готово, отправляем
  
  var xhr = new XMLHttpRequest();
  if(settings == "json") {
    xhr.responseType = 'json';
  }
  xhr.open('POST', url, true);
  
  xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);
  
  xhr.onreadystatechange = function() {
    if (this.readyState != 4) return;
      if(settings == "text") {
        f( this.responseText );
      } else {
        f( this.response );
      }

  }
  
  xhr.send(body);
}

function getRequest(url) {
  
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  
  
  xhr.onreadystatechange = function() {
    if (this.readyState != 4) return;
  
    return this.responseText;
  }
  
  xhr.send();
}


function setData(url) {
  var ajx = new XMLHttpRequest();
  ajx.onload = () => {
    console.log(ajx.responseText);
  };
  ajx.open("GET", url, true);
  ajx.send();
}

async function getData(db, url) {
  var ajx = new XMLHttpRequest();
  ajx.onload = () => {
    localStorage.setItem(db, ajx.responseText);
  };
  ajx.open("GET", url, true);
  ajx.send();
}
