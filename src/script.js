function Map (city) { 
    let count = city.split('“'),
        date = [],
        name = [],
        state = [],
        latitude = [],
        longitude = [];
    count.shift();
    for (let u = 0; u < count.length; u++) { date[u] = count[u].split(', ') };
    for (let i = 0; i <date.length; i++) { name[i] = date[i][0] };
    for (let i = 0; i <date.length; i++) { state[i] = date[i][1].substring(0, date[i][1].length - 1) };
    for (let i = 0; i <date.length; i++) { latitude[i] = parseFloat(date[i][2]) };
    for (let i = 0; i <date.length; i++) { longitude[i] = parseFloat(date[i][3]) };
    this.name = name;
    this.state = state;
    this.latitude = latitude;
    this.longitude = longitude;
    this.getCountry = (local) => {
        let max, index;
        switch (local) {
            case "northernmost":
                index = latitude.indexOf(Math.max.apply(null, latitude));
                console.log("Northernmost town is " + name[index] + ", " + state[index]);
                break;
            case "easternmost":
                index = longitude.indexOf(Math.max.apply(null, longitude));
                console.log("Easternmost town is " + name[index] + ", " + state[index]);
                break;
            case "southernmost":
                index = latitude.indexOf(Math.min.apply(null, latitude));
                console.log("Southernmost town is " + name[index] + ", " + state[index]);
                break;
            case "westernmost":
                index = longitude.indexOf(Math.min.apply(null, longitude));
                console.log("Westernmost town is " + name[index] + ", " + state[index]);
                break;
            default:
                break;
        }
    };
    this.getCity = (positionLat, positionLon) => {
        let area = [],
            long = parseFloat(positionLon),
            lat = parseFloat(positionLat),
            index;
        for (let i = 0; i < latitude.length; i++) {
            area[i] = Math.sqrt( Math.pow ( long - longitude[i] , 2) + Math.pow ( lat - latitude[i],2));
        }
        index = area.indexOf(Math.min.apply(null, area));
        console.log("Nearest town is "+name[index] + ", " + state[index]);
    };
    this.getStringSingle = () => {
        state = state.filter(function (elem, pos, arr) {
            if (arr.indexOf(elem) != arr.lastIndexOf(elem)) {
                return false;
            }
            else return true;
        });
        console.log(state.join(' '));
    }
}