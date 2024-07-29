import React from "react";
import GridBasicExample from '../component/account/Input'
import CustomButton from '../component/account/CustomButton'
const addStyle = {
    marginLeft: '0px'
}

function Profile() {

    return (
        <div>
            <GridBasicExample />
            <CustomButton title='SAVE SETTING' style={addStyle} />
        </div>
    )
}
export default Profile