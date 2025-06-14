export const Paragraph: React.FC<{ title: string; description: string }> = (
  props
) => (
  <div className="py-2">
    <p className="text-xl text-black py-1.5 font-semibold">{props.title}</p>
    <p className="text-sm font-medium text-gray-600">{props.description}</p>
  </div>
);
