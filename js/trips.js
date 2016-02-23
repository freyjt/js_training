


function Trip(name, distance) {
    if(typeof(name) === 'string' && typeof(distance) === 'number') {
        this.name = name;
        this.dist = distance;
        console.log("New trip created: " + this.tostring( ) );
    }
    else {
        console.log("Could not instantiate trip. Arguments not of expected types.");
    }

}
Trip.prototype.tostring = ( ) => {
    return "Trip: " + this.name + " is " + this.distance + " in length.";
}
Trip.prototype.getDistance = ( ) => {
    return this.distance;
}
Trip.prototype.equals      = ( tripCompared ) => {
    if( this.name === tripCompared.name &&
        this.distance === tripCompared.name ) {
        return true;
    } //else
    return false;
}






function TripAggregator( ) {
    this.trips = [];
}
TripAggregator.prototype.addTrip = (ioTrip) => {

    if(! ioTrip instanceof Trip ) {
        console.log("Cannot add a non-trip item to a TripAggregotor.");
    }
    else {
        this.trips.push( ioTrip );
    }

}
TripAggregator.prototype.findClosestTrip = (distIn) => {
    if(typeof(distIn) !== 'number') {
        console.log("FindClosestTrip must recieve a number argument");
        return null;
    } else {
        var i;
        var leastDiff = 1000000;
        var tempDiff  = 0;
        var holdSmallTrip = null;
        for(i = 0; i < this.trips.length; i++) {
            tempDiff = Math.abs( distIn - this.trips[i].getDistance() );
            if(tempDiff < leastDiff) {
                leastDiff     = tempDiff;
                holdSmallTrip = this.trips[i];
            }
        }

        return holdSmallTrip;
    }
}