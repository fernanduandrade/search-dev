import moment from 'moment';

const formatUpdatedDate = date => {

    const todayDate = new Date()
    const date1 = moment(todayDate);
    const date2 = moment(date);
    const updatedAt = date1.diff(date2, 'days');

    return updatedAt;
}

export default formatUpdatedDate;