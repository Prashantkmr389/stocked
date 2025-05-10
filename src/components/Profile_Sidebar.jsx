const options = ["My Orders", "Refer Earn", "Help Center", "Setting"]


function Profile_Sidebar({setOpen, open}) {
    const handleClick = ()=>{
        setOpen(!open);
    }
  return (
    <div className="cursor-pointer" onClick={handleClick}>
        <div>
            Upper
        </div>
        <div>
            {
                options.map((items, idx)=>(
                    <div key = {idx}>{items}</div>
                ))
            }
        </div>
    </div>
  )
}

export default Profile_Sidebar