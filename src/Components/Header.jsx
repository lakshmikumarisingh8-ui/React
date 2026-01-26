export default function Header(props){
    return(
        <header>
            <h1>welcome {props.name} to our cafe your age is {props.age} your adress is {props.address}</h1>
        </header>
    )
}