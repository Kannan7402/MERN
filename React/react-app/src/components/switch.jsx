import React from "react";
function Day ()
{
//     let input = document.getElementById('input');
//     const [date,setDate] = useState(input);
//     function Handleclick(i){
//     switch(i)
//     {
//         case '1':
            
//                 setDate("monday") ; 
//                 break;
//             case '2':
            
//             setDate("tuesday") ;
//                 break;
//             case '3':
            
//             setDate("wednesday") ;
//                 break;
//             case '4':
            
//             setDate("thursday") ;
//                 break;
//             case '5':
            
//             setDate("friday") ;
//                 break;
//             case '6':
            
//             setDate("saturday") ;
//                 break;
//             case '7':
            
//             setDate("sunday") ;
//                 break;
//         }
// }
// return(
//     <>
//     <label htmlFor="name">Date</label>
//     <input type="text" id="input"onChange={(e)=>{Handleclick(e.target.value)}}></input>
//     <p>{date}</p>
//     </>
// )

const tasks = [
    { id:1 , name : 'kannan',day : 'mon'},
    {id :2, name : 'bala', day : 'tue'}
];
const getWorkday = (name)=>
{ 
    switch(name) {
            case 'kannan':
                return 'kannan come to work on monday';
            case 'bala':
                return 'bala come to work on tuesday';
                default : 
                return 'works all day';
    }
}
return(
    <>
    <h1>Day work</h1>
    <ul>{tasks.map((tasks,index)=>
    (
       <li key={index}>{getWorkday(tasks.name)}</li>
    ))}
    </ul>
    </>
)
}
export default Day;