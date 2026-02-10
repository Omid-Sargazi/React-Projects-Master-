export const users = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  name: `User ${i}`,
}));


export default function expensiveFilter(users, search) {
  console.log("Filtering users...");
  let result = [];

  for (let i = 0; i < users.length; i++) {
    // شبیه‌سازی فشار CPU
    for (let j = 0; j < 1000; j++) {}
    if (users[i].name.toLowerCase().includes(search.toLowerCase())) {
      result.push(users[i]);
    }
  }

  return result;
}
