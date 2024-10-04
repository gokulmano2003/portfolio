//  function doSomething() {
//      console.log(this);
//    }

//    doSomething()


// // var obj = {
// //     name:  "vivek",
// //     getName: function(){
// //     console.log(this.name);
// //   }
// // }

// // obj.getName();


function saySomething(message) {
    return this.name + " is " + message;
}
var person4 = { name: "John" };
saySomething.apply(person4, ["awesome"]);
