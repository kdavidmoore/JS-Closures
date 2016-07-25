var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
};


//////////////////PROBLEM 1////////////////////

// Above you're given a function that returns another function which has a closure over the name variable.
// Invoke outer saving the return value into another variable called 'inner'.
var inner = outer();
inner();


//////////////////PROBLEM 2////////////////////

var callFriend = function(){
  var friend = 'Jake';
  var callF = function(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};


// Above you're given a callFriend function that returns another function.
// Create a makeCall function that when invoked logs  'Calling Jake at 435-215-9248' in your console.
var makeCall = function(){
  var callF = callFriend();
  console.log(callF('435-215-9248'));
};


//////////////////PROBLEM 3////////////////////

/*
  Write a function called makeCounter that makes the following code work properly.
*/

var makeCounter = function(){
  var count = 1;
  return function(){
    return count++;
  };
};

var count = makeCounter();
count(); // 1
count(); // 2
count(); // 3
count(); // 4


//////////////////PROBLEM 4////////////////////


// Inside the function called counterFactory
// return two functions that implement up/down counter.
// The first function is called inc, this function is responsible for incrementing the value one
// The second function is called dec, this function is responsible for decrementing the value by one
// You will need to use the module pattern to achieve this.

function counterFactory(value){
  return {
    inc: function(){
      return ++value;
    },
    dec: function(){
      return --value;
    }
  }
}

counter = counterFactory(10);


//////////////////PROBLEM 5////////////////////

// Inside the motivation function create another function called message that will return 'You're doing awesome, keep it up firstname lastname.'

  var motivation = function(firstname, lastname){
    var welcomeText = 'You\'re doing awesome, keep it up ';
    var message = function(){
      return welcomeText + firstname + " " + lastname + ".";
    };
    return message();
  }

  motivation('Billy', 'Bob'); // You're doing awesome, keep it up Billy Bob.


//////////////////PROBLEM 6////////////////////

// Inside the return create a publicMethod property that is a function that invokes privateMethod. After you create the privateMethod
// invoke it by calling module.publicMethod() outside the module scope.

  var module = (function() {
    var person = {
      name: "phillip",
      age: 29,
      location: 'Utah'
    };

    var privateMethod = function(){
      return "Hi, I'm " + person.name + ", age " + person.age + " from " + person.location;
    };

    return {
      publicMethod: function(){
        return privateMethod();
      }
    };

  })();

module.publicMethod();


//////////////////PROBLEM 7////////////////////
// Here we have a for loop that will iterate as long as i is less than or equal to 5. What we need to do is console.log(i)
// So that it logs ( 0 then 1 then 2 then 3, etc). Run this code in your console to see what the output is.

function timeOutCounter(){
  for (let i = 0; i <= 5; i++){
    setTimeout(function(){
      console.log(i);
    }, i * 1000)
  }
}

timeOutCounter();


//////////////////PROBLEM 8////////////////////

var funcArray = [];
funcArray.push(function(){ return 0; });
funcArray.push(function(){ return 1; });
funcArray.push(function(){ return 2; });
funcArray.push(function(){ return 3; });
funcArray.push(function(){ return 4; });
funcArray.push(function(){ return 5; });

/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/
