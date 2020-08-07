import Point from "../models/point/Point";

export default class UpdateClouds {

    hasAirport(element) {
        if (element.indexOf(Point.Airport) >= 0) {
            console.log(element)
            return true;
        }

        return false;
    }

    async cloudsPortUpdate(lines, columns, clouds, airportMap) {
        let cloudMap = airportMap

        for(let i = 0; i < clouds; i++) {
            let randomLine = Math.floor(Math.random() * lines);
            let randomColumn = Math.floor(Math.random() * columns)
            airportMap[randomLine][randomColumn] = Point.Cloud
        }
        
        return cloudMap
    }

}