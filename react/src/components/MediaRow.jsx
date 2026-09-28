import SingleView from "./SingleView";

const MediaRow= ({item, selectedItem, setSelectedItem}) =>{
    return (
        <>
            <tr onClick={()=> setSelectedItem(item)}>
                <td><img src={item.thumbnail} alt={item.title} /></td>
                <td>{item.filesize}</td>
                <td>{item.media_type}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
            </tr>  
        </>
    );
};
export default MediaRow;