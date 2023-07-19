import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

function User()
{   
    const {username } = useParams()
    
    useEffect(() => {
            //fetch user realated data
    },[])
    
    return <div>
        hey {username}
    </div>
}


export default User