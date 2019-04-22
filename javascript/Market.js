const Items = {
    Water: {
        MTLP: 0,
        MTLU: 0,
        TTP: 2,
        basePrice: 30,
        IPL: 3,
        var: 4,
        incStockConditions: ResourceLevel.LOTSOFWATER,
        decStockConditions: ResourceLevel.DESERT,
        MTL: 30,
        MTH: 50
    }
    Furs: {
        MTLP: 0,
        MTLU: 0,
        TTP: 0,
        basePrice: 250,
        IPL: 10,
        var: 10,
        incStockConditions: ResourceLevel.RICHFAUNA,
        decStockConditions: ResourceLevel.LIFELESS,
        MTL: 230,
        MTH: 280
    }
    Food: {
        MTLP: 1,
        MTLU: 0,
        TTP: 1,
        basePrice: 100,
        IPL: 5,
        var: 5,
        incStockConditions: ResourceLevel.RICHSOIL,
        decStockConditions: ResourceLevel.POORSOIL,
        MTL: 90,
        MTH: 160
    }
    Ore: {
        MTLP: 2,
        MTLU: 2,
        TTP: 3,
        basePrice: 350,
        IPL: 20,
        var: 10,
        incStockConditions: ResourceLevel.MINERALRICH,
        decStockConditions: ResourceLevel.MINERALPOOR,
        MTL: 350,
        MTH: 420
    }
    Games: {
        MTLP: 3,
        MTLU: 1,
        TTP: 6,
        basePrice: 250,
        IPL: -10,
        var: 5,
        incStockConditions: ResourceLevel.ARTISTIC,
        decStockConditions: ResourceLevel.NOSPECIALRESOURCES,
        MTL: 160,
        MTH: 270
    }
    Firearms: {
        MTLP: 3,
        MTLU: 1,
        TTP: 5,
        basePrice: 1250,
        IPL: -75,
        var: 100,
        incStockConditions: ResourceLevel.WARLIKE,
        decStockConditions: ResourceLevel.NOSPECIALRESOURCES,
        MTL: 30,
        MTH: 50
    }
    Medicine: {
        MTLP: 4,
        MTLU: 1,
        TTP: 6,
        basePrice: 650,
        IPL: -20,
        var: 10,
        incStockConditions: ResourceLevel.LOTSOFHERBS,
        decStockConditions: ResourceLevel.NOSPECIALRESOURCES,
        MTL: 400,
        MTH: 700
    }
    Machines: {
        MTLP: 4,
        MTLU: 3,
        TTP: 5,
        basePrice: 900,
        IPL: -30,
        var: 5,
        incStockConditions: ResourceLevel.NOSPECIALRESOURCES,
        decStockConditions: ResourceLevel.NOSPECIALRESOURCES,
        MTL: 600,
        MTH: 800
    }
    Narcotics: {
        MTLP: 5,
        MTLU: 0,
        TTP: 5,
        basePrice: 3500,
        IPL: -125,
        var: 150,
        incStockConditions: ResourceLevel.WEIRDMUSHROOMS,
        decStockConditions: ResourceLevel.NOSPECIALRESOURCES,
        MTL: 2000,
        MTH: 3000
    }
    Robots: {
        MTLP: 6,
        MTLU: 4,
        TTP: 7,
        basePrice: 5000,
        IPL: -150,
        var: 100,
        incStockConditions: ResourceLevel.NOSPECIALRESOURCES,
        decStockConditions: ResourceLevel.NOSPECIALRESOURCES,
        MTL: 3500,
        MTH: 5000
    }
    Fuel: {
        MTLP: 0,
        MTLU: 0,
        TTP: 5,
        basePrice: 6,
        IPL: -1,
        var: 0,
        incStockConditions: ResourceLevel.DESERT,
        decStockConditions: ResourceLevel.MINERALPOOR,
        MTL: 1,
        MTH: 6
    }

}

class Market{
    constructor(solarSystem) {
        this.goods = new Map();
        Object.keys(Items).forEach(key => {
            let trey = Items[key];
            if (solarSystem.techLevel >= trey.MTLP) {
                goods.set(trey, Math.floor(Math.random() * 100));
            } else {
                goods.set(item,0);
            }
        });
    }
}

const market = new Market();


function buyGoodFromMarket(good) {
    var currAmount = market.goods.get(good);
    if (currAmount <= 0) {
        return false;
    }
    market.goods.set(good, currAmount - 1);
}

function sellGoodFromMarket(good) {
    var currAmount = market.goods.get(good);
    market.goods.set(good, currAmount + 1);
}
