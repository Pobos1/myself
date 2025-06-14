export const Horizontaltabl: React.FC<{
  title: string;
  description: string;
  title2: string;
  description2: string;
  title3: string;
  description3: string;
}> = (props) => (
  <div className="py-6 flex justify-between w-full ">
    <div className="flex flex-col justify-between items-center py-6 w-1/3">
      <p className=" text-black text-4xl py-3">{props.title}</p>
      <p className=" text-black text-xl px-5 text-center pb-5">
        {props.description}
      </p>
    </div>

    <div className="flex flex-col justify-between items-center w-1/3 border-x-2 border-black py-6">
      <p className=" text-black text-4xl py-3">{props.title2}</p>
      <p className=" text-black text-xl px-5 text-center pb-5">
        {props.description2}
      </p>
    </div>

    <div className="flex flex-col justify-around items-center py-6 w-1/3">
      <p className=" text-black text-4xl py-3">{props.title3}</p>
      <p className=" text-black text-xl px-5 pb-5 text-center">
        {props.description3}
      </p>
    </div>
  </div>
);
