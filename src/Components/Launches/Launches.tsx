import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { useLaunchesDataQuery } from "./../../generated/graphql";

const Launches: FC = () => {
    const { data, loading, error } = useLaunchesDataQuery();

    !loading && console.log("Launches-Data: ", data)
    return (
        <div>
            <Link to="24">Move to other one baby</Link>
        </div>
    )
}

export default Launches
