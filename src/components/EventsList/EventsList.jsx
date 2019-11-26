import React from "react";
import EventCard from "../EventCard/EventCard";
import "./EventsList.css";

const EventsList = ({ events }) => {
    return (
        <div>
            {events && events.length >= 1 && (
                <div>
                    <h2 className="Heading-medium EventsList-heading">
                        Upcoming Events
                    </h2>
                </div>
            )}
            <div className="EventsList">
                {events &&
                    events.map(event => {
                        return event && event.website ? (
                            <a
                                className="EventsList-listItem as-link"
                                key={event.title}
                                href={event.website}
                            >
                                <EventCard
                                    startDate={event.utc_start_date}
                                    startTime={event.start_date_details.hour}
                                    endTime={event.end_date_details.hour}
                                    title={event.title}
                                    description={event.description}
                                    isLink
                                    picture={
                                        event.image.sizes
                                            ? event.image.sizes.medium.url
                                            : event.image
                                            ? event.image.url
                                            : null
                                    }
                                />
                            </a>
                        ) : (
                            <div
                                className="EventsList-listItem as-div"
                                key={event.title}
                            >
                                <EventCard
                                    startDate={event.utc_start_date}
                                    startTime={event.start_date_details.hour}
                                    endTime={event.end_date_details.hour}
                                    title={event.title}
                                    description={event.description}
                                    picture={
                                        event.image.sizes
                                            ? event.image.sizes.medium.url
                                            : event.image
                                            ? event.image.url
                                            : null
                                    }
                                />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default React.memo(EventsList);
