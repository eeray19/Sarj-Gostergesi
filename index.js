//using the BatteryManager object

initBattery();

function initBattery() {

    //selecting HTML elements
    const renk = document.querySelector(".renk");
    const sarjDurumu = document.querySelector(".sarjDurum");
    const yuzde = document.querySelector(".yuzde");


    navigator.getBattery().then(
        (batt) => { //arrow function 
        updateBattery = () => { //arrow function 
            let level = Math.floor(batt.level * 100); 
            yuzde.innerHTML = "%" + level;

            renk.style.height = `${parseInt(batt.level * 100)}%`; 

            if (level == 100) { 
                sarjDurumu.innerHTML = `Tam Dolu <i class="ri-battery-2-fill green-color"></i>`;
                renk.style.height = "103%";
            } else if (level <= 20 & !batt.charging) {
                sarjDurumu.innerHTML = `Düşük Şarj <i class="ri-plug-line animated-red animated-red"></i>`;
            } else if (batt.charging) {
                sarjDurumu.innerHTML = `Şarj Ediliyor ... <i class="ri-flashlight-line animated-green"></i>`;
            } else {
                sarjDurumu.innerHTML = "";
            }

            if (level <= 20) { 
                renk.classList.add("kirmizi");
                renk.classList.remove("yesil", "turuncu", "sari");
            } else if (level <= 48) {
                renk.classList.add("turuncu");
                renk.classList.remove("yesil", "kirmizi", "sari");
            } else if (level <= 80) {
                renk.classList.add("sari");
                renk.classList.remove("yesil", "turuncu", "kirmizi");
            } else {
                renk.classList.add("yesil");
                renk.classList.remove("kirmizi", "turuncu", "sari");
            }
        }
        updateBattery();
        batt.addEventListener("chargingchange", () => { updateBattery() });
        batt.addEventListener("levelchange", () => { updateBattery });
    }

    )
}
