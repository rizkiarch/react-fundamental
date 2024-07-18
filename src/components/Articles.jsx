function Article() {
    const name = "Ikay";
    const title = ["Tutorial Reactjs", "Tutorial Nextjs", "Tutorial Nodejs"]
    return (
        <>
            <div>{name}</div>
            <div>{title.map((title) => {
                return <div>{title}</div>
            })}</div>
        </>
    )
}

export default Article;