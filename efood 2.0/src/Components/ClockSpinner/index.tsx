import { ClockLoader } from "react-spinners";
import { Container } from "./styles";
import { cores } from "../../Global";

const ClockSpinner = () => {
  return (
    <Container>
      <ClockLoader color={cores.vermelho} />
    </Container>
  );
};

export default ClockSpinner;
