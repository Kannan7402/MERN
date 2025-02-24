async function fetchData()
{
    try{
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const response = await fetch(url);
        if(!response.ok)
        {
            console.log('network error');
        }
        const data = await response.json();
        console.log(data);
    }

    catch(error)
        {
            console.log(err);
        }
    }
fetchData();