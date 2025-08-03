export const Servicevertical: React.FC<{
  title: string;
  description: string;
  title2: string;
  description2: string;
  title3: string;
  description3: string;
}> = (props) => (
  <div className="py-3">
    <div className="border-b-2 border-black py-3">
      <div className="flex justify-between items-center w-full px-8">
        <p className=" text-black text-xl ">{props.title}</p>
        <p className=" text-black text-xl">{props.description}</p>
      </div>
    </div>
    <div className="border-b-2 border-black py-3">
      <div className="flex justify-between items-center w-full px-8">
        <p className=" text-black text-xl ">{props.title2}</p>
        <p className=" text-black text-xl">{props.description2}</p>
      </div>
    </div>
    <div className="py-3">
      <div className="flex justify-between items-center w-full px-8">
        <p className=" text-black text-xl ">{props.title3}</p>
        <p className=" text-black text-xl">{props.description3}</p>
      </div>
    </div>
  </div>
);
