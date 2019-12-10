// Min and Max values of the height of movo
const MIN_TILT = -1.57;
const MAX_TILT = 1.57;

const POSITION_CHANGE_PAN = 0.01;
const POSITION_CHANGE_TILT = 0.01;

var pan_position = 0.0;
var tilt_position = 0.0;
var move_velocity = 0.87;

moveHead = function(pan, tilt) {
  //console.log("Moving Function");
  // Update position
  pan_position += pan;
  tilt_position += tilt;
  // Clamp position
  pan_position = Math.max(MIN_TILT, Math.min(pan_position, MAX_TILT));
  tilt_position = Math.max(MIN_TILT, Math.min(tilt_position, MAX_TILT));
  var height_position = new ROSLIB.Message({
    pan_cmd: {
      pos_rad: pan_position,
      vel_rps: move_velocity
    },
    tilt_cmd: {
      pos_rad: tilt_position,
      vel_rps: move_velocity
    }
  });
  movo_head_cmd_publisher.publish(height_position);
};

// Buttons for torso control
createHeadButtons = function() {
  var pan_left = document.getElementById("pan_left");
  var pan_right = document.getElementById("pan_right");
  var tilt_up = document.getElementById("tilt_up");
  var tilt_down = document.getElementById("tilt_down");

  // Interval control
  var move_interval;

  // Interval repeat frequence
  var interval_frequencey = 60;

  // Left Pan movement
  pan_left.onmousedown = function() {
    move_interval = setInterval(function() {
      console.log("Pan Left");
      moveHead(-POSITION_CHANGE_PAN, 0);
    }, interval_frequencey);
  };

  pan_left.onmouseup = function() {
    stop(move_interval);
  };
  pan_left.onmouseleave = function() {
    stop(move_interval);
  };

  // Right Pan movement
  pan_right.onmousedown = function() {
    move_interval = setInterval(function() {
      console.log("Pan Right");
      moveHead(POSITION_CHANGE_PAN, 0);
    }, interval_frequencey);
  };

  pan_right.onmouseup = function() {
    stop(move_interval);
  };
  pan_right.onmouseleave = function() {
    stop(move_interval);
  };

  // Up Tilt movement
  tilt_up.onmousedown = function() {
    move_interval = setInterval(function() {
      console.log("Tilt Up");
      moveHead(0, POSITION_CHANGE_TILT);
    }, interval_frequencey);
  };

  tilt_up.onmouseup = function() {
    stop(move_interval);
  };
  tilt_up.onmouseleave = function() {
    stop(move_interval);
  };

  // Down Tilt movement
  tilt_down.onmousedown = function() {
    move_interval = setInterval(function() {
      console.log("Tilt Down");
      moveHead(0, -POSITION_CHANGE_TILT);
    }, interval_frequencey);
  };

  tilt_down.onmouseup = function() {
    stop(move_interval);
  };
  tilt_down.onmouseleave = function() {
    stop(move_interval);
  };
};
