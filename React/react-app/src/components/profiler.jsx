import React,{Profiler} from "react";
import Child from "./child";
function ProfilerDemo ()
{
    const onRenderCallback=(id,phase,actualDuration,baseDuration , startTime,commitTime)=>
    {
        console.log(id);
        console.log(phase);
        console.log(actualDuration);
        console.log(baseDuration);
        console.log(startTime);
        console.log(commitTime);
    };
    return( 
        <Profiler id="ProfilerDemo" onRender={onRenderCallback}>
            <Child/>
        </Profiler>
    )
}
export default ProfilerDemo;