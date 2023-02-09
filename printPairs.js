function printPairs(nums, options = {}) {
  const { includeDuplicates = true, includeReversed = true } = options;
  
  const numCounts = new Map();
  for (const num of nums) {
    const existingCount = numCounts.get(num) ?? 0;
    numCounts.set(num, existingCount + 1);
  }
  
  const answer = [];

  for (const num of numCounts.keys()) {
    if (num > 5 && !includeReversed) {
        continue;
    }
    const numCount = numCounts.get(num);
    const oppositeNum = 10 - num;
    if (!numCounts.has(oppositeNum)) {
        continue;
    }
    const oppositeNumCount = num == 5 ? numCounts.get(oppositeNum) - 1 : numCounts.get(oppositeNum);
    if (oppositeNumCount < 1) {
        continue;
    }
    if (includeDuplicates) {
        for (let i=0; i<numCount * oppositeNumCount; i++) {
            answer.push([num, oppositeNum]);
        }
    } else {
        answer.push([num, oppositeNum]);
    } 
  }
  return answer;
}
