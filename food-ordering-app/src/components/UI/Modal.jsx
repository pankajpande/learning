import { Fragment } from "react";
import cssStyle from "./Modal.module.css" 
import ReactDOM from "react-dom";

const Backdrop = (props)=>{
    return (<div className={cssStyle['backdrop']} onClick={props.onClose}></div>);
}


const Overlay = (props)=>{
 return (<div className={cssStyle['modal']}>
    <div className={cssStyle['content']}> {props.children}</div>
 </div>);
}

const Modal = (props) => {
    const overlayElem = document.getElementById("overlays");
return (<Fragment>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,overlayElem)}
    {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,overlayElem)}
    
</Fragment>);

}


export default Modal;