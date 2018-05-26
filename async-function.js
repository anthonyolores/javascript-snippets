//waits the function to finish asynchronously
const rootAwait = async (isTask1, isTask2) => {
  
  const task1 = new Promise((resolve, reject) => {
    //...callback definition
    return isTask1? resolve("task 1 done") : reject("task 1 failed");
  });
  const task2 = new Promise((resolve, reject) => {
    //...callback definition
    return isTask2? resolve("task 1 done") : reject("task 2 failed");
  });  
  
  try{
    let task1Response = await task1;
    console.log(task1Response); 
  } s
  catch(e){
    console.log(e); 
  }
  
  try{
    let task2Resonse = await task2; 
    console.log(task2Response); 
  } 
  catch(e){
    console.log(e); 
  }
   
  return "all tasks are executed";
};
 
rootAwait(true, false).then((msg) => {
  console.log(`Hey ${msg}`);
}); 