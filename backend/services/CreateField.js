import Point from "../models/point/Point";

export default class CreateField {

    constructor() {
        this.grid = []
    }

    async createMap(lines, columns) {
        Array(lines).fill().forEach((lines, i) => {
            this.grid[i] = []
        Array(columns).fill().forEach((columns, y) => {
            this.grid[i].push(Point.Sky)
        })
    })
        return this.grid
    }

}