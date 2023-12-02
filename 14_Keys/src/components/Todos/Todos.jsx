function Todos({menu}) {
    console.log(menu);
    var list = menu.map((m)=>{
        return(<p key={m.id}>{m.name}</p>)
    })
    return(
        <>
            <div>
                {list}
            </div>
        </>
    )
}

export default Todos;