import { Button } from "@chakra-ui/react";

type Props = {
  title: string;
  onClick: () => void;
};

const CustomButton = ({ title, onClick }: Props) => {
  return (
    <Button colorScheme="teal" onClick={onClick}>
      {title}
    </Button>
  );
};

export default CustomButton;
