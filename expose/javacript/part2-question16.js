let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const car in statistics){
    const value = statistics[car];
    if (car.startsWith('r') || value % 2 == 1){
        console.log(value);
    }
}