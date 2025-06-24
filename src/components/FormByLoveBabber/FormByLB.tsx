import React from 'react'

const FormByLB = () => {
    const handleChange = (e) => {
        console.log(e, "e>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

    }
    return (
        <div>
            <input type="text" placeholder='First Name'
                onChange={handleChange}
            />
        </div>
    )
}

export default FormByLB