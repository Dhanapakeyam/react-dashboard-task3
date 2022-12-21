import './App.css';
import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
} from "chart.js";
import { Line } from "react-chartjs-2";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: "top"
        },
        title: {
            display: false,
            text: "Chart.js Line Chart"
        }
    }
};

const labels = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: "Earnings : $",
            data: [
                0,
                10000,
                5000,
                15000,
                10000,
                20000,
                15000,
                25000,
                20000,
                30000,
                25000,
                40000
            ],
            borderColor: "#4e73df",
            backgroundColor: "white",
            lineTension: 0.3
        }
    ]
};

export function ChartArea() {
    return <Line options={options} data={data} />;
}
