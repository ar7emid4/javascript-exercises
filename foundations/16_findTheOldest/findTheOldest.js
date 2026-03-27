const findTheOldest = function(array) {
    array.sort((a, b) => {
        if (!a.yearOfDeath) a.yearOfDeath = new Date().getFullYear();
        if (!b.yearOfDeath) b.yearOfDeath = new Date().getFullYear();
        let ageA = a.yearOfDeath - a.yearOfBirth; 
        let ageB = b.yearOfDeath - b.yearOfBirth; 
        return (ageB - ageA);
    });

    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
