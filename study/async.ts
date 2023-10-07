async function exampleAsyncFunction() {
  console.log("Start");

  // This asynchronous operation does not block the main thread
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("After 1 second");

  // Continue with other asynchronous operations
}

function syncFunction() {
  console.log("Sync function running");
}

console.log("Before async function");

// Call the async function
exampleAsyncFunction();

// While waiting for the async function, other synchronous tasks can be processed
syncFunction();

console.log("After calling async function and sync function");
