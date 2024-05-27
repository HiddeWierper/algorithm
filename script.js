function func(id) {
  const number = id.replace(/\D/g, "");
  var end = false;
  var x = Math.floor((number - 1) % 4);
  var y = Math.floor((number - 1) / 4);
  var diffSteps = [];
  const startpointX = 0;
  const startpointY = 0;

  while (!end) {
    var steps = Math.abs(x - startpointX) + Math.abs(y - startpointY);
    const neighborUp = y - 1;
    const neighborDown = y + 1;
    const neighborLeft = x - 1;
    const neighborRight = x + 1;

    if (
      Math.abs(neighborUp - startpointY) + Math.abs(x - startpointX) <
      steps
    ) {
      console.log(x, neighborUp);
      diffSteps.push([x, neighborUp]);
      y = neighborUp;
    } else if (
      Math.abs(neighborDown - startpointY) + Math.abs(x - startpointX) <
      steps
    ) {
      console.log(x, neighborDown);
      diffSteps.push([x, neighborDown]);
      y = neighborDown;
    } else if (
      Math.abs(y - startpointY) + Math.abs(neighborLeft - startpointX) <
      steps
    ) {
      console.log(neighborLeft, y);
      diffSteps.push([neighborLeft, y]);
      x = neighborLeft;
    } else if (
      Math.abs(y - startpointY) + Math.abs(neighborRight - startpointX) <
      steps
    ) {
      console.log(neighborRight, y);
      diffSteps.push([neighborRight, y]);
      x = neighborRight;
    } else {
      end = true;
    }
  }
  for (var i = 0; i < diffSteps.length; i++) {
    console.log(diffSteps[i]);
  }
  alert("Steps: " + diffSteps.length);
}
