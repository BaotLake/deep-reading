declare module '*.js?raw' {
    const content: string
    export default content
}

declare module '*.ts?raw' {
    const content: string
    export default content
}

declare module '*.module.scss' {
    const content: { [index: string]: string }
    export default content
}

declare module '*.scss?raw' {
    const content: string
    export default content
}

declare module '*.png' {
    const content: any
    export default content
}

declare module '*.svg?svgr' {
    import React from "react"
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
    export default SVG
}


declare interface TawkApi {
    showWidget: () => void
    hideWidget: () => void
    toggleVisibility: () => void
    onLoad: null | (() => void)
}

declare interface TidioChatApi {
    hide: () => void
    show: () => void
    open: () => void
    close: () => void
}

interface Window {
    gtag?: Function
    Tawk_API?: TawkApi
    tidioChatApi?: TidioChatApi
}
