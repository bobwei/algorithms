/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {Robot} robot
 * @return {void}
 */

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

var cleanRoom = function(robot, p = [0, 0], dir = 0, visited = new Set()) {
  if (visited.has(encode(p))) {
    return;
  }
  visited.add(encode(p));
  robot.clean();
  const [x, y] = p;
  for (let k = 0; k < dirs.length; k++) {
    const i = x + dirs[dir][0];
    const j = y + dirs[dir][1];
    if (robot.move()) {
      cleanRoom(robot, [i, j], dir, visited);
      backtrack(robot);
    }
    dir = (dir + 1) % 4;
    robot.turnRight();
  }
};

function encode(p) {
  return p + '';
}

function backtrack(robot) {
  robot.turnLeft();
  robot.turnLeft();
  robot.move();
  robot.turnRight();
  robot.turnRight();
}
