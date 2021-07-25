function Biodata(name, fathername, city, email) {
    this.name = name;
    this.fathername = fathername;
    this.city = city;
    this.email = email;
}
Biodata.prototype.Add = function () {
    var biodat = [];
    var obj = {
        OName: this.name,
        OFName: this.fathername,
        OCity: this.city,
        OEmail: this.email,

    }
    biodat.push(obj);
    console.log(biodat);
}

var biodata1 = new Biodata("Muhammad Mohsin", "Abdul Munaf", "Karachi", "justcallmohsin@gmailcom");
biodata1.Add();
var biodata2 = new Biodata("Muhammad Farhan", "Rafiq", "Pind", "farhanahmed@gmailcom");
biodata2.Add();
var biodata3 = new Biodata("Haris", "AbdulAziz", "32", "zubairnagariya@live.com")
biodata3.Add();
