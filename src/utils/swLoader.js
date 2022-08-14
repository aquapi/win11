function register() {
    if ('serviceWorker' in navigator)
        window.addEventListener('load', async () => {
            try {
                const reg = await navigator.serviceWorker.register("sw.js", {
                    scope: "/"
                });

                console.log('Worker registration successful', reg.scope);
            } catch (e) {
                console.log(e);
            }
        });
    else
        console.log('Service Worker is not supported by browser.');
}

export default register;