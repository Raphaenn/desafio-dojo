"use strict";

import CreateField from "../services/CreateField";
import UpdateAirports from "../services/UpdateAirports";
import UpdateClouds from "../services/UpdateClouds";
import GetResult from "../services/GetResult";
import Grid from "../models/grid/Grid";

module.exports = function (router) {
  router.get("/", async function (req, res) {
    let {lines = Grid.limitLines, columns = Grid.limitColumns, clouds = Grid.limitCloud, airports = Grid.limitAirports } = req.query;

    clouds = parseInt(clouds) || Grid.limitCloud;
    airports = parseInt(airports) || Grid.limitAirports;
    lines = parseInt(lines) || Grid.limitLines;
    columns = parseInt(columns) || Grid.limitColumns;

    const createdField = new CreateField();
    const updateAirports = new UpdateAirports();
    const updateClouds = new UpdateClouds();
    const getResult = new GetResult();

    const newMap = await createdField.createMap(lines, columns);
    const airportMap = await updateAirports.airPortUpdate(lines, columns, airports, newMap);
    const cloudMap = await updateClouds.cloudsPortUpdate(lines, columns, clouds, airportMap);
    const resolve = await getResult.process(cloudMap);

    return res.json({
      description: resolve.res,
      initial_map: resolve.cloudMap
    })

  });
};
