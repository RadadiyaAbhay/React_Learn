import  CardNews from "../CardNews/CardNews";

function News() {
    var ne = [{title : 'Best Coffee Shops In The State You Should Know' , des : 'The phrasal sequence of the is now so that many campaign and benefit' , src:'https://techwind-next.vercel.app/_next/image?url=%2Fimages%2Fcafe%2Fb1.jpg&w=1920&q=75'}, {title : 'The Culture And Coffee Customs Nowadays', des : 'The phrasal sequence of the is now so that many campaign and benefit' ,src:'https://techwind-next.vercel.app/_next/image?url=%2Fimages%2Fcafe%2Fb2.jpg&w=1920&q=75'},{title : 'Best Cup Of Drinks For Your Break Today', des : 'The phrasal sequence of the is now so that many campaign and benefit' ,src:'https://techwind-next.vercel.app/_next/image?url=%2Fimages%2Fcafe%2Fb3.jpg&w=1920&q=75'},{title : 'How to Maximize Time Spent at the Gym', des : 'The phrasal sequence of the is now so that many campaign and benefit',src:'https://techwind-next.vercel.app/_next/image?url=%2Fimages%2Fgym%2Fblog1.jpg&w=1920&q=75'},{title : 'Best Coffee Shops In The State You Should Know' , des : 'The phrasal sequence of the is now so that many campaign and benefit' , src:'https://techwind-next.vercel.app/_next/image?url=%2Fimages%2Fcafe%2Fb1.jpg&w=1920&q=75'}, {title : 'The Culture And Coffee Customs Nowadays', des : 'The phrasal sequence of the is now so that many campaign and benefit' ,src:'https://techwind-next.vercel.app/_next/image?url=%2Fimages%2Fcafe%2Fb2.jpg&w=1920&q=75'}]
    return(
        <>
            <div className="container">
                <div className="row">
                    <CardNews ls={ne}/>
                </div>
            </div>
        </>
    )
}
export default News;