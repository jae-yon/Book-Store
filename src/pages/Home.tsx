import Header from "../components/common/Header";
import { formatNumber } from "../utils/format";

function Home() {

  const COUNT = 1000000;
  return (
    <>
      <Header />
      <div>Body</div>
      <div>count: {formatNumber(COUNT)}</div>
    </>
  );
}

export default Home;