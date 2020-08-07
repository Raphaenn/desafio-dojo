'use scrict';
export default class Grid {

    constructor(mapa) {
        this.mapa = mapa;
    }

    static get limitLines() {
        return 10;
    };

    static get limitColumns() {
        return 10;
    };

    static get limitCloud() {
        return 4;
    };

    static get limitAirports() {
        return 3;
    };
}
