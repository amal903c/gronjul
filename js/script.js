//gsap.registerPlugin(ScrollTrigger);
//var rellax = new Rellax(".rellax", {
//    center: true,
//});


window.addEventListener("load", visStart);

function visStart() {
    console.log("jeg er ved start")
    produktInfoSkift();
    clickAddToKurv();
}



// PRODUKTINFOSKIFT SKTIFTER MELLEM BESKRIVELSE INFORMATION OG LEVERING

function produktInfoSkift() {



    console.log("jeg er ved produktInfoSkift")
    document.querySelectorAll(".produktbeskrivelse p").forEach(elm => {
        elm.addEventListener("click", filtering);
        console.log("Hvis der står 3 her, er det rigtigt")
    })
}

function filtering() {
    console.log("filtering")

    //    console.log("filter");
    //    filter = this.dataset.kategori;


    document.querySelectorAll(".produktbeskrivelse p").forEach(elm => {
        elm.classList.remove("valgt_info");
    })

    this.classList.add("valgt_info");

    if (this.dataset.kategori == "beskrivelse") {
        console.log("hej med dig");

        document.querySelector("#beskrivelseInfo").classList.remove("hidden");
        document.querySelector("#informationInfo").classList.add("hidden");
        document.querySelector("#leveringsInfo").classList.add("hidden");


    } else if (this.dataset.kategori == "information") {
        console.log("hej med dig info");

        document.querySelector("#beskrivelseInfo").classList.add("hidden");
        document.querySelector("#informationInfo").classList.remove("hidden");
        document.querySelector("#leveringsInfo").classList.add("hidden");
    } else if (this.dataset.kategori == "levering") {
        console.log("hej med dig levering");

        document.querySelector("#beskrivelseInfo").classList.add("hidden");
        document.querySelector("#informationInfo").classList.add("hidden");
        document.querySelector("#leveringsInfo").classList.remove("hidden");
    }


}




//forside

var rellax = new Rellax(".rellax", {
    center: true,
});



// KØBS FLOW STARTER HER

function clickAddToKurv() {

}
