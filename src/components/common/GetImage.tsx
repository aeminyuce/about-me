import * as React from 'react';

// misc
import type { GetImageProps } from '../../models/Page';

export default function (props: GetImageProps) {
    const { src, className, alt } = props;

    return <img src={`/images/${src}`} className={className} alt={alt} />
}