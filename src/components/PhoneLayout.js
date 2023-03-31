export const PhoneLayout = ({imgUrl}) =>{
    return(
        <div className='phoneFrame'>
            <img src={imgUrl} className='phoneImg'/>
            <div className='phoneNotch'/>
        </div>
    )
}