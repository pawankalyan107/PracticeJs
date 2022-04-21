//=========Asynchronous Javascript ====================
 const fn=()=> {
    console.log('Just a function')
  }
  
const  higherOrderFunction=(callback)=> {
    
    callback()
  }

// higherOrderFunction(fn)

//===========================================

const first=()=> {
    console.log(1)
  }
  
const second=()=> {
    setTimeout(() => {
      console.log(2)
    }, 0)
  }
  
const third=()=> {
    console.log(3)
  }

// first()
// second()
// third()f
// output: 1
// 3
// 2
//==================================================================


  function first() {
    console.log(1)
  }
  
  function second(callback) {
    setTimeout(() => {
      console.log(2)

      callback()
    }, 0)
  }
  
  function third() {
    console.log(3)
  }

// first()
// second(third)

// output: 1
// 2
// 3

//===========================================================================

   function f1() {
    console.log('f1');
   }
   
   function f2() { 
       console.log('f2');
   }
   
   function f3() { 
       console.log('f3');
   }
   
  function main() {
     console.log('main');
   
     setTimeout(f1, 5000);
     setTimeout(f3, 3000);
    
     new Promise((resolve, reject) =>
       resolve('I am a Promise, right after f1 and f3! Really?')
     ).then(resolve => console.log(resolve));

    //  const a = await "all"
    //  console.log(a)  

     new Promise((resolve, reject) =>
       resolve('I am a Promise after Promise!')
     ).then(resolve => console.log(resolve));
   
     f2();
    //  return a
   }

   main()
   
  //  const val=main();
  //  console.log(val)
  // //  console.log("olo")

// ===========================

function pyramid() {
    setTimeout(() => {
      console.log(1)
      setTimeout(() => {
        console.log(2)
        setTimeout(() => {
          console.log(3)
        }, 500)
      }, 2000)
    }, 1000)
  }

//   pyramid()

//====================Async/await, Promises=========================================

let promise1 = new Promise(function(resolve, reject) {
  resolve('Resolving a fake Promise.');
});

promise1.then(function(value) {
  console.log(value);
})

let promise2 = new Promise(function(resolve, reject) {
  reject(new Error('Rejecting a fake Promise to handle with .catch().'));
});

promise2.catch(function(value) {
  console.error(value);
});


let getUser = new Promise(function(resolve, reject) {
  const user = { 
          name: 'Pawan Klayan', 
          email: 'pawankalyan@email.com', 
          password: 'pawan.password' 
   };
   resolve(user);
});

getUser
.then(function(user) {
   console.log(`Got user ${user.name}`);
  
   return user.email;
})
.then(function(email) {
   console.log(`User email is ${email}`);
});



async function fetchUserDetails() {
   return {'name': 'Robin', 'likes': ['toys', 'pizzas']};
}

// fetchUserDetails().then((user) => console.log(user));

async function caller() {
   
    const user = await fetchUserDetails();
    console.log(user)
    // console.log('lol')
   }

//    caller();
   
//=========================================================

const validateUser = ({userId, password}) =>{
    return new Promise((resolve, reject)=>{
        if(userId && password){
            resolve('Authenticated');
        }else{
            reject({message: "Invalid userId or Password"})
        }
    })
}
const data = {
    userId: 'test',
    password: 'test'
};

// validateUser(data).then((res)=> console.log(res))
// .catch((rej)=> console.log(rej))



const app = async () => {
    const data = {
        userId: 'test',
        password: 'test'
    };

    try {
        console.log('Initializing...');
        const result = await validateUser(data);
        console.log(result);
    } catch (e) {
        console.error(e.message);
    }
}

// app();
