const Header = (props) => {

    return(
        <div className="header p-4 text-white">

            <div className="dark-scarf"></div>

                <div className="row nav">
                    <div className="col logo">AI<span>Weather</span></div>

                    <div className="row nav-icons">
                        <div className="col">
                            <i class = 'ri-notification-3-line'></i>
                        </div>
                        
                        <div className="col">
                            <i class = 'ri-settings-3-line'></i>
                        </div>

                        <div className="col">
                            <i class = 'ri-search-line'></i>
                        </div>

                    </div>
                </div>

                <div className="row hero">

                    <div className="col">
                        <h2>
                            <i className="ri-map-pin-line"></i>
                            Osogbo, Osun State
                        </h2>

                        <h3>
                            <i className="ri-sun-line"></i>
                           {props.Weather.temperature | 20}℃
                        </h3>

                        <h3>
                            {/* <img src={props.Weather.weather_icons} alt="" /> */}
                            <i className="ri-cloud-fill"></i>
                            {/* {props.Weather.weather_descriptions} */}
                            Sunny
                        </h3>


                    </div>

                </div>
            
        </div>
    )

}

export default Header