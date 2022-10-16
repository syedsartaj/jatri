import moment from "moment";

const dateFormat = (date, utcOffsetValue=0, format="DD-MMM-yyyy") => {
    return moment(date)
            .utcOffset(utcOffsetValue, false)
            .format(format);
};
const timeFormat = (date, utcOffsetValue=0, format="hh:mm:ss A") => {
    return moment(date)
            .utcOffset(utcOffsetValue, false)
            .format(format);
};

const dateTimeFormat = (dateTime, utcOffsetValue=0, format="DD-MMM-yyyy hh:mm:ss A") => {
    return moment(dateTime)
        .utcOffset(utcOffsetValue, false)
        .format(format);
};

export {
    dateFormat,
    timeFormat,
    dateTimeFormat
}
