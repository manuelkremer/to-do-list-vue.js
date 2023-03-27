var app = new Vue({
    el: "#aufgabenApp",
    data: {
        aufgaben: [
            {beschreibung: "Aufstehen", fertig: false},
            {beschreibung: "Sport", fertig: false},
            {beschreibung: "Einkaufen", fertig: false},
            {beschreibung: "Lernen", fertig: false},
            {beschreibung: "Aufräumen", fertig: false},
        ],
        neueAufgabe:''
    },
    computed: {
        erledigt() {
            return this.aufgaben.filter(aufgabe => aufgabe.fertig);
        },
        nichterledigt() {
            return this.aufgaben.filter(aufgabe => !aufgabe.fertig)
        },
    },
    methods: {
        aufgabeHinzu() {
            this.aufgaben.push({beschreibung: this.neueAufgabe, fertig: false});
            this.neueAufgabe ='';
        },
        loeschen(index) {
            this.aufgaben.splice(index, 1);
        },
        erledigtWechseln(index) {
            this.aufgaben[index].fertig = this.aufgaben[index].fertig ? false : true;
        }
    }
});