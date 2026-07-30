import Header from "../../components/sharedComponents/Header";
import Container from "../../layouts/Container";
import PricingDetails from "./PricingDetails";
function PricingDetailsSection({
  data
}) {
  return <Container>
            <Header title={data.headline} description={data.description} withIcon />
            <PricingDetails note={data.note} listingPrice={data.listingPrice} Pricing={data.pricingDetailsCards} />
        </Container>;
}
export default PricingDetailsSection;
