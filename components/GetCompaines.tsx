"use client";
import axios from 'axios'
import React from 'react'

const GetCompaines = () => {

    return (
        <div
            onClick={() => {
                axios.get(`https://uk.bettshow.com/solution-providers?page=2&searchgroup=A5545817-exhibitors`).then(res => {
                    const dom = new DOMParser().parseFromString(res.data, 'text/html');
                    console.log(dom);
                })
            }}
        >GetCompaines</div>
    )
}

export default GetCompaines