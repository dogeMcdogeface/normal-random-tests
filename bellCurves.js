// bellCurves.js

// Array of bell curve generation functions
var bellCurveFunctions = [
  function generateBellCurveNumbersBoxMuller(mean, stdDev, count) {
    var numbers = [];
    for (var i = 0; i < count; i++) {
      var u1 = Math.random();
      var u2 = Math.random();
      var z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
      numbers.push(mean + z0 * stdDev);
    }
    return numbers;
  },

  function generateBellCurveNumbersCLT(mean, stdDev, count) {
    var numbers = [];
    var n = 12; // Number of uniform random variables to sum for each sample

    for (var i = 0; i < count; i++) {
      var sum = 0;
      for (var j = 0; j < n; j++) {
        sum += Math.random(); // Summing uniform random variables
      }
      var z = (sum - n / 2) / Math.sqrt(n / 12); // Standardizing to get standard normal variable
      numbers.push(mean + stdDev * z); // Applying mean and standard deviation
    }
    return numbers;
  },

  function generateBellCurveNumbersPolar(mean, stdDev, count) {
    var numbers = [];
    for (var i = 0; i < count; i++) {
      var u1, u2, z0;
      do {
        u1 = Math.random() * 2 - 1;
        u2 = Math.random() * 2 - 1;
        z0 = u1 * u1 + u2 * u2;
      } while (z0 >= 1 || z0 === 0);
      var factor = Math.sqrt(-2 * Math.log(z0) / z0);
      numbers.push(mean + stdDev * u1 * factor);
    }
    return numbers;
  },
    function generateBellCurveNumbersJake(mean, stdDev, count) {
    var numbers = [];
    for (var i = 0; i < count; i++) {
      var u1 = Math.random();
      if(u1 < 0.75){
		u1 /= 0.75;
		u1 = Math.pow(u1 , 0.25)
		u1 *= 0.75;
	  }else{
		u1 -= 0.75;
		u1 *= 4;
		u1 = Math.pow(u1 , 0.25)
		u1 = 1.0- u1;
		u1 = 0.75 + 0.25*u1
	  }
	  
      numbers.push( u1 * stdDev*10);
    }
    return numbers;
  },
];
