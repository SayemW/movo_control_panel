// Min and Max values of the height of movo
const MIN_HEIGHT = 0.0;
const MAX_HEIGHT = 0.46;

const POSITION_CHANGE = 0.01;

var torso_position = 0.0;

/**
 * Publishes messages to movo/linear_actuator/cmd ROS topic
 */
moveTorso = function (position_update) {
    // Update position
    torso_position += position_update;
    // Clamp position
    torso_position = Math.max(MIN_HEIGHT, Math.min(torso_position, MAX_HEIGHT));
    var height_position = new ROSLIB.Message({
        desired_position_m: torso_position
    });
    movo_linear_actuator_cmd_publisher.publish(height_position);
};

// Buttons for torso control
createTorsoButtons = function () {
    var height_up = document.getElementById("height_up");
    var height_down = document.getElementById("height_down");

    // Interval control
    var move_interval;

    // Interval repeat wait period
    // Change value to alter number of times a message is 
    // published when button is held down
    var interval_wait = 80;

    // Up movement
    height_up.onmousedown = function () {
        move_interval = setInterval(function () {
            console.log("Up");
            moveTorso(POSITION_CHANGE);
        }, interval_wait);
    }

    height_up.onmouseup = function () {
        stop(move_interval);
    }
    height_up.onmouseleave = function () {
        stop(move_interval);
    }

    // Down movement
    height_down.onmousedown = function () {
        move_interval = setInterval(function () {
            console.log("Down");
            moveTorso(-POSITION_CHANGE);
        }, interval_wait);
    }

    height_down.onmouseup = function () {
        stop(move_interval);
    }
    height_down.onmouseleave = function () {
        stop(move_interval);
    }
}