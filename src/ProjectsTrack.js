import './App.css';
import { BorderLinearProgress } from './App';


export function ProjectsTrack() {
    const dataSummary = [
        {
            name: "Server Migration",
            percent: "20%",
            lineColor: "#e74a3b",
            number: 20,
        },
        {
            name: "Sales Tracking",
            percent: "40%",
            lineColor: "#f6c23e",
            number: 40,
        },
        {
            name: "Customer Database",
            percent: "60%",
            lineColor: "#4e73df",
            number: 60,
        },
        {
            name: "Payout Dtails",
            percent: "80%",
            lineColor: "#36b9cc",
            number: 80,
        },
        {
            name: "Account Setup",
            percent: "Completed!",
            lineColor: "#1cc88a",
            number: 100,
        }
    ]
    return (
        <div className="projects-track">
            {dataSummary.map((dt) => <ProjectBox data={dt} />)}
        </div>
    );
}

function ProjectBox({ data }) {
    return (
        <div >
            <div className="project-summary-box"><p>{data.name}</p>
                <p>{data.percent}</p>
            </div>
            <div className='line-progress'><BorderLinearProgress lineColor={data.lineColor}
                variant="determinate" value={data.number} /></div>
        </div>
    );
}

