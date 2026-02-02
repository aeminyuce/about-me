import * as React from 'react';

// misc
import type { GetImageProps } from '../../models/Page';

export default function (props: GetImageProps) {
    const { src, alt, className, style } = props;

    return <img src={`/images/${src}`} alt={alt} className={className} style={style} />
}