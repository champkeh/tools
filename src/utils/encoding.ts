import lzstring from 'lz-string'

function base64Encode(text: string) {
    return  window.btoa(unescape(encodeURIComponent( text )))
}

function base64Decode(text: string) {
    return  decodeURIComponent(escape(window.atob( text )))
}

function lzStringEncode(text: string) {
    return lzstring.compressToEncodedURIComponent(text)
}

function lzStringDecode(text: string) {
    return lzstring.decompressFromEncodedURIComponent(text)
}

export type Encoding = 'base64' | 'lzstring'

export function encode(text: string, encoding: Encoding): string {
    if (encoding === 'base64') {
        return base64Encode(text)
    } else if (encoding === 'lzstring') {
        return lzStringEncode(text)
    } else {
        throw new Error(`Encoding '${encoding}' not supported`)
    }
}

export function decode(text: string, encoding: Encoding): string {
    if (encoding === 'base64') {
        return base64Decode(text)
    } else if (encoding === 'lzstring') {
        return lzStringDecode(text)!
    } else {
        throw new Error(`Encoding '${encoding}' not supported`)
    }
}
