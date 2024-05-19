import cssStyle  from "./Card.module.css"

const Card = (props) => {
return <div className={cssStyle['card']}>
{props.children}
</div>

}

export default Card;