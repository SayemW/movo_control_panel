// Min and Max values of the height of movo
const MIN_HEIGHT = 0.0;
const MAX_HEIGHT = 0.46;

const POSITION_CHANGE = 0.01;

var torso_position = 0.0;

// Torso Control Message
movo_linear_actuator_cmd_publisher = new ROSLIB.Topic({
    ros: ros,
    name: "movo/linear_actuator_cmd",
    messageType: "movo_msgs/LinearActuatorCmd"
});

moveTorso = function (position_update) {
    //console.log("Moving Function");
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

    // Interval repeat frequence
    var interval_frequencey = 60;

    // Up movement
    height_up.onmousedown = function () {
        move_interval = setInterval(function () {
            console.log("Up");
            moveTorso(POSITION_CHANGE);
        }, interval_frequencey);
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
            console.log("Backward");
            moveTorso(-POSITION_CHANGE);
        }, interval_frequencey);
    }

    height_down.onmouseup = function () {
        stop(move_interval);
    }
    height_down.onmouseleave = function () {
        stop(move_interval);
    }
}