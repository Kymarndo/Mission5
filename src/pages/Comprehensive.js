import CompInstant from "../components/comprehensive/instant/CompInstant"
import CompCoverage from "../components/comprehensive/coverage/CompCoverage"
import CompBenefits from "../components/comprehensive/benefits/CompBenefits"

export default function Comprehensive() {
    return (
      <div>
        <CompCoverage />
        <CompBenefits />
        <CompInstant />
      </div>
    );
}