import styles from "./SearchVideoList.module.css";
import VideoList from "../../components/VideoList"
import { useEffect, useState } from "react";
import Loader from "../Loader";

// Filtrando videos por categoria
function filterVideos(videos, searchText) {
    return videos.filter((videos) => videos.category.includes(searchText) || videos.title.includes(searchText))
}

function SearchVideoList({ videos }) {

    const [ searchText, setSearchText ] = useState('')
    const foundVideos = filterVideos(videos, searchText)

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 900)
    }, []);

    return (
        <sectiom className={styles.container}>
            <input 
                type="search"
                placeholder="Pesquisar..."
                value={searchText}
                onChange={event => setSearchText(event.target.value)}
            />
            { loading ? <Loader /> :
                <VideoList 
                    videos={foundVideos}
                    emptyHeading={`Sem vídeos sobre "${searchText}"`}
                />
            }
        </sectiom>
    );
}

export default SearchVideoList;
