import { Button as BsButton } from 'react-bootstrap';

type ButtonProps = {
  children?: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => (
  <BsButton variant="primary">{children}</BsButton>
);

export default Button;
