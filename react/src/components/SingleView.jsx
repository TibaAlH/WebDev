const SingleView=({item, setSelectedItem})=>{
    return(
        <>
        <dialog open>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <img src={item.filename} alt={item.title} />
            <button onClick={()=>setSelectedItem(null)}>close</button>
        </dialog>
        </>
    );
};

export default SingleView;