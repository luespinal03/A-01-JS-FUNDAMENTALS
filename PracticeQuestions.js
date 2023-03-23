
////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////


const x = 6

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.

function theseNums(num1, num2) {
  let total = num1 + num2 + x;

  return total
}

console.log('1.', theseNums(5, 5))

// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.

const florida = (num1, num2) => {

  total = num1 + num2 + x;
  return total
}

console.log('2)', florida(3, 3))

// 3. Write a function that returns another function. (use arrow functions please)

const runIt = (multiplier = 2) => {
  return (num) => {
    return num * multiplier
  };
};

console.log('3)', runIt(2)(3));

// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.


const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

// console.log(getFunction()(2))
console.log('4)', 'Answer, the interior function is pulling y from the global function therefore the value gets passed in', getFunction()(2))

// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

const couldThrowError = () => {

  if (Math.ceil(Math.random() * 2) < 2) {
    throw new Error("Error was thrown");
  }

  return '5) success'
}

const exteriorFunc = (callBackFunc) => {
  try {
    const result = callBackFunc();
    console.log(result);
  } catch (err) {
    console.log('5)', 'There is an error')
  }
}

exteriorFunc(couldThrowError)

////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////


const userData = [
  {
    id: '111',
    name: 'Peter',
    favorites: {
      food: ['burgers', 'pizza'],
      activites: ['basketball', "baseball"]
    },
  },
  {
    id: '222',
    name: 'John',
    favorites: {
      food: ['burgers', 'tacos'],
      activites: ['football', "golf"]
    },
  },
  {
    id: '333',
    name: 'Mary',
    favorites: {
      food: ['pizza', 'tacos', 'fried chicken'],
      activites: ['volleyball', "softball"]
    },
  }
];

// 6. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const returnedArr = userData.map((user) => {

  return {
    id: user.id,
    favoriteFoods: user.favorites.food.length
  }
})

console.log("6)", "\n", returnedArr)


// 7. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

reducedArr = userData.reduce((acc, cur) => {

  if (cur.favorites.food.includes("pizza")) {
    acc.push(cur.name)
  }
  return acc
}, [])

console.log("7)", reducedArr)

// 8. Show an an example of a switch statement being used

const nbaSuperstarNumber = 2

switch (nbaSuperstarNumber) {
  case 3:
    console.log("8)", "Anthony Davis");
    break;
  case 24:
    console.log("8)", "Kobe Bryant");
    break;
  case 30:
    console.log("8)", "Steph Curry");
    break;
  case 6:
    console.log("8)", "Lebron James");
  default:
    console.log("8)", "Clearly not a Superstar");
}


////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////


const userPersonalData = {
  name: 'peter',
  age: '56',
  birthday: 'jan 1st',
};
const userGameData = {
  score: 4546,
  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
};


// 9. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }

const combinedUser = {
  ...userPersonalData,
  ...userGameData,
}

console.log("9)", combinedUser)




// 10. Make a copy of your new user object but override the birthday to december 31st

const overriddenBirthday = {
  ...combinedUser,
  birthday: 'dec 31st',
}
console.log("10)", overriddenBirthday)

// 11. Use the spread operator to make a copy of the accomplishments array and store it in a new variable

const newAccomplishments = [...combinedUser.accomplishments]

console.log("11)", newAccomplishments)



//  12. Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food

var user = {
  name: 'pete',
  age: '32',
  favoriteThings: {
    food: ['pizza', 'tacos', 'burgers', 'italian'],
    movies: [],
  },
};

const {
  favoriteThings: { food },
} = user

console.log("12)", food)

// 13. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //

const [firstFood, secondFood] = food

console.log("13)", "firstFood:", firstFood, "secondFood:", secondFood)

// 14. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food. 
//    the food variable should have all the array items starting from the third one.
const data = ['peter', '34', 'apple', 'oranges', 'pizza', 'tacos'];

const [name, age, ...foods] = data

console.log("14)", name, age, foods)

// 15. use object destructuring to grab the following from the userInfo object: 
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing

const userInfo = {
  name: "Peter",
  favorites: {
    needs: {
      food: ["burger", "pizza", "tacos", "fried chicken", "sushi"],
    },
    wants: {
      things: ["cars", "jewelry"],
    },
  },
};

const { name: userName } = userInfo;

const { favorites: {
  needs: { food: favoriteFood },
},
} = userInfo

const { favorites: {
  wants: { things: favoriteThings }
} } = userInfo

const [favoriteThing, secondFavoriteThing] = favoriteThings

console.log("15)")
console.log(" a)", userName)
console.log(" b)", favoriteFood);
console.log(" c)", favoriteThing);
console.log(" d)", secondFavoriteThing);



var fetchData = () =>
  new Promise((resolve, reject) => {
    console.log("fetchingData from imaginary database");
    setTimeout(() => {
      try {

        if (Math.ceil(Math.random() * 2) < 2) {
          throw new Error("Error!");
        }
        resolve({ name: "john", age: 42 });
      } catch (error) {
        reject(error);
      }
    }, 5000);
  });

module.exports = fetchData;

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
    try {
      // fetchingData from imaginary database
      if ((Math.ceil(Math.random() * 2)) < 2) {
        throw new Error('Error!')
      }
      resolve({ name: 'john', age: 42 })
    } catch (error) {
      reject(error);
    }
  }, 5000);
});


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
fetchData()
  .then((data) => {
    console.log("Resolved value:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 17. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function fetchDataAndLog() {
  try {
    const data = await fetchData();
    console.log("Resolved value:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchDataAndLog();