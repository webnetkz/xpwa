let app = 'Name App';
    company = 'WebNet.kz';
    app_code = 'com.webnet.NAME_APP';
    email = 'dbqqbq@gmail.com';
    date = '2022-08-21';

document.title = app;
let app_names = document.querySelectorAll('.app_name');
let companies = document.querySelectorAll('.company');
let app_codes = document.querySelectorAll('.app_code');
let emails = document.querySelectorAll('.email');
let dates = document.querySelectorAll('.date');

for(let el of app_names){el.innerHTML = app;}
for(let el of companies){el.innerHTML = company;}
for(let el of app_codes){el.innerHTML = app_code;}
for(let el of dates){el.innerHTML = date;}
for(let el of emails){el.innerHTML = email;}