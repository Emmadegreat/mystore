import GoogleMapReact from 'google-map-react'
import React from 'react'

const Contact = () => {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

    return (
        <section className='contact-page'>
            <div className="map" style={{width:"100%", height:"500px"}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />

                </GoogleMapReact>
            </div>
        </section>
    )
}

export default Contact
