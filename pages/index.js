import Image from 'next/image';
import pizza from '../pages/pizza.jpg';



export default function Home() {
  return (
  <>
  <p>The new recipes</p>
         <Image   
         src={pizza}
         alt=""
         layout="responsive"
         width={2400}
         height={1599}
         />
         </>
  )}
