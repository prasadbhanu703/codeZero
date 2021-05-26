import { Link, useParams } from "react-router-dom";
import ErrorBoundary from './ErrorBoundary';

const Header = () => {
  const { page } = useParams() || "head";

  const HeaderLink = ({ page }) => {
    const title = page.charAt(0).toUpperCase() + page.slice(1);
    return (
      <Link to={`/${page}`} className="linkTagCSS">
        {title}
      </Link>
    );
  };

  return (<>
      <div className="header">  
       <div style={{color:"blue",fontSize:"large"}}>   
        <b><ErrorBoundary> <HeaderLink page="landkit." selected={page === "home"} /> </ErrorBoundary>   </b>
       </div>          
       {/* <span style={{margin:"15%"}}> */}
       <div className="tags">
        <ErrorBoundary> <HeaderLink page="dataList" selected={page === "DataList"}  /> </ErrorBoundary>
        <ErrorBoundary><HeaderLink page="contactForm" selected={page === "wishList"} /></ErrorBoundary>
        <ErrorBoundary><HeaderLink page="account" selected={page === "account"} /></ErrorBoundary>
        <ErrorBoundary><HeaderLink page="documentation" selected={page === "documentation"} /></ErrorBoundary>
        </div>
        <div>
        <button className="button"> Buy now </button>
        </div>
      </div>
      </>
  );
};

export default Header;
