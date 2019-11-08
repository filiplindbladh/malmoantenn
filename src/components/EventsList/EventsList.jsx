import React from "react";
import EventCard from "../EventCard/EventCard";
import "./EventsList.css";
const EventsList = ({ events }) => {
    return (
        <div className="EventsList">
            {events && events.length >= 1 && (
                <h2 className="Heading-medium">Upcoming Events</h2>
            )}
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
                                    event.image === false
                                        ? null
                                        : event.image.sizes.medium.url
                                }
                            />
                        </a>
                    ) : (
                        <div className="EventsList-listItem as-div">
                            <EventCard
                                startDate={event.utc_start_date}
                                startTime={event.start_date_details.hour}
                                endTime={event.end_date_details.hour}
                                title={event.title}
                                description={event.description}
                                picture={
                                    event.image === false
                                        ? null
                                        : event.image.sizes.medium.url
                                }
                                key={event.title}
                            />
                        </div>
                    );
                })}
        </div>
    );
};

export default React.memo(EventsList);
