function fetchData()
{
    return new Promise((resolve)=>
    {
        resolve('data');
    })
}
async function display()
{
    const data = await fetchData();
    console.log(data);
}
display()