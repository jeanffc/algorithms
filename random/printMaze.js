const mazeMatrix = [
  ["X", "X", "X", "X", "X", "X", "X"],
  ["X", "*", "X", "X", "X", "E", "X"],
  ["X", "░", "X", "X", "X", "░", "X"],
  ["X", "░", "X", "X", "X", "░", "X"],
  ["X", "░", "X", "X", "X", "░", "X"],
  ["X", "░", "░", "░", "░", "░", "X"],
  ["X", "X", "X", "X", "X", "X", "X"],
];

const printMaze = (maze) => {
  let result = "";
  for (let row = 0; row < maze.length; row++) {
    for (let col = 0; col < maze[row].length; col++) {
      result += maze[row][col] + " ";
    }
    result += "\n";
  }
  return result;
};

console.log(printMaze(mazeMatrix));
