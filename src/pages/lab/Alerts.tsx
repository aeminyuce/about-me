import * as React from 'react';
import Code from 'uilab/react/Code';

export default function () {
    return (
        <>
        <Code clipboard className='ui-round'>
            <Code.Line type='comment' str="JS" />
            <Code.Line str="return ui.alerts.dialog({" />
            <Code.Line inset={1} str="msg: 'Submit this form?'," />
            <Code.Line inset={1} str="success: 'Yes'," />
            <Code.Line inset={1} str="error: 'No'," />
            <Code.Line inset={1} str="callback: function (value) {" />
            <Code.Line inset={2} str="if (value === 'success') {" />
            <Code.Line inset={3} str="document.getElementById('exampleForm').submit();" />
            <Code.Line inset={2} str="}" />
            <Code.Line inset={1} str="}" />
            <Code.Line str="});" />
        </Code>
        </>
    );
}
