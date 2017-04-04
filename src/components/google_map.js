import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        // this.refs.map is where the google map will be injected to
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        return <div ref="map" />;
    }
}

export default GoogleMap;