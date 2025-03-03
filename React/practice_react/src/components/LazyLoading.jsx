import React, { lazy, Suspense } from "react";
const LazyComponent = lazy(()=> import ('../components/child'));
function LazyComp()
{
    return(
    <Suspense fallback = {<h1>loading</h1>}>
        <LazyComponent/>
    </Suspense>
    )
}
export default LazyComp