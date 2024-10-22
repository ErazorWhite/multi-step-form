export const SelectPlan = () => {
    return (
        <>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>

            <input id="arcade" value="arcade" type="radio"/>
            <label htmlFor="arcade">Arcade</label>

            <input id="advanced" value="advanced" type="radio"/>
            <label htmlFor="advanced">Advanced</label>

            <input id="pro" value="pro" type="radio"/>
            <label htmlFor="pro">Pro</label>

        </>
    )
}
