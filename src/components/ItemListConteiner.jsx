function ItemListConteiner(props){
    return(
        <div style={{backgroundColor: '#3b3b3bff', border: "1px solid #3b3b3bff", marginTop: '100px',}}>
            <h2>{props.saludo}</h2>
            <h3>{props.slogan}</h3>
        </div>
    )
}

export default ItemListConteiner 