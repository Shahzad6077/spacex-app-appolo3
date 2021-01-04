import { FC } from 'react'
import { Routes, Route } from "react-router-dom";
import { Launches, Launch } from "./../../Components";



const SpacexLaunches: FC = () => {

    return (
        <div>
            <h2>SpacexLaunches</h2>
            <Routes>
                <Route path="/" element={<Launches />} />
                <Route path=":launchId" element={<Launch />} />
            </Routes>
        </div>
    )
}

export default SpacexLaunches;