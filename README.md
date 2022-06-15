# vue3-deno-deploy
使用 [Deno Deploy](https://deno.com/deploy) 部署 vue3 应用。


## 创建 Vue3 应用

常规的创建项目即可

## 添加 Deno 服务
在`src/server`下面创建`mod.ts`文件，内容如下：
```ts
import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

serve((_req) => {
    return new Response("Hello World!", {
        headers: { "content-type": "text/plain" },
    });
});
```
这个文件作为 Deno 的入口文件，充当服务器的角色。我们需要在里面`serve`我们的Vue3构建之后的`dist`目录。
