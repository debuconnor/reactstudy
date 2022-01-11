function Nav(props) {
    return (
        <nav>
            <ul>
                {
                    props.data.map((list)=>{
                        return(
                            <li><a href="#">{list.item}</a></li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Nav;