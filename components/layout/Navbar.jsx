const Navbar = () => {
    
    return (
        <div className="top-area">
            <div className="header-area">
                <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

                    <div className="container">

                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i className="fa fa-bars"></i>
                            </button>
                            <a className="navbar-brand" href="index.html">carvilla<span></span></a>

                        </div>
                        <div  id="navbar-menu">
                            <ul className="navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                <li className="scroll">خانه</li>
                                <li className="scroll">سرویس ها</li>
                                <li className="scroll">ماشین جدید</li>
                                <li className="scroll">ورود به صفحه کاربری</li>                                
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="clearfix"></div>

            </div>
        </div>
    )

};

export default Navbar;