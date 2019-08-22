import React, { useState } from "react"
import ReleaseTimeline from "./ReleaseTimeline"

function TimelineManager() {
    const [after, setAfter] = useState(null)
    const first = 10;

    return <div>
            <ReleaseTimeline first={first} after={after} loadMore={(lastId) => setAfter(lastId)}/>    
        </div>
}
export default TimelineManager