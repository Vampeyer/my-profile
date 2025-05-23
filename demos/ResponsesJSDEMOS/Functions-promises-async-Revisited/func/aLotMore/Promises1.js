// new Promise((resolveOuter0) => {
//   resolveOuter0()
//   console.log("resolved");
// });
// This promise is already resolved at the time when
//  it's created (because the resolveOuter is called synchronously),
//   but it is resolved with another promise, and therefore won't be
//    fulfilled until 1 second later, when the inner promise fulfills. 
//    In practice, the "resolution" is often done behind 
// the scenes and not observable, and only its fulfillment or rejection are.


new Promise((resolveOuter) => {
    resolveOuter(   
      new Promise((resolveInner) => {
        
        setTimeout(resolveInner, 3000);
        console.log("resolved")
      }),)
      

  });