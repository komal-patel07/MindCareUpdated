export default function FeedbackCart({ img, name, description , date }) {
  return (
    <div className="shadow-xl   my-10 px-12">
      <div className="border-b border-zinc-400 w-50 py-5">
        <img className="rounded-full  w-10 h-10" src={img} />

        <h3 className="text-2xl">{name}</h3>
      </div>
      <p className="w-70 py-3 h-30 text-zinc-400">{description}</p>
      <p className=" text-1.5 py-5  text-zinc-400">{date}</p>
    </div>
  );
}
