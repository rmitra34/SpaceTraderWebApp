document.getElementById('date').innerHTML = new Date().toDateString();

function generatePlayer()
{
    var playerName = document.getElementById("nameInput").value;
    if (playerName.length == 0) {
        alert("Need name");
        return false;
    }
    var engineerSkillPoint = document.getElementById("EngineerInput").value;
    if (!Number.isInteger(+engineerSkillPoint)) {
        alert("Not valid input for engineer");
        return false;
    }
    engineerSkillPoint = parseInt(engineerSkillPoint);
    if (engineerSkillPoint < 0) {
        alert("Not valid input for engineer");
        return false;
    }
    var pilotSkillPoint = document.getElementById("PilotInput").value;
    if (!Number.isInteger(+pilotSkillPoint)) {
        alert("Not valid input for pilot");
        return false;
    }
    pilotSkillPoint = parseInt(pilotSkillPoint);
    if (pilotSkillPoint < 0) {
        alert("Not valid input for pilot");
        return false;
    }
    var traderSkillPoint = document.getElementById("TraderInput").value;
    if (!Number.isInteger(+traderSkillPoint)) {
        alert("Not valid input for trader");
        return false;
    }
    traderSkillPoint = parseInt(traderSkillPoint);
    if (traderSkillPoint < 0) {
        alert("Not valid input for trader");
        return false;
    }
    var fighterSkillPoint = document.getElementById("FighterInput").value;
    if (!Number.isInteger(+fighterSkillPoint)) {
        alert("Not valid input for fighter");
        return false;
    }
    fighterSkillPoint = parseInt(fighterSkillPoint);
    if (fighterSkillPoint < 0) {
        alert("Not valid input for fighter");
        return false;
    }
    var difficulty = document.getElementById("difficulty").value;
    var total = engineerSkillPoint + fighterSkillPoint + traderSkillPoint +
    pilotSkillPoint;
    if (total != 16) {
        alert("Not adding up to 16");
        return false;
    }
    var player = new Player(playerName, engineerSkillPoint, traderSkillPoint,
        fighterSkillPoint, pilotSkillPoint, difficulty);
    alert("Name: " + player.playerName + "\nEngineer: " + player.engineerSkillPoint +
        "\nTrader: " + player.traderSkillPoint + "\nFighter: " + player.fighterSkillPoint +
        "\nPilot: " + player.pilotSkillPoint + "\nDifficulty: " + player.difficulty);
}

function Player(playerName, engineerSkillPoint, traderSkillPoint, fighterSkillPoint,
    pilotSkillPoint, difficulty) {
    this.playerName = playerName;
    this.engineerSkillPoint = engineerSkillPoint;
    this.traderSkillPoint = traderSkillPoint;
    this.fighterSkillPoint = fighterSkillPoint;
    this.pilotSkillPoint = pilotSkillPoint;
    this.difficulty = difficulty;
    this.universe = Universe();
    this.credits = 1000;
    this.ship = "Gnat";
}


