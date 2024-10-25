import {PageBox} from "../../PageBox/PageBox.tsx";

export const FinishingUp = () => (

    <PageBox headerText='Finishing up'
             descriptionText='Double-check everything looks OK before confirming.'>

        <div>
            <div>
                <div>
                    <h2>Arcade (Monthly)</h2>
                    <button>Change</button>
                </div>
                <span>$9/mo</span>
            </div>
            <p>Online service</p> <span>+$1/mo</span>
            <p>Larger stroage</p> <span>+$2/mo</span>
        </div>

        <p>Total (per month)</p> <span>+$12/mo</span>

    </PageBox>
)
