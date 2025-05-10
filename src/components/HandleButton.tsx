import { useNavigate } from "react-router-dom";

interface Props {
  link: string;
  text: string;
  width: string;
  color: string;
}

export default function HandleButton({ link, text, width, color }: Props) {
  const router = useNavigate();

  const redirectPage = () => {
    router(link);
  };

  return (
    <div className="m-1">
      <button
        className={`font-bold rounded-lg text-lg w-${width} h-16 bg-[${color}] text-white flex items-center justify-center shadow-xl hover:bg-[#2e2e2e] transition duration-300`}
        onClick={redirectPage}
      >
        {text}
      </button>
    </div>
  );
}
