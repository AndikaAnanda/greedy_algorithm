const calculateTrucks = (truckCapacities, Y) => {
    let truckCounts = new Array(truckCapacities.length).fill(0)

    for (let i = 0 ; i <  truckCapacities.length; i++) {
        // calculate how many trucks on each capacity
        truckCounts[i] = Math.floor(Y / truckCapacities[i])
        // update Y with remainder
        Y = Y % truckCapacities[i]
    }

    return truckCounts
}

// truck capacities (in ton)
const truckCapacities = [23, 11, 5]

// goods (in tons)
const Y = 100

const result = calculateTrucks(truckCapacities, Y);
console.log(`Truck 3 (23 tons): ${result[0]} trucks`);
console.log(`Truck 2 (11 tons): ${result[1]} trucks`);
console.log(`Truck 1 (5 tons): ${result[2]} trucks`);