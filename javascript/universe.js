function Coordinates() {
    this.x = Math.floor(Math.random() * 100);
    this.y = Math.floor(Math.random() * 100);
}

const TechLevel = {
    PREAGRICULTURE: 0,
    AGRICULTURE: 1,
    MEDIEVAL: 2,
    RENAISSANCE: 3,
    EARLYINDUSTRIAL: 4,
    INDUSTRIAL: 5,
    POSTINDUSTRIAL: 6,
    HITECH: 7,
};

const ResourceLevel = {
    NOSPECIALRESOURCES: 0,
    MINERALRICH: 1,
    MINERALPOOR: 2,
    DESERT: 3,
    LOTSOFWATER: 4,
    RICHSOIL: 5,
    POORSOIL: 6,
    RICHFAUNA: 7,
    LIFELESS: 8,
    WEIRDMUSHROOMS: 9,
    LOTSOFHERBS: 10,
    WARLIKE: 11,
};

function randomName() {
    var letters = 26;
    var probability = 97;
    var length = Math.floor(Math.random() * 8) + 3;
    var name = "";
    for (i = 0; i < length; i++) {
        var letter = String.fromCharCode(Math.floor(Math.random() * letters) + probability);
        name += letter;
    }
    return name;
}

function randomTech() {
    var maxProbability = 100;
    var probability = Math.floor(Math.random() * maxProbability);
    if (probability < 45) {
        return TechLevel.PREAGRICULTURE;
    }
    if ((probability >= 45) && (probability < 55)) {
            return TechLevel.AGRICULTURE;
    }
    if ((probability >= 55) && (probability < 68)) {
            return TechLevel.MEDIEVAL;
    }
    if ((probability >= 68) && (probability < 75)) {
            return TechLevel.RENAISSANCE;
    }
    if ((probability >= 75) && (probability < 80)) {
            return TechLevel.EARLYINDUSTRIAL;
    }
    if ((probability >= 80) && (probability < 88)) {
            return TechLevel.INDUSTRIAL;
    }
    if ((probability >= 88) && (probability < 95)) {
            return TechLevel.POSTINDUSTRIAL;
    }
    return TechLevel.HITECH;
}


function randomResource() {
    var maxProbability = 100;
    var probability = Math.floor(Math.random() * maxProbability);
    if (probability < 40) {
        return ResourceLevel.NOSPECIALRESOURCES;
    }
    if ((probability >= 40) && (probability < 55)) {
        return ResourceLevel.DESERT;
    }
    if ((probability >= 55) && (probability < 60)) {
        return ResourceLevel.MINERALRICH;
    }
    if ((probability >= 60) && (probability < 62)) {
        return ResourceLevel.MINERALPOOR;
    }
    if ((probability >= 62) && (probability < 64)) {
        return ResourceLevel.LOTSOFWATER;
    }
    if ((probability >= 64) && (probability < 66)) {
        return ResourceLevel.RICHSOIL;
    }
    if ((probability >= 66) && (probability < 69)) {
        return ResourceLevel.RICHFAUNA;
    }
    if ((probability >= 69) && (probability < 72)) {
        return ResourceLevel.LIFELESS;
    }
    if ((probability >= 72) && (probability < 85)) {
        return ResourceLevel.WEIRDMUSHROOMS;
    }
    if ((probability >= 85) && (probability < 87)) {
        return ResourceLevel.LOTSOFHERBS;
    }
    if ((probability >= 87) && (probability < 92)) {
        return ResourceLevel.ARTISTIC;
    }
    return ResourceLevel.WARLIKE;
}

function SolarSystem() {
    this.coordinates = new Coordinates();
    this.resourceLevel = randomResource();
    this.techLevel = randomTech();
    this.systemName = randomName();
}


function Universe() {
    var dict = [];
    var i;
    for (i = 0; i < 10; i++) {
        var davo = new SolarSystem();
        dict.push(davo);
    }
    alert("Planet 1: " +  dict[0].systemName + "\nPlanet 2: " + dict[1].systemName +
        "\nPlanet 3: " + dict[2].systemName + "\nPlanet 4: " + dict[3].systemName
        + "\nPlanet 5: " + dict[4].systemName + "\nPlanet 6: " + dict[5].systemName
        + "\nPlanet 7: " + dict[6].systemName + "\nPlanet 8: " + dict[7].systemName
        + "\nPlanet 9: " + dict[8].systemName + "\nPlanet 10: " + dict[9].systemName);
}
