
import {useEffect, useState} from 'react'
import api from '../core/api/api'
function Effect()
{
  const [data,setData]= useState([]);
  useEffect(()=>
  {
    api.get('./users')
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err));
  })
return(
<>
{data.map((item)=>

<tr>
  <td key={item.index}>{item.id}</td>
  <td>{item.name}</td>
</tr>

)}
</>
)
}
export default Effect