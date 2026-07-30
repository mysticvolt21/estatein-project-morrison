import { useEffect, useState } from "react";
import SearchAndFilters from "../../components/form/FormFieldsComponents/SearchAndFilters";
import { propertiesData } from "../../data/Properties/PropertisData";
import Container from "../../layouts/Container";
import { useDispatch } from "react-redux";
import { subscribeToProperties } from "../../redux/thunks/propertiesActions";
function SearchAndFiltersSection({
  onSearchResults
}) {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectValues, setSelectValues] = useState({});
  useEffect(() => {
    const unsubscribe = dispatch(subscribeToProperties());
    return () => {
      if (typeof unsubscribe === "function") unsubscribe();
    };
  }, [dispatch]);
  const handleSearch = (term, values) => {
    setSearchTerm(term);
    setSelectValues(values);
    onSearchResults(term, values);
  };
  const handleSelectChange = (name, value) => {
    const updated = {
      ...selectValues,
      [name]: value
    };
    setSelectValues(updated);
    onSearchResults(searchTerm, updated);
  };
  return <Container className="relative z-30 mt-[-40px] lg:mt-[-120px] xl:mt-[-150px] lg:translate-y-[-26.1538%]">
      <SearchAndFilters searchData={propertiesData.searchSection} filterData={propertiesData.searchFilterSection} onSearch={handleSearch} onSelectChange={handleSelectChange} />
    </Container>;
}
export default SearchAndFiltersSection;
