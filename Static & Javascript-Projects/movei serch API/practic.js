function getpassingstest(results) {
  console.log(results);
  return results.filter((results) => results.grade > 10);
}
const data = [
  { id: 1, grade: 10 },
  { id: 2, grade: 4 },
  { id: 3, grade: 18 },
];
