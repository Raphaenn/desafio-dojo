import Point from "../models/point/Point";

export default class UpdateClouds {

    hasAirport(element) {
        if (element.indexOf(Point.Airport) >= 0) {
            return true;
        }

        return false;
    }

    async cloudsPortUpdate(lines, columns, clouds, airportMap) {
        let cloudMap = airportMap

        for(let i = 0; i < clouds; i++) {
            let randomLine = Math.floor(Math.random() * lines);
            let randomColumn = Math.floor(Math.random() * columns)
            cloudMap[randomLine][randomColumn] = Point.Cloud

            if(cloudMap[randomLine][randomColumn] === Point.Airport) {
                cloudMap[randomLine + 1 ][randomColumn + 1] = Point.Airport
            }
        }
        
        return cloudMap
    }

}