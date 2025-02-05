// A set that contains sets that do not contain themselves
const set = new Set();

const allSets = [set];

for (const nextSet of allSets) {
  // If nextSet does not contain itself, add it to the set
  if (!nextSet.has(nextSet)) {
    nextSet.add(nextSet);
  }
  // Check if the rule is violated
  if (nextSet.has(nextSet)) {
    throw new Error(
      `Contradiction detected: A set that does not contain itself must now contain itself.`
    );
  }
}