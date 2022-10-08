// input
// start = maze[0][0]
// end = maze[N-1][N-1]
let maze = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [0, 1, 0, 0],
  [1, 1, 1, 1],
];

// output
// 1  0  0  0
// 1  1  0  0
// 0  1  0  0
// 0  1  1  1

// base case
// hit out matrix return
// hit wall return
// hit previous return
// ckeck destination mark position as 1

// final case
// ckeck final destination return

// print maze
const printMaze = (maze) => {
  const N = maze.length;
  let result = "";
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      result += maze[row][col] + " ";
    }
    result += "\n";
  }
  console.log(result);
};

// walk
const canWalk = (maze, x, y) => {
  // hit out matrix return
  if (x < 0 || y < 0 || x >= maze.length || y >= maze.length) {
    return false;
  }
  // hit wall return
  if (maze[x][y] === 0) {
    return false;
  }
  // ckeck destination mark position as 1
  if (maze[x][y] === 1) {
    return true;
  }
};

// solve maze until
const solveMazeUntil = (maze, currX, currY, endX, endY, solution) => {
  // ckeck final destination
  if (currX === endX && currY === endY) {
    solution[currX][currY] = 1;
    return true;
  }

  // check prev destination
  if (solution[currX][currY] === 1) {
    return false;
  }

  //
  if (canWalk(maze, currX, currY)) {
    solution[currX][currY] = 1;

    // top
    if (canWalk(maze, currX, currY - 1)) {
      if (solveMazeUntil(maze, currX, currY - 1, endX, endY, solution))
        return true;
    }

    // right
    if (canWalk(maze, currX, currY + 1)) {
      if (solveMazeUntil(maze, currX, currY + 1, endX, endY, solution))
        return true;
    }

    // bottom
    if (canWalk(maze, currX + 1, currY)) {
      if (solveMazeUntil(maze, currX + 1, currY, endX, endY, solution))
        return true;
    }

    // left
    if (canWalk(maze, currX - 1, currY)) {
      if (solveMazeUntil(maze, currX - 1, currY, endX, endY, solution))
        return true;
    }
  }

  // if it doesnt return true than unmark it
  solution[currX][currY] = 0;
  return false;
};

// solve maze
const solveMaze = (maze) => {
  const N = maze.length;
  let solution = [];
  let currX = 0;
  let currY = 0;
  let endX = N - 1;
  let endY = N - 1;

  for (let row = 0; row < N; row++) {
    solution.push([]);
    for (let col = 0; col < N; col++) {
      solution[row].push(0);
    }
  }

  if (solveMazeUntil(maze, currX, currY, endX, endY, solution)) {
    console.log("solved \n");
    printMaze(solution);
  } else {
    console.log("not exist \n");
    printMaze(solution);
  }
};

solveMaze(maze);
