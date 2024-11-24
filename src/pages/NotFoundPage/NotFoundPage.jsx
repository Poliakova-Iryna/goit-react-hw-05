import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <h2>Oooops...page not found</h2>
            <Link to='/'>Home</Link>
        </div>
    );
};

export default NotFoundPage;