import { ChartArea } from './ChartArea';
import { ChartPie } from './ChartPie';
import { SummaryBox } from "./SummaryBox";
import { ProjectsTrack } from './ProjectsTrack';
import { IllustrationImg } from './IllustrationImg';

export function SummaryBoxList() {
    const dataList = [{
        name: "EARNINGS(MONTHLY)",
        number: "$40,000",
        lineColor: "#4e73df",
        textColor: "#5a5c69",
    },
    {
        name: "EARNINGS(YEARLY)",
        number: "$215,000",
        lineColor: "#1cc88a",
        textColor: "#5a5c69",
    },
    {
        name: "TASKS",
        number: "50%",
        lineColor: "#36b9cc",
        textColor: "#5a5c69",
    },
    {
        name: "PENDING REQUESTS",
        number: 18,
        lineColor: "#f6c23e",
        textColor: "#5a5c69",
    }];
    return (
        <div>
            <div className='summary-box-list'>
                {dataList.map(dt => <SummaryBox data={dt} />)}
            </div>
            <div className='chart-area-title'><p>Earning Overview</p>
                <p>Revinue Sources</p></div>
            <div className='chart-area'><ChartArea />
                <ChartPie />
            </div>
            <div className='chart-area-title'><p>Projects</p>
                <p>Illustration</p></div>
            <div className='project-track-container'>
                <ProjectsTrack />
                <IllustrationImg />
            </div>
        </div>
    );
}
