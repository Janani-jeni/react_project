import { UserContext } from "../App";

function Footer(){

    let date = new Date()

    return (
        <header>
            <h1>Footer</h1>
            <UserContext.Consumer>
                {
                    ({user})=>{
                        return(
                            <h1>{user.uName} - {date.getFullYear()}</h1>
                        )
                    }
                }
            </UserContext.Consumer>
        </header>
    )
}

export default Footer;