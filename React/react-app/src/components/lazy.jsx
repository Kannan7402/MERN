import React,{lazy, Suspense} from "react";
const LazyComponent = lazy(()=>import('./lists'));
function Lazy ()
{
    return (
        <>
        <h1>Code splitiing using lazy</h1>
        <Suspense fallback = {<h1>Loading...</h1>}>
        <LazyComponent/>
        </Suspense>
        </>
    )
}
export default Lazy 