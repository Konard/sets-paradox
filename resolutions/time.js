// Create a new set
const mySet = new Set();

// Function to toggle whether a set contains itself.
// If mySet does not contain itself, add it.
// If it does contain itself, remove it.
function toggleSelfMembership(set) {
  if (!set.has(set)) {
    set.add(set);
    console.log("Set did not contain itself; added itself.");
  } else {
    set.delete(set);
    console.log("Set contained itself; removed itself.");
  }
}

// Simulate a transformation over time.
let i = 0;
const inverval = setInterval(() => {
  toggleSelfMembership(mySet);
  console.log(`Iteration ${i + 1}:`, mySet.has(mySet) ? "contains itself" : "does not contain itself");  
  i === Number.MAX_SAFE_INTEGER ? i = 0 : i++;
}, 1000);