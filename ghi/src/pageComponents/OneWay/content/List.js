import Modal from './Modal'
import { useState } from 'react';

const List = ({ title, liArr }) => {
    const links = liArr.map((item, index) => {
        return (<Modal key={item.quote} {...item} />)
    })

    return (
        <>
            <h5>{title}</h5>
            <ul>
            liArr.map((item, index) => (<Modal key={item.quote} {...item} />)

            </ul>

        </>

    )
}

const Support = ({ title, charArr, thanksMsg, setMsg, user}) => {


    console.log(charArr, setMsg)
    const charity = charArr.map((item, index) => {
        return (
            <div key={index} className="charDisplay">
                <input className="form-check-input" type="radio" name="charity" value={item.title} />
                <Modal key={item.title} {...item} />
            </div>
        )
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('handleSubmit: Working', e.target)
        const formdata = new FormData(e.target)
        let obj = {}
        for (let i of formdata.entries()) {
            console.log(i)
            obj[i[0]] = i[1]
        }
        console.log('handleSubmit: ON', obj)

        // make server call fetch...
        const token = JSON.parse(localStorage.getItem('token'))
        const resp = await fetch('http://localhost:4040/contribution', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                'Authorization': `Bearer: ${token}`
            },
            body: JSON.stringify(obj)
        });
        const data = await resp.json()
        console.log(data)
        if (data.success) {
            document.forms["gift"].reset()
            setMsg(`Thank you for your: $${data.data.amount} contribution`)
        } else {
            alert(data.message)
        }
    }

    return (
        <form onSubmit={handleSubmit} id="gift">
            <u>Select Payment Type</u>
            <div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="paymentType" id="paymentType1" value="single" defaultChecked />
                    <label className="form-check-label" htmlFor="paymentType1">Single Usage. (Suggest: $1.00 to $5.00)</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="paymentType" id="paymentType2" value="monthly" />
                    <label className="form-check-label" htmlFor="paymentType2">Monthly Usage. (Suggest: $15.00 to $20.00)</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="paymentType" id="paymentType3" value="once" />
                    <label className="form-check-label" htmlFor="paymentType3">One Time Gift. (Suggest: $10.00 to $1000.00)</label>
                </div>
                    <input className="amtBox" type="text" name="amount" id="oneTimeAmount" placeholder="amount" required />
            </div>
            <hr />
            {charity}
            <button type="submit" id="payBtn">Submit </button>
            <br />
            {thanksMsg}
        </form>
    )
}

const Membr = ({ mbrArr }) => {
    const arrMember = mbrArr.map((item, index) => {
        return (<Modal key={index} />)
    })
}

export {
    List,
    Membr,
    Support
}
