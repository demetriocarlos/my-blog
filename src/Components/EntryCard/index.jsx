

 

export const EntryCard = (props) => {
     console.log(props)
    const {entryData} = props
    const {entryTitle, content, picture} = entryData

    const logo = "https://th.bing.com/th/id/R.fe987f5cf401bc167a7432be3c724b51?rik=e1Mvqjb8m3w9lA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-Gf9YzQl4V_o%2fT9dVpPa51AI%2fAAAAAAAAfGk%2fHN7qJxbHe24%2fs1600%2fPantera-Negra_Imagenes-de-Animales.jpg&ehk=IUbhwNkKO%2bN%2bMLLBFkdMOkwfgGBS%2fmsB%2bou%2bv4vYXI8%3d&risl=&pid=ImgRaw&r=0"
    const entryContent = " Lorem ipsum, dolor sit amet consectetur adipisicing elit. quasi ab reprehenderit veritatis perspiciatis iure dolores cumque sed quia commodi consequatur"
  return (
    <div className="blog-entry">
        <img src={picture} width="400px" alt="" />
        <h2>{entryTitle}</h2>
        <p>{
            content.length > 30
                ? `${content.slice(0,30)}...`
                : content
            }</p>
            <button>Ver mas</button>
    </div>
  )
}
