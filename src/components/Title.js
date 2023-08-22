import React from 'react'
import { useTheme } from '../ThemeContext'

const Title = ({ text, children, fontSize, fontWeight }) => {
    const { themeColor } = useTheme()
    text = text.split(" ")
    return (
        <div className='pb-4 border-b border-white border-dashed mb-5'>
            <h2 className={`${fontSize} ${fontWeight}`}>{text.map((item, index) => {
                return (
                    <span key={index + item} className={index % 2 === 0 ? "text-white" : `text-${themeColor}`}> {item}</span>
                )
            })}</h2>
            {children}
        </div>
    )
}

export default Title
