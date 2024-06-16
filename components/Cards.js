import { Poppins } from "next/font/google";

const pop = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Cards = ({ title, description }) => {
  return (
    <div className={`${pop.className}`}>
      <div className="w-96 h-64 duration-500 group overflow-hidden relative rounded-lg bg-primary border-2 border-light text-neutral-50 p-4 flex flex-col justify-evenly">
        <div className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-cyan-900 right-1 -bottom-24"></div>
        <div className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-[#FF8080] right-12 bottom-12"></div>
        <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-cyan-800 right-1 -top-12"></div>
        <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24  rounded-full bg-secondary group-hover:-translate-x-12"></div>
        <div className="z-10 flex flex-col w-full h-full">
          <span className="text-2xl font-bold">{title}</span>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
