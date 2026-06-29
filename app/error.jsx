'use client'

import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div
            className="container"
            style={{
                width: "100%", height: "100vh", display: "flex", justifyContent: "center",
                alignItems: "center", flexDirection: "column", backgroundColor: "red"
            }}
        >
            <h2>هر چیزی می تونه غلط باشه!!!!</h2>
            <h2>خطایی رخ داده است😱😱😱😱</h2>
            <h2>{error.message}</h2>

            <button onClick={() => reset()}>
                لطفا دوباره تلاش کنید
            </button>

        </div>
    )
}