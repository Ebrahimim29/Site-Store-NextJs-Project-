const CarsLayout = ({children}) => {
    return(
        <>
            
            {children}

            <div 
                style={{
                    backgroundColor:"blue",
                    width:"10rem",
                    cursor:"pointer",
                    height:"10rem",
                    position:"fixed",
                    top:"20rem",
                    left:"20rem",
                    borderRadius:"10rem",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    color:"white",
                    flexDirection:"column",
                    gap:"1rem",
                    fontSize:"2rem"}} >
                
                <i className="fa fa-shopping-basket"></i>
                کارت من
            </div>
        </>
    )
};

export default CarsLayout;