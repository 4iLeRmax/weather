// const user = {
//   name: 'Max',
//   age: 25,
//   profession: 'IT',
//   slary: 10000,
// }

// // user.passport = 'vndifvdfv';
// Object.defineProperty(user, 'passport',{
//   value: 'fmdobndobn',
//   enumerable: true,
// });

// console.log(user); 

// //keys
// let keys = Object.keys(user);
// console.log(keys);

// //values
// let values = Object.values(user);
// console.log(values);

// //entries
// let entries = Object.entries(user);
// console.log(entries);

// entries.map(([index, item])=> console.log(index, item));
let firstInput = document.querySelector('.primary.first');
let secondInput = document.querySelector('.primary.second');
// console.log(FI);

let Btn = document.querySelector('.button-primary');
// https://api.openweathermap.org/data/2.5/weather?lat=45.55&lon=29.33&appid=835c8eccfb69e5bae6365e4980aeccac
Btn.onclick = ()=>{
  if(firstInput.value==''&&secondInput.value==''){
    firstInput.classList.add('error');
    secondInput.classList.add('error');
  }
  else{
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${firstInput.value}&lon=${secondInput.value}&appid=835c8eccfb69e5bae6365e4980aeccac`)
      .then(function (resp) {return resp.json()}) // convert data to JSON
      .then(function (data) {
        // console.log(data);
    
    
    
    
        document.querySelector('.packeg-name').innerHTML = data.name;
        document.querySelector('.price').innerHTML = Math.round((data.main.temp)-273.15) + '&deg;';
        document.querySelector('.disclaimer').innerHTML = data.weather[0]['description'];
        document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    
        
    
        let sunset = (data.sys).sunset;
        function timeConverter(item){
          var a = new Date(item * 1000);
          // console.log(a);
          var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
          var year = a.getFullYear();
          var month = months[a.getMonth()];
          var date = a.getDate();
          var hour = a.getHours();
          var min = a.getMinutes();
          var sec = a.getSeconds();
          var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
          return time;
        }
        document.querySelector('.sunset').innerHTML= 'Sunset: ' + timeConverter(sunset);
        
    
    
    
      })
      .catch(function(){
      });
  }
  firstInput.oninput = ()=>{
    firstInput.classList.remove('error');
  }
  secondInput.oninput = ()=>{
    secondInput.classList.remove('error');
  }



}

// fetch('https://api.openweathermap.org/data/2.5/weather?lat=45.55&lon=29.33&appid=835c8eccfb69e5bae6365e4980aeccac')
//   .then(function (resp) {return resp.json()}) // convert data to JSON
//   .then(function (data) {
//     // console.log(data);




//     document.querySelector('.packeg-name').innerHTML = data.name;
//     document.querySelector('.price').innerHTML = Math.round((data.main.temp)-273.15) + '&deg;';
//     document.querySelector('.disclaimer').innerHTML = data.weather[0]['description'];
//     document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;

    

//     let sunset = (data.sys).sunset;
//     function timeConverter(UNIX_timestamp){
//       var a = new Date(UNIX_timestamp * 1000);
//       // console.log(a);
//       var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
//       var year = a.getFullYear();
//       var month = months[a.getMonth()];
//       var date = a.getDate();
//       var hour = a.getHours();
//       var min = a.getMinutes();
//       var sec = a.getSeconds();
//       var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
//       return time;
//     }
//     document.querySelector('.sunset').innerHTML = document.querySelector('.sunset').innerText.toUpperCase() + ': ' + timeConverter(sunset);
    



//   })
//   .catch(function(){
//   });