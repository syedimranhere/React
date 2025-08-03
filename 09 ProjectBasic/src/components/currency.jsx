import React from "react";

import React from 'react';
import { useState, useEffect } from "react";

const Currency = () => {

    //first fetch data
    const [curr, setCurr] = useState(usd)
    const [data, setData] = useState()
    const [convertedAmount, setConvertedAmount] = useState(0)
    const [amount, setAmount] = useState(0)

    useEffect(() => {
        fetch(`https://2024-03-06.currency-api.pages.dev/v1/currencies/${curr}.json`).then((res) =>
            res.json()
        ).then((res) => {
            setData(res[curr])

        })
    }, [curr])


    function convert() {

    }
    return (
        <div>


        </div>
    );
};

export default Currency;