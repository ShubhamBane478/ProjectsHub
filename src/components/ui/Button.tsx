import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { useNavigate } from "react-router-dom";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  btnText?: 'View Project' | 'Learn More' | string;
  link?: string; // Add a link prop for navigation
  disabled?: boolean;
};

export default function Button({ className, variant = 'primary', btnText, link,disabled, ...props }: ButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link); 
    }
  };

  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant }), className)}
      onClick={handleClick}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
}

const buttonVariants = cva(
  'py-2 px-4 rounded-md font-semibold hover:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
        secondary: 'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);
