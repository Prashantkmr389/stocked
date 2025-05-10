
export const FlexBox = ({children, column, className})=>{
    return (
        <div className={`flex ${column ? "flex-col":"flex-row" } w-full h-auto gap-4 ${className}`}>
            {children}
        </div>
    )
}

