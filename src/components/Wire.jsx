
import fioLigado from './img/fioligado.png';
import fioDesligado from './img/fiodesligado.png';
import "./Wire.css"


const Wire = ({top, left, color, on}) => {

    return (
        <>
            <div style={
                {
                    position: "absolute",
                    top: `${top}px`,
                    left: `${left}px`,
                    color: color,
                    gap: "20px"
                }
                }>
                {on ? (<><img src={fioLigado} alt="" /></>) : (<><img src={fioDesligado} alt="" /></>)}
            </div>
        </>
    )
}

export default Wire