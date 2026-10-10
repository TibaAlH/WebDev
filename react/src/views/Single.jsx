import { useLocation, useNavigate } from "react-router";

const Single=()=>{
    const { state } = useLocation();
    const navigate = useNavigate();
    const item = state.item;
    
    return(
        <>
            <h1>{item.title}</h1>
            <p>{item.description}</p>

            {item.media_type === "image/jpeg" ||
            item.media_type === "image/png" ? (
                <img src={item.filename} alt={item.title} />
            ) : (
                <video src={item.filename} controls />
            )}

            <p>File size: {item.filesize}</p>
            <p>Type: {item.media_type}</p>

            <button onClick={() => navigate(-1)}>Go back</button>
        </>
    );
};

export default Single;