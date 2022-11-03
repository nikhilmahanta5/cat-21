// import { useState } from "react";

// export default function Cart(props) {
//   const [index, setIndex] = useState(props.initialProducts);

//   const add = () => {
//     setIndex(index + 1);
//     console.log(index);
//   };

//   const del = () => {
//     setIndex(index - 1);
//     console.log(index);
//   };

//   return (
//     <div>
//       {count.map((element) => {
//         return (
//           <div>
//             <p>
//               <strong> {props.initialProducts[index].name} </strong>
//               {/* ({props.initialProducts[index].count})  */}
//               <button onClick={add}> + </button>
//               <button onClick={del}> - </button>
//             </p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
