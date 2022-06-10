import dayjs from 'dayjs';

export const humanizePointDueDateDay = (dueDate) => dayjs(dueDate).format('DD/MM/YY');
export const humanizePointDueDateMmHh = (dueDate) => dayjs(dueDate).format('HH:mm');
