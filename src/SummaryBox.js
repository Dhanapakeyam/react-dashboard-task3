import { BorderLinearProgress } from './App';
import './App.css';

export function SummaryBox({ data }) {

    return (
        <div>
            <div className='summary-box-specs'>
                <div className='v1' style={{ borderLeftColor: data.lineColor }}>
                    <div className='summary-text'>
                        <p style={{ color: data.lineColor, fontSize: "12px" }}>{data.name}</p>
                        <div className='task-progress'><span style={{ color: data.textColor, fontWeight: "bolder" }}>{data.number}
                            {data.name === "TASKS" ? <BorderLinearProgress lineColor={data.lineColor}
                                variant="determinate" value={data.number} /> : null}
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
