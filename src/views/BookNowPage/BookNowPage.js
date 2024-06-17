import "./BookNowPage.css"
import bookNowPageData from "../../BookNowPageData"
import BookNowCard from "./../../components/BookNowCard/BookNowCard"

function BookNowPage() {
    return (
        <>
        <h1 className="bnp-heading">Book Exclusive Shows Time Here</h1>
            
            <div className="cards-conatiner">
                {
                bookNowPageData.map((bookcardbj, i) => {
                        const {
                            id,
                            title,
                            time1,time2,time3,time4
                        } = bookcardbj

                        return (<BookNowCard
                            key={i}
                            id={id}
                            time1={time1}
                            time2={time2}
                            time3={time3}
                            time4={time4}
                            title={title}
                        />)
                    })
                }
            </div>
        </>
    )
}

export default BookNowPage