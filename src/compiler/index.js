import { parseHtmlToAst } from "./asrParser";

export function compileToRenderFunction(html) {
    const ast = parseHtmlToAst(html);
    console.log(ast);
}