import { Center, Input, Box, Text } from "@chakra-ui/react";
import { login } from "../../services/login";
import CustomButton from "../CustomButton/CustomButton";

const Login: React.FC = () => {
  return (
    <Box
      backgroundColor="#1e032c"
      display="flex"
      flex={1}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        backgroundColor="#00000050"
        p={10}
        borderRadius={20}
      >
        <Center>
          <Text fontSize="3xl" color="white" mb={5}>
            Faça login
          </Text>
        </Center>
        <Input type="text" placeholder="Usuário" mb={2} />
        <Input type="password" placeholder="Senha" mb={2} />
        <CustomButton
          title="Entrar"
          onClick={() => login({ customer: "Felipe" })}
        />
      </Box>
    </Box>
  );
};

export default Login;
