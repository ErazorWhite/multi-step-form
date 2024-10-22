export const PersonalInfo = () => {
    return (
        <>
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>
            <label htmlFor="name"></label><input id="name" type="text"/>
            <label htmlFor="email"></label><input id="email" type="text"/>
            <label htmlFor="phone"></label><input id="phone" type="text"/>
        </>
    )
}
