// /* eslint-disable react/jsx-key */
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
// } from "@material-tailwind/react";
// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function Cards() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://165.227.138.148:8000/api/Products?PageIndex=0&PageSize=3")
//       .then((response) => setData(response.data))
//       .catch((error) => console.error(error));
//   }, []);
//   console.log(data.items);

//   return (
//     <>
//       {data.items &&
//         data.items.map((it) => (
//           <Card className=" h-full w-full" key={it.id}>
//             <CardHeader shadow={false} floated={false} className="h-[250px] ">
//               <img
//                 src={it.imageUrl}
//                 alt="cardimage"
//                 className="h-full w-full object-cover hover:scale-110 transition-all duration-300 ease-in-out"
//               />
//             </CardHeader>
//             <CardBody>
//               <div className="mb-2 flex items-center justify-between">
//                 <Typography className="font-medium">{it.title}</Typography>
//                 <Typography className="font-medium">{it.price}</Typography>
//               </div>
//               <Typography
//                 variant="small"
//                 color="gray"
//                 className="font-normal opacity-75"
//               >
//                 {it.description}
//               </Typography>
//             </CardBody>
//             <CardFooter className="pt-0">
//               <Button
//                 fullWidth={true}
//                 className="bg-primary text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
//               >
//                 Add to Cart
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//     </>
//   );
// }
