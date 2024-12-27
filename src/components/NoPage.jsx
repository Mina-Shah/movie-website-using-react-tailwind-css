import { useNavigate } from "react-router-dom";

const NoPage = () => {
    const navigate = useNavigate();
    return (
      <>
      <div className="p-48 flex justify-center items-center">
      <h1 className="text-6xl text-lime-600  p-3 ">404 Error</h1>
      <button onClick={() => navigate('/home')} 
        className="text-2xl ml-5 bg-lime-600 rounded p-2 mt-2 hover:text-lime-900"
        >Go back to Home</button>
      </div>
      </>
    
    )
  };
  
  export default NoPage;
  