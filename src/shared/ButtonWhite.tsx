import Link from "next/link";

export const ButtonWhite: React.FC<{ title: string, link: string }> = (props) => (
  <Link href={props.link} className=" py-4 w-full h-11  flex items-center justify-center border-1 border-black text-black font-light my-2 text-lg">
    <span>{props.title}</span>
  </Link>
);
