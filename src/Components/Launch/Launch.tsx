import React, { FC } from 'react'
import { useParams } from 'react-router-dom';
import { useLaunchDetailsQuery } from '../../generated/graphql';

const Launch: FC = () => {
    const param = useParams();
    const { data, loading, error } = useLaunchDetailsQuery({
        variables: { id: "17" }
    });

    console.log(param)
    !loading && console.log("Details: ", data)
    return (
        <div>
            Launch
        </div>
    )
}

export default Launch;
