import * as React from 'react';

// misc
import type { GetImgProps } from '../../models/Page';

export default function (props: GetImgProps) {
    const { src, className, alt } = props;

    return <img src={`/images/${src}`} className={className} alt={alt} />
}