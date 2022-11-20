import React, { Component } from "react";
import ReactDOM from "react-dom";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: "column3d", // The chart type
    width: "100%", //  Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        // Set the chart caption
        caption: "Most Popular",
        // Set the chart subcaption
        // subCaption: "In MMbbl = One Million barrels",
        // // Set the x-axis name
        xAxisName: "Repos",
        // // Set the y-axis name
        yAxisName: "Stars",
        // Font size
        xAxisNameFontSize: "16px",
        // Font size
        yAxisNameFontSize: "16px",
        // numberSuffix: "K",
        // decimals
        decimals: 0,
        // Radius
        pieRadiuS: "45%",
        // Color Pie
        // palleteColor: '#FFFFFF',
        // Set thethme for your chart
        theme: "candy",
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
