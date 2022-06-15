import {serve} from "https://deno.land/std@0.140.0/http/server.ts";

async function serveVueApp(req: Request): Promise<Response> {
    const { pathname } = new URL(req.url);

    let reqFilePath = ''
    if (pathname.startsWith('/dist')) {
        reqFilePath = pathname.slice(1)
    } else {
        reqFilePath = 'dist/index.html'
    }

    const file = await Deno.readFile(reqFilePath);
    return new Response(file, {
        headers: {
            "content-type": mimeType(req),
        },
    });
}

/**
 * (private)
 * 解析 mime-type
 * @param request
 */
function mimeType(request: Request) {
    const fetchDest = request.headers.get('sec-fetch-dest')
    switch (fetchDest) {
        case 'document':
            return 'text/html; charset=utf-8'
        case 'style':
            return 'text/css; charset=utf-8'
        case 'script':
        case 'serviceworker':
            return 'text/javascript; charset=utf-8'
        case 'image':
            return 'image/png'
        case 'empty':
        default:
            // 根据文件后缀返回对应的mimetype
            return mimeTypeFromExt(request)
    }
}

/**
 * (private)
 * 从扩展名解析 mime-type
 * @param request
 */
function mimeTypeFromExt(request: Request): string {
    const accept = request.headers.get('Accept') || '*/*'
    const {pathname} = new URL(request.url)

    if (accept.match(/text\/html/i) || pathname === '/' || pathname.match(/\.html$/i)) {
        return 'text/html; charset=utf-8'
    } else if (accept.match(/text\/css/i) || pathname.match(/\.css$/i)) {
        return 'text/css; charset=utf-8'
    } else if (pathname.match(/\.js$/i)) {
        return 'text/javascript; charset=utf-8'
    } else if (accept.match(/image\/\*/i) || pathname.match(/\.(png|jpe?g|gif|bmp|ico)/i)) {
        const imageExt = pathname.match(/\.(?<ext>png|jpe?g|gif|bmp|ico)/i)
        if (imageExt?.groups?.ext) {
            return `image/${imageExt.groups.ext}`
        } else {
            return 'image/png'
        }
    } else if (pathname.match(/api/i)) {
        return 'application/json'
    } else {
        return 'text/html; charset=utf-8'
    }
}

serve(serveVueApp);
