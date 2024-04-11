import styles from "./SearchVideoList.module.css";
import VideoList from "../../components/VideoList"
import { useState } from "react";

// Filtrando videos por categoria
function filterVideos(videos, searchText) {
    return videos.filter((videos) => videos.category.includes(searchText) || videos.title.includes(searchText))
}

function SearchVideoList({ videos }) {

    const [ searchText, setSearchText ] = useState('')
    const foundVideos = filterVideos(videos, searchText)

    return (
        <sectiom className={styles.container}>
            <input 
                type="search"
                placeholder="Pesquisar..."
                value={searchText}
                onChange={event => setSearchText(event.target.value)}
            />
            <VideoList 
                videos={foundVideos}
                emptyHeading={`Sem vídeos sobre "${searchText}"`}
            />
        </sectiom>
    );
}

export default SearchVideoList;
