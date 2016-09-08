class Form {
    constructor(nom, prenom, date_de_naissance, emploi, societe) {
        this.nom = nom;
        this.prenom = prenom;
        this.date_de_naissance = date_de_naissance;
        this.emploi = emploi;
        this.societe = societe;
    }
    concatenation() {
        var result = this.nom + ' ' + this.prenom + ' ' + this.date_de_naissance + ' ' + this.emploi + ' ' + this.societe;
        return result;
    }
    checkLetters(text) {
        var pattern = new RegExp(/^[A-Z -]+$/i);
        return pattern.test(text);
    }
}

