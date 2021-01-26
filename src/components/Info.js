import React, {useState} from 'react'


const Info = () => {

const [name, setName] = useState()
const [address, setAddress] = useState()
const [subv, setSubv] = useState()
const [phone, setPhone] = useState()
const [date, setDate] = useState()



return(
<div className="info-page">

<input type="text" placeholder="info"></input>

</div>
)
}
export default Info