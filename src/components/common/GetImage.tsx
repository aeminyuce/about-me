import * as React from 'react';

// misc
import type { GetImageProps } from '../../models/Page';

export default function (props: GetImageProps) {
    const { src, alt, ratio, className, style } = props;

    return <img src={`/images/${src}`} alt={alt} data-ui-ratio={ratio} className={className} style={style} />
}