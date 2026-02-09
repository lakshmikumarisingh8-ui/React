export default function Header(props){
    return(
        <header>
            <p>Welcome {props.name} to our cafe. Your age is {props.age} and your address is {props.address}</p>
        </header>
    )
}