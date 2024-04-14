type Props = {
  customer: string;
};
export const login = ({ customer }: Props): void => {
  alert(`Bem vindo, ${customer}!`);
};
