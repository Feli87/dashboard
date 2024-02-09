
export default function page() {

    const handleform = async (formData) => {
        "use server"
        console.log(formData);
    }
    return (
        <>
            <form action={handleform}>
                <input type="text" name="name" />
                <input type="text" name="email" />
                <input type="text" name="phone" />
                <input type="text" name="address" />
                <input type="text" name="country" />
                <input type="text" name="comments" />
                <button>Submit</button>
            </form>
        </>
    )
}
