import { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
  w_image: string;
  l_top: number;
}

export default function Template({ children, w_image, l_top }: Props) {
  useEffect(() => {
    const style = document.createElement("style");

    style.innerHTML = `
    @keyframes gradientBackground {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  
    .animated-gradient {
      background: linear-gradient(-45deg,#f7963e ,rgb(255, 170, 91),rgb(255, 123, 0)  );
      background-size: 300% 300%;
      animation: gradientBackground 2s ease infinite;
    }
  `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      className="animated-gradient relative flex flex-col overflow-hidden h-screen text-white"
      style={{ fontFamily: "Open Sans, sans-serif" }}
    >
      <img
        src="/ícone3@4x.png"
        alt=""
        className="absolute bottom-1/2 rotate-90 right-112 translate-y-1/2 w-190 z-50 pointer-events-none"
      />
      <div className={`absolute left-110 top-${l_top}`}>
        <div className="flex justify-center">
          <img src="/logo.png" alt="Logo SBRC 2025" className={w_image} />
        </div>
        <div className="flex flex-col justify-center items-center space-y-4">
          {children}
        </div>
      </div>
      <footer className="flex justify-center p-3 items-center mt-auto">
        <p className="text-s">16 de maio</p>
      </footer>
    </div>
  );
}
