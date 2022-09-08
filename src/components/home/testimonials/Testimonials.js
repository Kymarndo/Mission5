import Cards from "./Cards"
import { data } from "./TestimonialsInfo.js"
import testimonialsStyles from "./Testimonials.module.css"


export default function Testimonials() {
  return (
    <div className={testimonialsStyles.outerContainer}>
      <div className={testimonialsStyles.outerContainerText}>
        <h1 className={testimonialsStyles.outerTitle}>Why Turners?</h1>
        <p className={testimonialsStyles.outerSubtitle}>No matter your needs, we have you covered. Protect your vehicles from breakdowns, accidents, fire and theft and 3rd Party damage</p>
        </div>
    <div className={testimonialsStyles.container}>
      {data.map((sect) => {
        return <Cards sect={sect} />;
      })}
    </div>
    </div>)
}