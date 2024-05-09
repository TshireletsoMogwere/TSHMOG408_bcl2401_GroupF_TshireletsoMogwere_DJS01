/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const props = {
velocity: 10000, // velocity (km/h)
acceleration: 3, // acceleration (m/s^2)
time: 3600, // seconds (1 hour)
distance: 0, // distance (km)
RemainingFuel: 5000, // remaining fuel (kg)
fuelBurnRate: 0.5, // fuel burn rate (kg/s)
}

//Convert values into correct units
const timeConversionFactor = 3600;
const accelerationConversionFactor = 3.6;


const newDistance = distance + (velocity*time/timeConversionFactor) //calcultes new distance
const newRemainingFuel = RemainingFuel - fuelBurnRate*time //calculates remaining fuel

// Pick up an error with how the function below is called and make it robust to such errors
const calculateNewVelocity = (props) => {
  const {acceleration, velocity, time} = props;
  if(acceleration < 0 || velocity < 0 || time < 0 || newRemainingFuel < 0 || newDistance < 0 ) {
    throw new Error("Values must be non negative");
  }
  return velocity + (acceleration * accelerationConversionFactor * time);
};

const newVelocity = calculateNewVelocity({acceleration, velocity, time});

 
console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${newRemainingFuel} kg`);






