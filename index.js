const jsonfile = require('jsonfile');
const file = 'data.json';

jsonfile.readFile(file, (err, obj) => {

  //console.log(obj.hello);
  //obj.hello.push("hghghg")
  //obj.name = "const";
  obj["scott"] = "cheekean";

  jsonfile.writeFile(file, obj, (err) => {
    console.log(err)
  });
});
// var thing = {
//   "monkey" : "banana"
// }
// jsonfile.writeFile(file, thing, (err) => {
//   console.log(err)
// });
// var cats = require('cat-ascii-faces')
// var vgn = require('random-game-name');
//
// console.log(vgn.random());

// const MY_VAL = 7;
// let newVal = MY_VAL;
// console.log(newVal + 10);

// const MY_FAV = 7;
//
// if (MY_FAV === 7) {
//     // this is fine and creates a block scoped MY_FAV variable
//     // (works equally well with let to declare a block scoped non const variable)
//     let MY_FAV = 20;
//
//     // MY_FAV is now 20
//
//     // this gets hoisted into the global context and throws an error
//     console.log(MY_FAV);
// }

// const MY_OBJ = [
//   {
//     name: "Leon",
//     age: 30
//   },
//   {
//     name: "Vinny",
//     age: 25
//   }
// ]

// for (let i = 1; i <= 5; i++){
//   setTimeout(function () {
//     console.log(i);
//   }, 1000)
// }
