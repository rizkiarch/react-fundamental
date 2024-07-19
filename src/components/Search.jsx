import { useState } from "react";

function Search(props) {
    const [search, setSearch] = useState("");
    
    const onSearchChange = () => {
        props.onSearchChange(search);
    };

    const searchKeyDown = (e) => {
        if (e.key == "Enter") {
            onSearchChange();
        };
    };
    return (
        <>
        <div>Cari Artikel: <input onChange={(e) => setSearch(e.target.value) } onKeyDown={searchKeyDown} />
        <button onClick={onSearchChange}>cari</button>
        </div>
        <span>Ditemukan {props.totalPosts} pencarian dari kata {search} </span>
        </>
    )
}

export default Search;