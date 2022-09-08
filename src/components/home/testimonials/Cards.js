import testimonialsStyles from "./Testimonials.module.css"


export default function Cards ({sect}) {
    return (
        <div className={testimonialsStyles.card}>
            <div className={testimonialsStyles.innerContainer}>
                <img src={sect.image} className={ testimonialsStyles.image} />
                <div className={testimonialsStyles.text}>{sect.text}</div>
            </div>
        </div>
        )
}