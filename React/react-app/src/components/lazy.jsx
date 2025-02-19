import React,{lazy, Suspense} from "react";
const LazyComponent = lazy(()=>import('./lists'));
function Lazy ()
{
    return (
        <>
        <Suspense fallback = {<h1>Loading...</h1>}>
        <LazyComponent/>
        </Suspense>
        </>
    )
}
export default Lazy