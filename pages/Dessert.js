import Image from "next/image";

export default function Dessert() {
  return (
    <>
      <p>This are the new desserts</p>
      <Image
        alt=""
        src="https://images.unsplash.com/photo-1469533778471-92a68acc3633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        width={2400}
        height={1599}
        layout="responsive"
      />
    </>
  );
}
