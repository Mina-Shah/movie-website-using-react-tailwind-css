import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NoPage = () => {
    const navigate = useNavigate();
    return (
      <>
      <div className="pt-40 flex justify-center items-center">
      <h1 className="text-2xl p-3">404 Error</h1>
      <button onClick={() => navigate('/home')} 
        className="text-2xl hover:text-blue-800"
        >Go back to Home</button>
      </div>
      </>
    
    )
  };
  
  export default NoPage;
  