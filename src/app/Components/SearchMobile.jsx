import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";
import LocationSelection from "./LocationSelection";

const SearchMobile = () => {
  return (
    <div className="xl:hidden">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4">
          {/* Location Selection */}
          <LocationSelection />
          {/* Date Selection */}
          <DateSelection />
          {/* Hours Selection */}
          <HoursSelection />
          {/* btn */}
          <div className="flex items-center px-6">
            <button className="btn btn-sm btn-accent w-[164px] mx-auto">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMobile;
