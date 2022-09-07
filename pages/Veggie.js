import Image from "next/image";

export default function Veggie() {
  return (
    <>
      <p>The new Veggiefood</p>

      <p>Healthy food</p>
      <Image
        alt=""
        src="https://images.unsplash.com/photo-1556386470-bcdc6a5e9b9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=990&q=80"
        width={2400}
        height={1599}
        layout="responsive"
      />
    </>
  );
}
