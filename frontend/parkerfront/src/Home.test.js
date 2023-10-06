import moment from 'moment';
import Home from "./Home";

test('Date on homescreen should return current date', () => {
    expect(Home.date).toEqual(
        moment().format("MMM Do YY")
    );
})