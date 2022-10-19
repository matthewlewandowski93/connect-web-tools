import {Interceptor, UnaryRequest} from "@bufbuild/connect-web"

const interceptor: Interceptor = (next) => async (req: UnaryRequest) => {
    chrome.storage.local.get(['connect-web-values'], function(result) {
        if (result['connect-web-values'] === undefined) {
            result['connect-web-values'] = [req.message];
        } else {
            result['connect-web-values'].push(req.message)
        }
        chrome.storage.local.set({["connect-web-values"]: result});
    });
    return next(req);
}

window.CONNECT_WEB_INTERCEPTOR = interceptor
