/**
  * Clears values
  */
clearValues = function (linear, angular) {
    linear.x = linear.y = linear.z = 0;
    angular.x = angular.y = angular.z = 0;
}

/**
 * Stops buttons from executing
 */
function stop(move_interval) {
  console.log("Stop");
  clearInterval(move_interval);
}