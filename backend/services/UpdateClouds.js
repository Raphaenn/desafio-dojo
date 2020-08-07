import Point from "../models/point/Point";

export default class UpdateClouds {

    hasAirport(element) {
        if (element.indexOf(Point.Airport) >= 0) {
            console.log(element)
            return true;
        }

        return false;
    }

    gridIsValid(grid) {
        if (!grid.some(this.hasAirport) && !grid.some(this.hasCloudInAirport) && grid.some(this.hasCloud)) {
            return 'Clique no Céu Aberto para criar alguns aeroportos.';
        }
        else if (!grid.some(this.hasCloud) && grid.some(this.hasAirport)) {
            return 'Está um ótimo dia! Não temos nenhuma nuvem.';
        }
        else if (!grid.some(this.hasCloud) && !(grid.some(this.hasAirport))){
            return 'Seu dia está ensolarado, clique em cima do Céu Aberto para determinar aonde estão os aeroportos e as nuvens.'
        }
        else if (!grid.some(this.hasAirport) && grid.some(this.hasCloudInAirport)) {
            return 'Epa, parece que os aeroportos foram encobertos pelas nuvens.'
        }

        return true
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