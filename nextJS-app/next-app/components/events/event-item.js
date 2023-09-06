import Link from "next/link";
import classes from './event-item.module.css';
import Button from "../ui/button";

export default function EventItem(props) {
    const { tittle , image , date , location , id } = props;

    //for Date
    const HumanReadableDate = new Date(date).toLocaleDateString('en-US' , {
        day: 'numeric',
        month: 'long',
        year: 'numeric',

    });

    //For the Adress
    const formattedAdress = location.replace(', ' , '\n' );

    //For the Link
    const exploreLink = `/event/${id}`;

    return(
        <div>
            <li className={classes.item}>
                <img src={'/' + image} alt={tittle} />
                <div className={classes.content}>
                    <div className={classes.summary}>
                        <h2>{tittle}</h2>
                        <div className={classes.date}>
                            <time>{HumanReadableDate}</time>
                        </div>
                        <div className={classes.address}>
                            <address>{formattedAdress}</address>
                        </div>
                    </div>
                    <div className={classes.actions}>
                        <Button link={exploreLink}>Explore Event</Button>
                    </div>
                </div>
            </li>
        </div>
    )

}