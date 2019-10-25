/**
 * Controls the base of the movo
 */
createBaseButtons = function () {
    // Get buttons
    var base_forward = document.getElementById("base_forward");
    var base_backward = document.getElementById("base_backward");
    var base_right = document.getElementById("base_right");
    var base_left = document.getElementById("base_left");
    var base_rot_left = document.getElementById("base_rot_left");
    var base_rot_right = document.getElementById("base_rot_right");

    // Interval control
    var move_interval;

    // Linear and angular movement
    var linear = { x: 0, y: 0, z: 0 };
    var angular = { x: 0, y: 0, z: 0 };

    // Forward movement
    base_forward.onmousedown = function () {
        move_interval = setInterval(function () {
            //console.log("Forward");
            clearValues(linear, angular);
            linear.x = 1;
            move(linear, angular);
        }, 500);
    }

    base_forward.onmouseup = function () {
        stop();
    }
    base_forward.onmouseleave = function () {
        stop();
    }

    // Backward movement
    base_backward.onmousedown = function () {
        move_interval = setInterval(function () {
            //console.log("Backward");
            clearValues(linear, angular);
            linear.x = -1;
            move(linear, angular);
        }, 500);
    }

    base_backward.onmouseup = function () {
        stop();
    }
    base_backward.onmouseleave = function () {
        stop();
    }

    // Left movement
    base_left.onmousedown = function () {
        move_interval = setInterval(function () {
            //console.log("Left");
            clearValues(linear, angular);
            linear.y = 1;
            move(linear, angular);
        }, 500);
    }

    base_left.onmouseup = function () {
        stop();
    }
    base_left.onmouseleave = function () {
        stop();
    }

    // Right movement
    base_right.onmousedown = function () {
        move_interval = setInterval(function () {
            //console.log("Right");
            clearValues(linear, angular);
            linear.y = -1;
            move(linear, angular);
        }, 500);
    }

    base_right.onmouseup = function () {
        stop();
    }
    base_right.onmouseleave = function () {
        stop();
    }

    // Rotate left
    base_rot_left.onmousedown = function () {
        move_interval = setInterval(function () {
            //console.log("Rot_Left");
            clearValues(linear, angular);
            angular.z = 1;
            move(linear, angular);
        }, 500);
    }

    base_rot_left.onmouseup = function () {
        stop();
    }
    base_rot_left.onmouseleave = function () {
        stop();
    }

    // Rotate right
    base_rot_right.onmousedown = function () {
        move_interval = setInterval(function () {
            //console.log("Rot_Left");
            clearValues(linear, angular);
            angular.z = -1;
            move(linear, angular);
        }, 500);
    }

    base_rot_right.onmouseup = function () {
        stop();
    }
    base_rot_right.onmouseleave = function () {
        stop();
    }

    function stop() {
        //console.log("Stop");
        clearInterval(move_interval);
    }
}

