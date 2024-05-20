import React from "react";
import { AiFillUpCircle } from "react-icons/ai";

const BackToTop: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.innerHeight + window.scrollY > window.innerHeight) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`rounded-full fixed right-10 bottom-10 text-white transition-all ease-out scale-${
        showTopBtn ? 100 : 0
      } origin-center place-content-center`}
      onClick={goToTop}
    >
      <AiFillUpCircle
        size="normal"
        color="#71717A"
        className="h-[80px] max-lg:h-[60px] hover:text-white cursor-pointer"
      />
    </div>
  );
};

export default BackToTop;
