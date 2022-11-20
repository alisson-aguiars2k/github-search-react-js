import React, { Component } from "react";
import ReactDOM from "react-dom";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const ChartComponent = ({data}) => {
  const chartConfigs = {
    type: "pie3d", // The chart type 
    width: 600, //  Width of the chart
    height: 400, // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        // Set the chart caption
        caption: "Countries With Most Oil Reserves",
        // Set the chart subcaption
        subCaption: "In MMbbl = One Million barrels",
        // Set the x-axis name
        xAxisName: "Country",
        // Set the y-axis name
        yAxisName: "Reserves (MMbbl)",
        numberSuffix: "K",
        // Set thethme for your chart
        theme: "candy",
      },
      data ,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
