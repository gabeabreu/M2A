import { Dots } from "react-activity";
import "react-activity/dist/library.css";

interface Props {
  title: string;
  color?: string;
  loading?: boolean;
  onClick?: () => any;
}

const Button: React.FC<Props> = ({ loading, title, color, onClick }: Props) => {
  function handleClick() {
    if (onClick) onClick();
  }

  return (
    <div onClick={handleClick}>
      <button
        style={{ backgroundColor: color ? color : "none" }}
        disabled={loading}
        type="submit"
        className={`${
          color ? "" : "bg-secondary-blue"
        } w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-md text-md font-medium text-white hover:bg-[#1289d9] focus:outline-none duration-500`}
      >
        {loading ? <Dots color="#FFF" size={16} /> : title}
      </button>
    </div>
  );
};

export default Button;
