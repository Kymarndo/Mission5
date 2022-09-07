import regoSearchStyles from "./RegoSearch.module.css"
import image from "./photo-1534708112740-cb40ecb0663e.jpg"

export default function RegoSearch() {
    return (
        <div>
            <img src={image} alt="" />
            <div className={regoSearchStyles.infoside}>
                <>
                    <p className={regoSearchStyles.title1}>Car Insurance</p>
                    <p className={regoSearchStyles.subtitle1}>Affordable Insurance from the Car Experts</p>
                </>
                <div className={regoSearchStyles.infosection}><h1 className={regoSearchStyles.overlayinfo}>Get your quote in less than 2 minutes.</h1>
                <h1 className={regoSearchStyles.overlayinfo}>Enter your rego to get started :</h1></div>   
                <input type={'text'} className={regoSearchStyles.regoinput} placeholder="Enter your Rego..."></input>               
                <button className={regoSearchStyles.regosubmitbtn}>Go</button>
                <p className={regoSearchStyles.insurancelink}>View Insurance Types</p>
            </div>
        </div>
    )
}