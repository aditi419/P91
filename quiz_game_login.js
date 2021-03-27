function addUser() {
    player_1 = document.getElementById("player1_nameInput").value;
    player_2 = document.getElementById("player2_nameInput").value;

    localStorage.setItem("player_1", player_1);
    localStorage.setItem("player_2", player_2);
    window.location("login_page.html");
}

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
    check_button = "<br> <br> <button class='btn btn-info' onclick='check();'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("numeber1").value = "";
    document.getElementById("numeber2").value = "";

}