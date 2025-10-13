import { StrictMode, Suspense } from 'react';
import { BrowserRouter } from 'react-router';
import { GlobalLayout } from './global-layout';
import { AppRouter } from './router';
import './styles/globals.css';

export type HostContext = {
    basename?: string;
};

const Root = ({ basename }: HostContext) => {
    return (
        <StrictMode>
            <Suspense fallback={<div>loading...</div>}>
                <BrowserRouter basename={basename}>
                    <GlobalLayout>
                        <AppRouter />
                    </GlobalLayout>
                </BrowserRouter>
            </Suspense>
        </StrictMode>
    );
};

export default Root;
