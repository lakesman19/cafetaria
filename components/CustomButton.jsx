import React from 'react'

const CustomButton = ({ title, handleClick, containerStyles, type, Icon }) => {

    return (
        <div>
            <button
                onClick={handleClick}
                className={containerStyles}
                type={type || 'button'}
            >
                {Icon && (
                    <div className='text-[1.5rem]'>
                        {Icon}
                    </div>
                )}
                <span>{title}</span>
            </button>
        </div>
    )
}

export default CustomButton