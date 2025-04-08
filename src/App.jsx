import { useState } from "react";
import "./App.css";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-screen h-screen flex justify-center">
        <div className="h-screen w-[50%] py-32 px-12">
          <div className="title ">
            <p className="text-white">Monesh Goyal</p>
            <p className="text-[#94928D]">Frontend Engineer</p>
          </div>
          <div className="description mt-12">
            <p className="text-white">Namaste</p>
            <p className="text-[#94928D] mt-4">
              I'm a frontend engineer passionate about crafting scalable,
              performant web applications with React, Next.js, and TailwindCSS.
              I love focusing on frontend architecture, developer experience,
              and performance optimizations, ensuring clean and efficient code
              that’s easy to maintain and delightful to use.
              <p className="text-[#94928D] mt-4">
                I primarily work with react, next.js, tailwindcss, and
                shadcn/ui. I'm deeply interested in frontend performance tuning,
                building devtools that improve workflows, and crafting ui/ux
                systems with strong design consistency. Outside of work, I often
                explore new technologies, experiment with side projects, and
                continue growing as a frontend specialist.
              </p>
            </p>
          </div>
          <div className="footer mt-32 flex items-center">
            <a href="https://x.com/GoyalMonesh">
              <FaXTwitter
                size={26}
                className="text-white cursor-pointer mr-4"
              />
            </a>
            <a href="https://github.com/2201monesh">
              <IoLogoGithub size={28} className="text-white cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
