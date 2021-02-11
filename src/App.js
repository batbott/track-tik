import React from "react";
import Navbar from "./components/Navbar";
import Sites from "./components/Sites";
import Details from "./components/Details";
import Pagination from "./components/Pagination";
import "./App.css";
import { HiOutlineSearch } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";

function App() {
  const [data, setData] = React.useState([]); // empty data

  const [showingDetails, setShowingDetails] = React.useState(false);

  const [detailsId, setDetailsId] = React.useState();

  const [currentPage, setCurrentPage] = React.useState(1);

  const [sitesPerPage] = React.useState(80);

  const fetchSites = fetch("https://tracktik-challenge.staffr.com/sites")
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.error(err);
    });

  React.useEffect(() => {
    fetchSites
      .then((resdata) => {
        setData(resdata);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [fetchSites]);

  const findDetailsById = () => {
    return (
      data && data.length > 0 && data.find((datum) => datum.id === detailsId)
    );
  };

  const indexOfLastSite = sitesPerPage * currentPage;
  const indexOfFirstSite = indexOfLastSite - sitesPerPage;
  const currentSites = data.slice(indexOfFirstSite, indexOfLastSite);

  //Browse pages
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navbar />
      <div className="content-wrapper">
        {!showingDetails && <h3 className="sites-header">Sites</h3>}
        {!showingDetails && (
          <div className="sites-bar">
            <h4>All Sites</h4>
            <div>
              <IoMdArrowDropdown size="1.2em" />
            </div>
            <div></div>
            <div>
              <IoFilterOutline size="1.2em" />
              <HiOutlineSearch size="1.2em" />
            </div>
          </div>
        )}
        <div className="wrapper">
          {showingDetails && (
            <Details
              details={findDetailsById()}
              onClickHandler={() => {
                setShowingDetails(false);
                setDetailsId(undefined);
              }}
            />
          )}
          {currentSites &&
            currentSites.length > 0 &&
            currentSites.map((datum) => (
              <div
                className={showingDetails ? "sites hide" : "sites"}
                key={datum.id}
              >
                <Sites
                  hideChevron={false}
                  onClickHandler={() => {
                    setShowingDetails(true);
                    setDetailsId(datum.id);
                  }}
                  imageUrl={
                    datum.images && datum.images.length !== 0 && datum.images[0]
                  }
                  mainContact={`${datum.contacts.main.firstName} ${datum.contacts.main.lastName}`}
                  siteAddress={datum.address && `${datum.address.street}`}
                  siteName={datum.title}
                />
              </div>
            ))}
        </div>
        {!showingDetails && (
          <div>
            <Pagination
              currentPage={currentPage}
              sitesPerPage={sitesPerPage}
              totalSites={data.length}
              paginate={paginate}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
