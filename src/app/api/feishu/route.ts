import { NextRequest } from "next/server";

/**
 * POST请求处理 - 用于接收飞书事件回调
 */
export async function POST(request: NextRequest) {
    try {
        // 获取请求体
        const body = await request.json();
        
        // 输出完整的请求体数据到控制台
        console.log('Received Feishu webhook request body:', JSON.stringify(body, null, 2));

        // 处理URL验证请求

        // 处理其他事件类型
        console.log("乐子乐子乐子乐子乐子乐子乐子:", body.body.challenge)

        // 返回成功响应
        return new Response(
            JSON.stringify({challenge: body.body.challenge}),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        console.error("Error processing Feishu webhook:", error);
        return new Response(
            JSON.stringify({ code: -1, msg: "Internal Server Error" }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}