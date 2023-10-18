import Brand from "../../components/Brand/Brand";
import FlashSale from "../../components/FlashSale/FlashSale";
import Banner from "../../components/Header/Banner";
import Summary from "../../components/Summary/Summary";

const Home = () => {
  return (
    <div>
      <Banner />
      <Brand />
      <FlashSale />
      <Summary />
    </div>
  );
};

export default Home;
