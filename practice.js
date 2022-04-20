//=========Asynchronous Javascript ====================
function fn() {
    console.log('Just a function')
  }
  
function higherOrderFunction(callback) {
    
    callback()
  }

// higherOrderFunction(fn)

//===========================================

function first() {
    console.log(1)
  }
  
function second() {
    setTimeout(() => {
      console.log(2)
    }, 0)
  }
  
function third() {
    console.log(3)
  }

// first()
// second()
// third()

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
   
  async function main() {
     console.log('main');
   
     setTimeout(f1, 5000);
     setTimeout(f3, 3000);
    
     new Promise((resolve, reject) =>
       resolve('I am a Promise, right after f1 and f3! Really?')
     ).then(resolve => console.log(resolve));

     const lol = await "lol"
    //  console.log(lol)  

     new Promise((resolve, reject) =>
       resolve('I am a Promise after Promise!')
     ).then(resolve => console.log(resolve));
   
     f2();
     return lol
   }
   
   const vaa=main();
   console.log(vaa)
   console.log("olo")

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

//=================================================








//====================Async/await, Promises=========================================

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
