function Robot() {
  this.work = function () {
    console.log('I am Robot - I just work')
  };
}

function CoffeeRobot() {
  Robot.call(this);
  this.work = function () {
    console.log("I am CoffeeRobot - I'm making coffee")
  };
}

function RobotDancer() {
  Robot.call(this)
  this.work = function () {
    console.log("I am RobotDancer - I just dance")
  };
}

function RobotCooker() {
  Robot.call(this)
  this.work = function () {
    console.log("I am RobotCoocker - I just cook")
  };
}

// var robot = new Robot();
// var coffeeRobot = new CoffeeRobot();
// var robotDancer = new RobotDancer();
// var robotCoocker = new RobotCooker();
//
// robot.work();
// coffeeRobot.work();
// robotDancer.work();
// robotCoocker.work();

const array = [new Robot(), new CoffeeRobot(), new RobotDancer(), new RobotCooker()];

array.forEach((robot) => {
  robot.work();
})
