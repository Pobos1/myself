import Link from "next/link";

export const ButtonBlack: React.FC<{ title: string, link: string }> = (props) => (
  <Link href={props.link} className="py-4 w-full h-11 flex items-center justify-center bg-black text-white text-lg font-light mt-2">
    <span>{props.title}</span>
  </Link>
);
