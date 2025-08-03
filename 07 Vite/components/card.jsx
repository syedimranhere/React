import React from 'react';

const Card = (props) => {
    const num = Math.ceil(Math.random() * 100000)
    const { username } = props
    return (
        <div className="flex flex-col rounded-xl  p-4"
            style={{
                border: '0.88px solid',

                backdropFilter: 'saturate(180%) blur(14px)',
                background: ' #ffffff0d',
            }}
        >
            <div>
                <img
                    src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
                    alt="nft-gif"
                    width="400"
                    height="400"
                    className="rounded-xl"
                />
            </div>
            <div className="flex flex-col  rounded-b-xl py-4 ">
                <div className="flex justify-between">
                    <h1 className="font-RubikBold ">{username || `User # ${num} `}</h1>

                </div>

            </div>
        </div>
    );
};

export default Card;