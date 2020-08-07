import Point from "../models/point/Point";

export default class UpdateAirports {

    async airPortUpdate(lines, columns, airports, newMap) {
        let airportMap = newMap
        for(let i = 0; i < airports; i++) {
            let randomLine = Math.floor(Math.random() * lines);
            let randomColumn = Math.floor(Math.random() * columns)
            airportMap[randomLine][randomColumn] = Point.Airport
        }
        return airportMap
    }

}