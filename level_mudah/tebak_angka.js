let nomor = document.querySelector("input");
let tebak = document.querySelector("button");
let hasil = document.querySelector("p.hasil");
let nyawa = document.querySelector("span.nyawa");
let skor = document.querySelector("span.skor");
let ulang = document.querySelector("div.ulang");

let restart = document.createElement("button");
restart.classList.add("tombol-restart");
restart.innerText = "Restart";

let game = 0;
let batas = 5;
let numNyawa = 5;
let score = 0;

nyawa.innerHTML = numNyawa;
skor.innerHTML = score;
function nomAi(sum) {
    let ai = Math.floor((Math.random() * sum) + 1);
    return ai;
}

tebak.addEventListener("click", function(val, val2) {
    val2 = nomAi(10);
    val = nomor.value;
    if (val == null || val == "") {
        val = 0;
    }

    if (val == val2) {
        score++;
        let atrMenang = `style="color: green; text-align: center;"`;
        hasil.innerHTML = `<h2 ${atrMenang}>Benar</h2><br>Anda: ${val} | Komputer: ${val2}`;
        skor.innerHTML = score;
    } else {
        let atrKalah = `style="color: red; text-align: center;"`;
        game++;
        --numNyawa;
        hasil.innerHTML = `<h2 ${atrKalah}>Salah</h2><br>Anda: ${val} | Komputer: ${val2}`;
        nyawa.innerHTML = numNyawa;

        if (game >= batas) {
            hasil.innerHTML = `<h2 ${atrKalah}>Anda Kalah</h2><br>Anda: ${val} | Komputer: ${val2}`;
            alert("Game Over");          
            nomor.setAttribute("disabled", "");
            tebak.setAttribute("disabled", "");  
            restart.addEventListener("click", tombolRestart);
            ulang.appendChild(restart);
        }
    }
});

function tombolRestart() {
    let refresh = location.reload();
    return refresh;
}