import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import { Fragment } from "react";


export default function FilteredEvents() {
  const router = useRouter();

  const filteredData = router.query.slug;

  if(!filteredData) {

    return (
      <p className="center">Loading...</p>
    )

  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth

  if(isNaN(numYear) || isNaN(numMonth) || 
  numYear > 2030 || numYear < 2021 || 
  numMonth < 1 || numMonth > 12
  ) {
    return (
      <p>Invalid Filter. Please adjust your values!</p>
    )
  }
 
  const FilteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!FilteredEvents || FilteredEvents === 0 ) {
    return(
      <p>No Events Found for the chosen filtered filter!</p>
    )
  }

  const date = new Date(numYear , numMonth - 1);

    return (
      <Fragment>
        <ResultsTitle date={date}/>
        <EventList items={FilteredEvents}/>
      </Fragment>
    
    )
  }