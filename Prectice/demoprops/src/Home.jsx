import React from 'react'

const Home = ({ abc, color, sum }) => {
    return (
        <div>
            <h1> A is:-{abc}</h1>
            <h2>color:-
                <ul>
                    {
                        color.map((c) => {
                            return (
                                <p style={{ color: c }}>{c}</p>
                            )
                        })

                    }
                </ul>
            </h2>

            <h2>ans:-{sum()}</h2>
        </div>
    )
}



export default Home
