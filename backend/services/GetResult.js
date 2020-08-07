import Point from "../models/point/Point";

class GetResult {
    constructor() {
      this.grid = []
    }
  
      hasCloudInAirport(element) {
          if (element.indexOf(Point.Cloud_In_Airport) >= 0) {
              return true;
          }
  
          return false;
      }
  
     getTopCell(lines, columns, grid) {
          let row_copy = grid[lines - 1]
  
          if (row_copy) {
              return [lines - 1, columns, row_copy[columns]]
          }
          return
      }
  
      getBottomCell(lines, columns, grid) {
          let row_copy = grid[lines + 1]
  
          if (row_copy) {
              return [lines + 1, columns, row_copy[columns]]
          }
          return
      }
  
      getLeftCell(lines, columns, grid) {
          let cell = grid[lines][lines - 1]
  
          if (cell) {
              return [lines, columns - 1, cell]
          }
          return
      }
  
      getRightCell(lines, columns, grid) {
          let cell = grid[lines][columns + 1]
  
          if (cell) {
              return [lines, columns + 1, cell]
          }
  
          return
      }
  
      nextDay(grid) {
          let has_airport = false;
          let clouds = []
  
          grid.forEach((lines, x) => {
              lines.forEach((columns, y) => {
                  if (columns == Point.Cloud || columns == Point.Cloud_In_Airport) {
                      clouds.push([x, y])
                  }
  
                  if (columns == Point.Airport) {
                      has_airport = true;
                  }
              })
          })
  
          if (!has_airport) {
              return false;
          }
  
          clouds.forEach((cloud, i) => {
              let [lines, columns] = cloud;
              let adjacent_cells = [
                  this.getBottomCell(lines, columns, grid),
                  this.getTopCell(lines, columns, grid),
                  this.getRightCell(lines, columns, grid),
                  this.getLeftCell(lines, columns, grid)
              ]
  
              adjacent_cells.forEach((cell, y) => {
                  if (cell) {
                      let [lines, columns, value] = cell
  
                      switch(value) {
                          case Point.Sky:
                              grid[lines][columns] = Point.Cloud
                              break;
                          case Point.Airport:
                              grid[lines][columns] = Point.Cloud_In_Airport
                              break;
                      }
                  }
              })
          })
          return this.grid;
      }
  
      async process(cloudMap) {
  
          let grid = JSON.parse(JSON.stringify(cloudMap))
          let days = 1;
          let first_airport, last_airport;
  
          while(this.nextDay(grid)) {
              days += 1;
              if (grid.some(this.hasCloudInAirport) && !first_airport) {
                  first_airport = days
              }
          }
          last_airport = days;
  
          if (first_airport == last_airport) {
              return {res: `Opa! Consegui descobrir que todos os aeroportos serão cobertos no ${first_airport}º dia.`, cloudMap}
          } else {
              return {res: `Opa! Consegui descobrir que o primeiro aeroporto sera coberto no ${first_airport}º dia e o restante no ${last_airport}º dia.`, cloudMap}
          }
      }
  
  }
  
  export default GetResult;