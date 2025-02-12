// The brute force algorithm for the Traveling Salesman Problem consists of trying all possible 
// permutations of the cities and calculating the total distance of each route. The route with 
// the smallest total distance is the optimal solution.
// 
// How does it work step by step?
// List all the cities to visit.
// Generate all possible permutations of those cities (except the origin city which is kept fixed 
// for simplicity).
// Calculate the total distance for each route (including the return to the origin city).
// Compare all the distances and select the shortest one.

function permute(cities) {
    if (cities.length === 0) return [[]];

    const result = [];
    for (let i = 0; i < cities.length; i++) {
        const currentCity = cities[i];
        const remainingCities = cities.slice(0, i).concat(cities.slice(i + 1));
        const remainingPermutations = permute(remainingCities);
        for (let perm of remainingPermutations) {
        result.push([currentCity, ...perm]);
        }
    }
    return result;
}

function calculateTotalDistance(route, distances) {
    let totalDistance = 0;
    let currentCity = 0; // Starting on the city 0

    for (let nextCity of route) {
        totalDistance += distances[currentCity][nextCity];
        currentCity = nextCity;
    }

    // Coming back to the starting city
    totalDistance += distances[currentCity][0];
    return totalDistance;
}

function findShortestRoute(distances) {
    const numCities = distances.length;
    const citiesToVisit = Array.from({ length: numCities - 1 }, (_, i) => i + 1);
    const allPermutations = permute(citiesToVisit);

    let shortestDistance = Infinity;
    let bestRoute = [];

    for (let route of allPermutations) {
        const totalDistance = calculateTotalDistance(route, distances);
        if (totalDistance < shortestDistance) {
        shortestDistance = totalDistance;
        bestRoute = route;
        }
    }

    return { bestRoute: [0, ...bestRoute, 0], shortestDistance };
}

const distances = [
    [0, 10, 15, 20], // Distances from the city 0
    [10, 0, 35, 25], // Distances from the city 1
    [15, 35, 0, 30], // Distances from the city 2
    [20, 25, 30, 0]  // Distances from the city 3
];

const result = findShortestRoute(distances);
console.log(`The shortest route is: ${result.bestRoute.join(' -> ')}`);
console.log(`Total distance: ${result.shortestDistance}`);

module.exports = findShortestRoute;