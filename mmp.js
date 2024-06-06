class AffiseMMP {
    static DOMAIN = 'https://tracking.affattr.com'
    token = null
    is_inited = false

    static init({ affise_app_token } = { affise_app_token: null }) {
        if (this.is_inited || !affise_app_token) return
        this.token = affise_app_token
        this.sendPostbacks()
        this.is_inited = true
    }

    static registerEvents(events) {
        this.sendPostbacks(events)
    }

    static sendEvent(event_name, params) {
        const payload = [
            {
                "affise_event_name": event_name,
                ...params && {
                    "affise_parameters": {
                        ...params,
                    },
                },
            },
        ]
        this.sendPostbacks(payload)
    }

    static sendPostbacks(events) {
        const payload = {
            created_time: Date.now(),
            affise_app_token: this.token,
            tg_user_id: window.Telegram?.WebApp?.initDataUnsafe?.user?.id || 'test tg_user_id',
            user_agent: navigator.userAgent,
        }
        if (Array.isArray(events) && events.length !== 0) {
            payload.events = events
        }
        fetch(`${this.DOMAIN}/tg_postback`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
    }
}
