import quoteFormStyles from "./QuoteForm.module.css"
import { Link, Routes, Route } from "react-router-dom"
export default function QuoteForm() {
    return (
        <div className={quoteFormStyles.page}>
            <div className={quoteFormStyles.linkPosition}>

               <Link to="/"> <p className={quoteFormStyles.topLinks}>Insurance Overview</p></Link>
                <p>{">"}{">"}</p>
                <p className={quoteFormStyles.topLinks}>Instant Quote</p>
            </div>
            <div className={quoteFormStyles.container}>
                <h1 className={quoteFormStyles.instantQuoteText}>Instant Quote</h1>

                <h1 className={quoteFormStyles.formTitle}>Car Details</h1>
                <p className={quoteFormStyles.formText}>Search By Registration Number</p>
                <input className={quoteFormStyles.inputField}></input>
                <p className={quoteFormStyles.manualLink}>or manually input car details</p>
                <p className={quoteFormStyles.formText}>What is the address where your car is parked most of the time?</p>
                <input className={quoteFormStyles.inputField}></input>
                <h1 className={quoteFormStyles.formTitle}>Drivers</h1>
                <p className={quoteFormStyles.formText}>Will any of the drivers covered be under 25 years old?</p>
                <div className={quoteFormStyles.yesNoButtons}>
                    <button className={quoteFormStyles.yesNoButtonStyle}>Yes</button>
                    <button className={quoteFormStyles.yesNoButtonStyle}>No</button>
                </div>
                <button className={quoteFormStyles.nextButton}>Next</button>

            </div>
            <p className={quoteFormStyles.bottomLink}>{"<"}{"<"}Back to Insurance Overview</p>
        </div>)
}