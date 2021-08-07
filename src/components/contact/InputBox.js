import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"


const InputBox = ({ icon, type, placeholder, margin, name }) => {
    return (
        <>
            <InputGroup margin={margin}>
                <InputLeftElement children={icon} />
                <Input bg="white" type={type} placeholder={placeholder} name={name} width="100%" />
            </InputGroup>
        </>
    )
}

InputBox.defaultProps = {
    margin: 3
}

export default InputBox
