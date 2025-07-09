export const Verticaltabl: React.FC<{
  title: string;
  description: string;
  title2: string;
  description2: string;
  title3: string;
  description3: string;
}> = (props) => (
  <div className="py-3">
    <div className="border-b-2 border-black py-3">
      <div className="flex justify-between items-center w-full px-3">
        <p className="mx-auto px-16 text-black text-4xl ">{props.title}</p>
        <p className=" text-black text-xl">{props.description}</p>
      </div>
    </div>
    <div className="border-b-2 border-black py-6">
      <div className="flex justify-between items-center w-full px-3">
        <p className="mx-auto px-5 text-black text-4xl ">{props.title2}</p>
        <p className=" text-black text-xl">{props.description2}</p>
      </div>
    </div>

    <div className="flex justify-around items-center w-full py-6 px-3">
      <p className="px-3 text-black text-4xl ">{props.title3}</p>
      <p className=" text-black text-xl me-auto">{props.description3}</p>
    </div>
  </div>
);
