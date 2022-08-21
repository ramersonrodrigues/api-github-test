import { BoxLeft, BoxRigth, Container } from './styled'
import { FiAlertOctagon } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { useState } from 'react';

const Alert = (props) => {

    const [visible, setVisible] = useState(true);

    return (
        <Container visible={visible}>
            <BoxLeft>
                <FiAlertOctagon size={40} />
            </BoxLeft>
            <BoxRigth>
                <label>{props.text}</label>
                <IoIosClose onClick={() => { setVisible(false) }} size={25} />
            </BoxRigth>
        </Container>
    )
}

export default Alert