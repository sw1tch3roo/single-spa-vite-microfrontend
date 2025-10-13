import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import Root, { type HostContext } from './app/providers';

export const { bootstrap, mount, unmount } = singleSpaReact({
    React,
    ReactDOMClient,
    rootComponent: Root,
    // @ts-ignore
    errorBoundary(err, info, props: HostContext) {
        console.log('err:', err);
        console.log('info:', info);
        console.log('props:', props);

        return null;
    },
});
