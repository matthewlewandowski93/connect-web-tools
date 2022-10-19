chrome.storage.local.get(['connect-web-values'], function (result) {
    if (result['connect-web-values'] !== undefined) {
        result['connect-web-values'].forEach((value: any) => {
            console.log(value);
        })
    }
});