import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import './App.css';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: "bottom"
        },
        title: {
            display: false,
            text: "Chart.js Line Chart"
        }
    }
};

export const data = {
    labels: ["Direct", "Social", "Referral"],

    datasets: [
        {
            label: "Direct",
            data: [55, 30, 15],

            backgroundColor: [
                "#4e73df",
                "#1cc88a",
                "#36b9cc",

            ],
            spacing: 3
        }
    ]
};

export function ChartPie() {
    return (
        <div className="donut-chart-container"><Doughnut data={data} />
        </div>);
}
