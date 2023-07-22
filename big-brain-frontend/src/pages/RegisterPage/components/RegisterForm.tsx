import Button from "../../../components/Button";
/**
 * @description Register form component that renders the user input fields
 */
const RegisterForm: React.FC = () => {
    return (
        <div>
            <h1 className={"text-2xl font-bold text-center"}>Game Editor Register</h1>
            <form className={'flex flex-col'}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password"/>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" id="confirmPassword"/>
                <Button
                    className={"my-3 mx-auto hover:underline hover:bg-white hover:text-zinc-800 hover:border-black hover:border-2"}
                    variant={"primary"}>Join</Button>
            </form>
        </div>
    );
}
export default RegisterForm;