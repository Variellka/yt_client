import React from 'react';
import { Pagination } from 'antd';

export const MyPagination = (props) => {
    const total = props.total
    return (
        <Pagination defaultCurrent={1} total={total} />
    )
}