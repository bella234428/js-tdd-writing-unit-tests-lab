// Your code here
export function isPalindrome(word) {
  // Validate input type
  if (typeof word !== "string" || !/^[A-Za-z]+$/.test(word)) {
    throw new Error("Invalid input");
  }

  if (word.length === 0) return false;

  const normalized = word.toLowerCase();
  const reversed = normalized.split("").reverse().join("");

  return normalized === reversed;
}
